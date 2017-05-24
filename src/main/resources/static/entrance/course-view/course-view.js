angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.COURSE_VIEW_CONTROLLER,
		function($scope, $rootScope, $http, $window, NgTableParams, $uibModal) {
			console.log("courseviewController");
			
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
			
			var scopeForModal = $scope.$new();
			scopeForModal.loadTableData = function() {
				$http.get('/scmapping/selectAllCourse').success(
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

		}	
);
