angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.EXAM_VIEW_CONTROLLER,
		function($scope, $rootScope, $http, $window, NgTableParams, $uibModal) {
			console.log("EXAM_VIEW_CONTROLLER");
			
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
				name : "课程名",
				ticked : true
			}, {
				name : "考试类型",
				ticked : true
			},{
				name : "考试形式",
				ticked : true
			}, {
				name : "考试时长",
				ticked : true
			}, {
				name : "考试总分",
				ticked : true
			},{
				name : "考试地点",
				ticked : true
			},{
				name : "考试名称",
				ticked : true
			},{
				name : "备注信息",
				ticked : false
			},{
				name : "考试时间",
				ticked : true
			}];
			$scope.outputSelect = [];
			
			var scopeForModal = $scope.$new();
			scopeForModal.loadTableData = function() {
				$http.get('/examination/selectAllExam').success(
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
			scopeForModal.loadTableData();

			//checkBox operation
			$scope.checkboxes = {
				checked : false,
				items : {}
			};
			
			// watch for check all checkbox
			$scope.$watch(function() {
				return $scope.checkboxes.checked;
			}, function(value) {
				angular.forEach($scope.data, function(exam) {
					$scope.checkboxes.items[exam.eid] = value;
				});
			});
			//get checked questions ids in array
			getAllSelectedData=function(){
				var exaIds=[];
				angular.forEach($scope.data, function(exam) {
					if($scope.checkboxes.items[exam.eid]){
						exaIds.push(parseInt(exam.eid));
					}
				});
				return exaIds;
			}
			
			$scope.addExam = function(exam)
			{
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'addExam.html',
					controller : 'addExamCtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						exam:function(){ 
							return exam;
						}
					}
				});
			}
			$scope.deleteExam = function()
			{
				var exaIds = getAllSelectedData();

				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'sureDeleteE.html',
					controller : 'sureDeleteECtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						exaIds:function(){ 
							return exaIds;
						}
					}
				});
			}
		}
);

angular.module('addExamApp',[]).controller('addExamCtrl',function($scope, $rootScope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, exam){
	var isUpdate = true;
	if(null != exam)
	{
		$scope.exam = exam;
		if(null != $scope.exam.startDt){
			$scope.exam.zhou = $scope.exam.startDt.substring(0,$scope.exam.startDt.indexOf("周")+1);
			$scope.exam.week = $scope.exam.startDt.substring($scope.exam.startDt.indexOf("星"),$scope.exam.startDt.indexOf("星")+3);
			$scope.exam.section = $scope.exam.startDt.substring($scope.exam.startDt.indexOf("星")+3);			
		}else{
			$scope.exam.zhou = {};
			$scope.exam.week = {};
			$scope.exam.section = {};
		}

		isUpdate = true;
	}
	else{
		$scope.exam = {};
		$scope.exam.isActive = true;
		isUpdate = false;
	}

	$scope.courses = {};
	$scope.types = {};
	$scope.forms = {};
	
	var scopeForSave = $scope.$new();
	scopeForSave.loadTableData = $scope.loadTableData;
	
	$scope.TERM_EMPTY = window.mss.constants.VALIDATE_MSG.TERM_EMPTY;
	$scope.COURSE_EMPTY = window.mss.constants.VALIDATE_MSG.COURSE_EMPTY;
	$scope.CNAME_EMPTY = window.mss.constants.VALIDATE_MSG.CNAME_EMPTY;
	$scope.TYPE_EMPTY = window.mss.constants.VALIDATE_MSG.TYPE_EMPTY;
	$scope.FORM_EMPTY = window.mss.constants.VALIDATE_MSG.FORM_EMPTY;
	$scope.POSITION_EMPTY = window.mss.constants.VALIDATE_MSG.POSITION_EMPTY;
	$scope.HOUR_EMPTY = window.mss.constants.VALIDATE_MSG.HOUR_EMPTY;
	
	//cancel function
	$scope.cancel = function() {
		$uibModalInstance.close();
	};
	
	var loadDropDowns = function(){
		$http({
				method : 'get',
				url : '/course/selectCourseForUser'
			})
			.success(function(response) {
				$scope.courses = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
		$http({
				method : 'post',
				url : '/listdata/selectByListID',
				data : 8
			})
			.success(function(response) {
				$scope.weeks = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
		$http({
				method : 'post',
				url : '/listdata/selectByListID',
				data : 9
			})
			.success(function(response) {
				$scope.hours = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
		$http({
				method : 'post',
				url : '/listdata/selectByListID',
				data : 3
			})
			.success(function(response) {
				$scope.types = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
		$http({
				method : 'post',
				url : '/listdata/selectByListID',
				data : 4
			})
			.success(function(response) {
				$scope.forms = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			}); 
		$scope.zhous = [];
		for(var i=1;i<=22;i++){
			$scope.zhous.push(i+"周");
		}

	}
	loadDropDowns();


	$scope.addExamInfo = function (){
		$uibModal.open({
			templateUrl: 'sureSaveE.html',
			controller: 'sureSaveECtrl',
			scope: scopeForSave,
			resolve: {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				exam : function (){
					return $scope.exam;
				}
			}
		});
	};
	
});

angular.module('sureSaveE', []).controller('sureSaveECtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, exam) {
	$scope.exam = exam;
	$scope.exam.startDt = $scope.exam.zhou+$scope.exam.week + $scope.exam.section;
	$scope.yes = function() {
		if(null == $scope.exam.eid){
			$http({
				method : 'post',
				url : '/examination/insert',
				data : $scope.exam
			})
			.success(function(response) {
				toastr.success("Success",window.mss.constants.UPDATE_MSG.INSERT_SUCCESS);
				$scope.loadTableData();
				$uibModalInstance.close();
				parentModalInstance.close();					
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
				url : '/examination/updateByPrimaryKey',
				data : $scope.exam
			})
			.success(function(response) {
				toastr.success("Success",window.mss.constants.UPDATE_MSG.UPDATE_SUCCESS);
				$scope.loadTableData();
				$uibModalInstance.close();
				parentModalInstance.close();					
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
				parentModalInstance.close();
			}); 
		}

	}
	$scope.no = function() {
		$uibModalInstance.dismiss();
	}
});

angular.module('sureDeleteE', []).controller('sureDeleteECtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, exaIds) {
	var exaIds = exaIds;

	$scope.yes = function() {
		if(exaIds.length > 0){
			$http.get("/examination/inactiveExam?eids="+exaIds)
			.success(function(data){
				toastr.success("Success",window.mss.constants.UPDATE_MSG.DELETE_SUCCESS);
				$scope.loadTableData();
				$uibModalInstance.close();
			}).error(function(){
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
			});
		}else{
			toastr.error("Error",window.mss.constants.UPDATE_MSG.SELECT_EMPTY);
		}
	}
	$scope.no = function() {
		$uibModalInstance.dismiss();
	}
});