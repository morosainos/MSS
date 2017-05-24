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
		}
		);