angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.INFO_VIEW_CONTROLLER,
		function($rootScope, $scope, $uibModal, $http, toastr) {
			console.log("INFO_VIEW_CONTROLLER");	
			getUser = function(){
				$scope.user = $rootScope.user;
				console.log($scope.user);
				if("student" == $scope.user.type)
				{
					console.log("student");
					$scope.user.student = true;
				}
				else if("teacher" == $scope.user.type)
				{
					console.log("teacher");
					$scope.user.teacher = true;
				}
			}
			if(null != $rootScope.user)
			{
				getUser();				
			}
			setTimeout("getUser()",500);
			

		}
		);