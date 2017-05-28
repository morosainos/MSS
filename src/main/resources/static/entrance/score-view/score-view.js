angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.SCORE_VIEW_CONTROLLER,
		function($scope, $uibModal, $log, $http, toastr, NgTableParams,$rootScope) {
			console.log("SCORE_VIEW_CONTROLLER");	
			
			$scope.user ={};
			getUser = function(){
				$scope.user = $rootScope.user;
			}

			if(null != $rootScope.user)
			{
				getUser();				
			}
			setTimeout("getUser()",500);
			
			// Define drop down menu default items
			$scope.filter = [ {
				name : "学期",
				ticked : true
			}, {
				name : "课程号",
				ticked : true
			}, {
				name : "所属学院",
				ticked : true
			}, {
				name : "课程名",
				ticked : true
			},{
				name : "课程类型",
				ticked : false
			}, {
				name : "课程种类",
				ticked : true
			}, {
				name : "课程学时",
				ticked : true
			},{
				name : "课程学分",
				ticked : true
			},{
				name : "课程老师",
				ticked : true
			},{
				name : "期末成绩",
				ticked : true
			},{
				name : "总学分",
				ticked : true
			},{
				name : "总分",
				ticked : true
			}];
			$scope.outputSelect = [];
			
			var loadTableData = function() {
				$http.get('/score/selectForFinalScore').success(
						function(data) {
							$scope.data = data;
							$scope.tableParams = new NgTableParams({
								'count' : 10
							}, {
								counts : [],
								filterDelay : 0,
								dataset : data
							});
						});
			};
			loadTableData();

			$scope.viewScore = function(mapid)
			{
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'viewScore.html',
					controller : 'viewScoreCtrl',
					size : 'lg',
					resolve : {
						mapid:function(){ 
							return mapid;
						}
					}
				});
			}
			
		}
);

angular.module('viewScoreApp',[]).controller('viewScoreCtrl',function($scope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, mapid){

	//cancel function
	$scope.cancel = function() {
		$uibModalInstance.close();
	};

	var loadTableData = function(){
		$http({
				method : 'post',
				url : '/score/selectForAllScore',
				data : mapid
			})
			.success(function(data) {
				$scope.data = data;
				$scope.innerParams = new NgTableParams({
					'count' : 10
				}, {
					counts : [],
					filterDelay : 0,
					dataset : data
				});
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
	}
	loadTableData();

});
