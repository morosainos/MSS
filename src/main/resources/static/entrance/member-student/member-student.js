angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.MEMBER_STUDENT_CONTROLLER,
		function($scope, $rootScope, $uibModal, $http, toastr, NgTableParams) {
			console.log("MEMBER_STUDENT_CONTROLLER");	
			
			getUser = function(){
				$scope.user = $rootScope.user;
				console.log($scope.user);
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
				name : "入学时间",
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
				name : "专业类别",
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
				$http.get('/student/selectForAll').success(
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
				angular.forEach($scope.data, function(student) {
					$scope.checkboxes.items[student.sid] = value;
				});
			});
			//get checked questions ids in array
			getAllSelectedData=function(){
				var stuIds=[];
				angular.forEach($scope.data, function(student) {
					if($scope.checkboxes.items[student.sid]){
						stuIds.push(parseInt(student.sid));
					}
				});
				return stuIds;
			}
			
			$scope.addStudent = function(student)
			{
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'addStudent.html',
					controller : 'addStudentCtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						student:function(){ 
							return student;
						}
					}
				});
			}
			
			$scope.deleteStudent = function()
			{
				var stuIds = getAllSelectedData();
				
				$uibModal.open({				
					backdrop: false, 
					templateUrl : 'sureDelete.html',
					controller : 'sureDeleteCtrl',
					scope: scopeForModal,
					size : 'lg',
					resolve : {
						stuIds:function(){ 
							return stuIds;
						}
					}
				});
			}
		}
);

angular.module('addStudentApp',[]).controller('addStudentCtrl',function($scope, $rootScope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, student){
	var isUpdate = true;
	if(null != student)
	{
		$scope.student = student;
		$scope.student.password1 = $scope.student.spassword;
		isUpdate = true;
	}
	else{
		$scope.student = {};
		$scope.student.ssex = '男';
		$scope.student.sacademy = 1;
		$scope.student.smajor= 1;
		$scope.student.sclass = 1;
		$scope.student.stype = 21;
		$scope.student.isActive = true;
		isUpdate = false;
	}
	$scope.academies = {};
	$scope.majors = {};
	$scope.classes = {};
	$scope.majortype = [{id: 20,name: '航海类' }, {id: 21,name: '非航海类' }];
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
				if(!isUpdate)
				{
					$scope.student.sacademy = $scope.academies[0].aid;
				}
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			});
	}
	getAllAcademy();

	$scope.loadMajor = function(){
		$http({
				method : 'post',
				url : '/major/loadMajorByAcademy',
				data : $scope.student.sacademy
			})
			.success(function(response) {
				$scope.majors = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			});
		$scope.loadClass();
	}

	$scope.loadClass = function(){
		$http({
				method : 'post',
				url : '/class/selectByMajor',
				data : $scope.student.smajor
			})
			.success(function(response) {
				$scope.classes = response;
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
			});
	}
	if(!isUpdate)
	{
		$scope.loadMajor();
		$scope.loadClass();
	}
	else{
		$scope.loadMajor();
		$scope.loadClass();
		$scope.student.smajor = student.smajor;
		$scope.student.sclass = student.sclass;
	}

	$scope.addStudentInfo = function (){
		$uibModal.open({
			templateUrl: 'sureSaveS.html',
			controller: 'sureSaveSCtrl',
			scope: scopeForSave,
			resolve: {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				student : function (){
					return $scope.student;
				}
			}
		});
	};
	
});

angular.module('sureSaveS', []).controller('sureSaveSCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, student) {
	$scope.student = student;

	$scope.yes = function() {
		if(null == $scope.student.sid){
			$http({
				method : 'post',
				url : '/student/insert',
				data : $scope.student
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
				url : '/student/updateByPrimaryKey',
				data : $scope.student
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

angular.module('sureDelete', []).controller('sureDeleteCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, stuIds) {
	var stuIds = stuIds;
	
	$scope.yes = function() {
		if(stuIds.length > 0){
			$http.get("/student/inactiveStudent?stuIds="+stuIds)
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