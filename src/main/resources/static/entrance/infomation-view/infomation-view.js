angular.module(window.mss.appName).controllerProvider.register(
		window.mss.constants.CONTROLLER.INFO_VIEW_CONTROLLER,
		function($rootScope, $scope, $uibModal, $http, $window, toastr) {
			console.log("INFO_VIEW_CONTROLLER");
			
			$scope.user ={};
			getUser = function(){
				$http({
					method : 'get',
					url : '/user/getSession'
				})
				.success(function(response) {
					$scope.user = response;
					if("student" == $scope.user.type)
					{
						$scope.user.student = true;
						$http({
							method : 'post',
							url : '/pointset/selectBasicInfo',
							data:$scope.user.major
						})
						.success(function(response) {
							$scope.pointset = response;
						});
						$http({
							method : 'get',
							url : '/pointset/selectForStudent'
						})
						.success(function(response) {
							$scope.selfpointset = response;
						});
						$http({
							method : 'get',
							url : '/pointset/selectForAllType'
						})
						.success(function(response) {
							$scope.selfallpoint = response;
						});
						$http({
							method : 'get',
							url : '/pointset/selectForDegreeType'
						})
						.success(function(response) {
							$scope.selfdegreepoint = response;
						});
					}
					else if("teacher" == $scope.user.type)
					{
						if("管理员" == response.role){
							$scope.user.admin = true;
						}
						$scope.user.teacher = true;
					}
				})
				.error(function(response) {
					$window.location.href = "/entrance/home/login.html";
				}); 

			}
			var scopeForSave = $scope.$new();
			scopeForSave.getUser = getUser;

			getUser();				
			
			$scope.edit = function (){
				var modalInstance = $uibModal.open({
					animation : true,
					templateUrl : 'editInfo.html',
					controller : 'editInfoCtrl',
					size : 'lg',
					backdrop : false,
					scope: scopeForSave,
					rootScope: $rootScope,
					resolve : {
						user : function (){
							return $scope.user;
						}
					}
				});
			};

		}
		);
		
var editInfo = angular.module('editInfoApp',[]);
editInfo.controller('editInfoCtrl',function($scope, $rootScope,$http, NgTableParams, 
	$uibModal, $uibModalInstance, toastr, user){
	//initial form params
	$scope.user = angular.copy(user);
	var scopeForSave = $scope.$new();
	scopeForSave.getUser = $scope.getUser;
	
	if(null != $scope.user)
	{
		$scope.user.password1 = $scope.user.password;		
	}

	$scope.EMAIL_INVALID = window.mss.constants.VALIDATE_MSG.EMAIL_INVALID;
	$scope.PHONE_INVALID = window.mss.constants.VALIDATE_MSG.PHONE_INVALID;
	$scope.PASSWORD_EMPTY = window.mss.constants.VALIDATE_MSG.PASSWORD_EMPTY;
	$scope.PASSWORD_NOT_EQUAL = window.mss.constants.VALIDATE_MSG.PASSWORD_NOT_EQUAL;
	
	//cancel function
	$scope.cancel = function() {
		$uibModalInstance.close();
	};

	$scope.updateUserInfo = function (){
		$uibModal.open({
			templateUrl: 'sureSave.html',
			controller: 'sureSaveCtrl',
			scope: scopeForSave,
			rootScope: $rootScope,
			resolve: {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				user : function () {
					return $scope.user;
				}
			}
		});
	};
	
});

angular.module('sureSave', []).controller('sureSaveCtrl', function($scope, $rootScope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, user) {
	$scope.user = user;
	var postUrl = {};
	if("student" == $scope.user.type)
	{
		postUrl = '/student/updateForInfo';
	}
	else if("teacher" == $scope.user.type)
	{
		postUrl = '/teacher/updateForInfo';
	}

	$scope.yes = function() {
			$http({
				method : 'post',
				url : postUrl,
				data : $scope.user
			})
			.success(function(response) {
				$http({
					method : 'get',
					url : '/user/getSession'
				})
				.success(function(response) {
					if(null != response)
					{
						$rootScope.user = response;
						$scope.getUser();
						toastr.success("Success",window.mss.constants.UPDATE_MSG.UPDATE_SUCCESS);
					}else{
						toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
					}
					$uibModalInstance.close();
					parentModalInstance.close();
				})
				.error(function(response) {
					toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
					$uibModalInstance.close();
					parentModalInstance.close();
				}); 
			})
			.error(function(response) {
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
				parentModalInstance.close();
			}); 

	}
	$scope.no = function() {
		$uibModalInstance.dismiss();
	}
});