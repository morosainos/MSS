angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.INFO_NEWS_CONTROLLER,
		function($rootScope, $scope, $http, $window) {
			console.log("INFO_NEWS_CONTROLLER");
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
			$scope.user = {};
			$scope.user.student = false;
			$scope.user.teacher = false;
			setTimeout("getUser()",200);
		}		
);
