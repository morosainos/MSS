angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.MEMBER_TEACHER_CONTROLLER,
		function($scope, $rootScope, $uibModal, $http, toastr, NgTableParams) {
			console.log("MEMBER_TEACHER_CONTROLLER");	
			
			$scope.user ={};
			getUser = function(){
				$scope.user = $rootScope.user;
				if("student" == $scope.user.type)
				{
					$scope.user.student = true;
				}
				else if("teacher" == $scope.user.type)
				{
					$scope.user.teacher = true;
				}
			}

			if(null != $rootScope.user)
			{
				getUser();				
			}
			setTimeout("getUser()",500);
			
			// Define drop down menu default items
			$scope.filter = [ {
				name : "姓名",
				ticked : true
			}, {
				name : "账号",
				ticked : true
			}, {
				name : "性别",
				ticked : false
			}, {
				name : "角色",
				ticked : true
			},{
				name : "学院",
				ticked : true
			}, {
				name : "专业",
				ticked : true
			}, {
				name : "班级",
				ticked : true
			},{
				name : "身份证号",
				ticked : false
			},{
				name : "邮箱",
				ticked : false
			},{
				name : "电话",
				ticked : false
			},{
				name : "民族",
				ticked : false
			}];
			$scope.outputSelect = [];
			
			var scopeForModal = $scope.$new();
			scopeForModal.loadTableData = function() {
				$http.get('/teacher/selectForAll').success(
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
				angular.forEach($scope.data, function(teacher) {
					$scope.checkboxes.items[teacher.tid] = value;
				});
			});
			//get checked questions ids in array
			getAllSelectedData=function(){
				var teaIds=[];
				angular.forEach($scope.data, function(teacher) {
					if($scope.checkboxes.items[teacher.tid]){
						teaIds.push(parseInt(teacher.tid));
					}
				});
				return teaIds;
			}
			
			$scope.addTeacher = function(teacher)
			{
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'addTeacher.html',
					controller : 'addTeacherCtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						teacher:function(){ 
							return teacher;
						}
					}
				});
			}
			
			$scope.deleteTeacher = function()
			{
				var teaIds = getAllSelectedData();

				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'sureDeleteT.html',
					controller : 'sureDeleteTCtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						teaIds:function(){ 
							return teaIds;
						}
					}
				});
			}
		}
);

angular.module('addTeacherApp',[]).controller('addTeacherCtrl',function($scope, $rootScope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, teacher){
	var isUpdate = true;
	if(null != teacher)
	{
		$scope.teacher = teacher;
		$scope.teacher.password1 = $scope.teacher.tpassword;
		isUpdate = true;
	}
	else{
		$scope.teacher = {};
		$scope.teacher.tsex = '男';
		$scope.teacher.trole = 2;
		$scope.teacher.isActive = true;
		isUpdate = false;
	}
	$scope.academies = {};
	$scope.majors = {};
	$scope.classes = {};
	$scope.roles = [{id: 1,name: '管理员' }, {id: 2,name: '教师' }, {id: 3,name: '人事' }];
	$scope.gender = [{name: '男' }, {name: '女' }];
	
	var scopeForSave = $scope.$new();
	scopeForSave.loadTableData = $scope.loadTableData;
	
	$scope.NAME_EMPTY = window.mss.constants.VALIDATE_MSG.NAME_EMPTY;
	$scope.NUMBER_EMPTY = window.mss.constants.VALIDATE_MSG.NUMBER_EMPTY;
	$scope.NUMBER_INVALID = window.mss.constants.VALIDATE_MSG.NUMBER_INVALID;
	$scope.DATE_EMPTY = window.mss.constants.VALIDATE_MSG.DATE_EMPTY;
	$scope.MAJOR_EMPTY = window.mss.constants.VALIDATE_MSG.MAJOR_EMPTY;
	$scope.ACADEMY_EMPTY = window.mss.constants.VALIDATE_MSG.ACADEMY_EMPTY;
	$scope.CLASS_EMPTY = window.mss.constants.VALIDATE_MSG.CLASS_EMPTY;
	$scope.DATE_INVALID = window.mss.constants.VALIDATE_MSG.DATE_INVALID;
	$scope.EMAIL_INVALID = window.mss.constants.VALIDATE_MSG.EMAIL_INVALID;
	$scope.PHONE_INVALID = window.mss.constants.VALIDATE_MSG.PHONE_INVALID;
	$scope.PASSWORD_EMPTY = window.mss.constants.VALIDATE_MSG.PASSWORD_EMPTY;
	$scope.PASSWORD_NOT_EQUAL = window.mss.constants.VALIDATE_MSG.PASSWORD_NOT_EQUAL;
	
	//cancel function
	$scope.cancel = function() {
		$uibModalInstance.close();
	};
	
	var getAllAcademy = function(){
		$http({
				method : 'get',
				url : '/academy/selectAllAcademy'
			})
			.success(function(response) {
				$scope.academies = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			});
	}
	getAllAcademy();

	$scope.loadMajor = function(){
		if(null != $scope.teacher.tAcademy)
		{
			$http({
					method : 'post',
					url : '/major/loadMajorByAcademy',
					data : $scope.teacher.tAcademy
				})
				.success(function(response) {
					$scope.majors = response;
				})
				.error(function(response) {
					toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				});
			$scope.loadClass();			
		}

	}

	$scope.loadClass = function(){
		$http({
				method : 'post',
				url : '/class/selectByMajor',
				data : $scope.teacher.tMajor
			})
			.success(function(response) {
				$scope.classes = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			});
	}
	if(null != $scope.teacher.tMajor)
	{
		if(!isUpdate)
		{
			$scope.loadMajor();
			$scope.loadClass();
		}
		else{
			$scope.loadMajor();
			$scope.loadClass();
			$scope.teacher.tMajor = teacher.tMajor;
			$scope.teacher.tClass = teacher.tClass;
		}		
	}


	$scope.addTeacherInfo = function (){
		console.log($scope.teacher);
		$uibModal.open({
			templateUrl: 'sureSaveT.html',
			controller: 'sureSaveTCtrl',
			scope: scopeForSave,
			resolve: {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				teacher : function (){
					return $scope.teacher;
				}
			}
		});
	};
	
});

angular.module('sureSaveT', []).controller('sureSaveTCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, teacher) {
	$scope.teacher = teacher;
	$scope.yes = function() {
		if(null == $scope.teacher.tid){
			$http({
				method : 'post',
				url : '/teacher/insert',
				data : $scope.teacher
			})
			.success(function(response) {
				if(-1 == response)
				{
					toastr.error("Error",window.mss.constants.VALIDATE_MSG.ACCOUNT_DUPLICATE);
				}
				else{
					toastr.success("Success",window.mss.constants.UPDATE_MSG.INSERT_SUCCESS);
					$scope.loadTableData();
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
				url : '/teacher/updateByPrimaryKey',
				data : $scope.teacher
			})
			.success(function(response) {
				if(-1 == response)
				{
					toastr.error("Error",window.mss.constants.VALIDATE_MSG.ACCOUNT_DUPLICATE);
				}
				else{
					toastr.success("Success",window.mss.constants.UPDATE_MSG.UPDATE_SUCCESS);
					$scope.loadTableData();
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

	}
	$scope.no = function() {
		$uibModalInstance.dismiss();
	}
});

angular.module('sureDeleteT', []).controller('sureDeleteTCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, teaIds) {
	var teaIds = teaIds;

	$scope.yes = function() {
		if(teaIds.length > 0){
			$http.get("/teacher/inactiveTeacher?teaIds="+teaIds)
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