angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.SCORE_VIEW_TEACHER_CONTROLLER,
		function($scope, $uibModal, $log, $http, toastr, NgTableParams,
				$resource, $rootScope) {
			console.log("SCORE_VIEW_TEACHER_CONTROLLER");	
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
				name : "考试名称",
				ticked : true
			},{
				name : "考试时长",
				ticked : false
			},{
				name : "考试总分",
				ticked : true
			},{
				name : "考试类型",
				ticked : true
			},{
				name : "考试形式",
				ticked : false
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

			$scope.addScore = function(eid,examtype)
			{
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'addScore.html',
					controller : 'addScoreCtrl',
					size : 'lg',
					resolve : {
						eid:function(){ 
							return eid;
						},
						examtype:function(){ 
							return examtype;
						}
					}
				});
			}
			
		}
);

angular.module('addScoreApp',[]).controller('addScoreCtrl',function($scope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, eid, examtype){

	$scope.isPointBanned = true;
	if("期末" == examtype){
		$scope.isPointBanned = false;
	}
	
	//cancel function
	$scope.cancel = function() {
		$uibModalInstance.close();
	};
	
	$scope.detectScore = function(){
		var totalScore = {};
		for(var i=0;i<$scope.data.length;i++){
			totalScore += $scope.data[i].score;
		}
		return totalScore;
	}
	
	var loadTableData = function(){
		$http({
				method : 'post',
				url : '/score/selectForStudentScore',
				data : eid
			})
			.success(function(data) {
				$scope.data = data;
				if(!$scope.isPointBanned && null !=$scope.data && $scope.data.length >0){
					$scope.$watch($scope.detectScore,function(newValue,oldValue){
						for(var i=0;i<$scope.data.length;i++){
							$scope.data[i].point = $scope.data[i].score*5.0/$scope.data[i].totalscore;
						}
					});
					
				}
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
	
	$scope.updateScore = function (){
		$uibModal.open({
			templateUrl: 'sureSaveSC.html',
			controller: 'sureSaveSCCtrl',
			resolve: {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				data : function (){
					return $scope.data;
				},
				eid : function (){
					return eid;
				}
			}
		});
	};

});


angular.module('sureSaveSCApp', []).controller('sureSaveSCCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, data, eid) {
	$scope.data = data;
	$scope.yes = function() {
		if(null == $scope.data[0].sid){
			//insert score
			$http({
				method : 'post',
				url : '/score/insert',
				contentType : 'application/json;charset=utf-8',
                dataType:"json",
				data : JSON.stringify($scope.data)
			})
			.success(function(response) {
				if(response < 1)
				{
					toastr.error("Error",window.mss.constants.UPDATE_MSG.INSERT_FAILED);
				}
				else{
					toastr.success("Success",window.mss.constants.UPDATE_MSG.INSERT_SUCCESS);
					$uibModalInstance.close();
					parentModalInstance.close();					
				}
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
				parentModalInstance.close();
			}); 			
		}
		else{
			$http({
				method : 'post',
				url : '/score/updateByPrimaryKey',
				contentType : 'application/json;charset=utf-8',
                dataType:"json",
				data : JSON.stringify($scope.data)
			})
			.success(function(response) {
				if(response < 1)
				{
					toastr.error("Error",window.mss.constants.UPDATE_MSG.UPDATE_FAILED);
				}
				else{
					toastr.success("Success",window.mss.constants.UPDATE_MSG.UPDATE_SUCCESS);
					$uibModalInstance.close();
					parentModalInstance.close();					
				}
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
				parentModalInstance.close();
			}); 
		}

	};
	$scope.no = function() {
		$uibModalInstance.dismiss();
	};
});
