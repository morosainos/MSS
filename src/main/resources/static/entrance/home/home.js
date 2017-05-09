angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.HOME_CONTROLLER,
		function($scope, $http, $window) {
//			// storing all menu information
//			$scope.menuList;
//			$scope.isShowContent = false;
//			
//			// Get user from database 
//			$http({
//				method : 'GET',
//				url : '/getLoginUser'
//			}).success(function(response) {
//				$scope.user = response;
//				var roleId;
//				if(angular.isUndefined($scope.user.userRole) || $scope.user.userRole == null){
//					roleId = -1;	//	If the server error ,then set -1 to server
//				}else{
//					roleId = $scope.user.userRole;
//					if(roleId==1){
//						$scope.roleName="Admin";
//					}else if(roleId==2){
//						$scope.roleName="Reviewer";
//					}
//				$scope.getAllMenu(roleId);
//				}
//			}).error(function(response) {
//
//			});
//			
//			// get all menus from database
//			$scope.getAllMenu = function(roleId){
//				$http({
//					method : 'GET',
//					url : '/getMenu',
//					params : {'roleId' : roleId}
//				}).success(function(response) {
//					$scope.menuList = response;
//				}).error(function(response) {
//	
//				});
//			}
//			
//			/**
//			 * @description:Get Json Data To Show In Quicksearch
//			 */
//			typeaheadGetJson($scope, $http);
//			$scope.navigateToLogout = function() {
//				$http.post("/logout").then(function() {
//					$window.location.href = "/logout";
//				});
//			}
		}		
);
