angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.INFO_SCHEDULE_CONTROLLER,
		function($rootScope, $scope, $http, $window) {
			console.log("INFO_SCHEDULE_CONTROLLER");

			$scope.user ='';
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
			var scopeForSave = $scope.$new();
			scopeForSave.getUser = getUser;

			if(null != $rootScope.user)
			{
				getUser();				
			}
			setTimeout("getUser()",500);
			
			$scope.terms = [];
			$scope.term = {};
			var loadAllTerms = function(){
				$http({
					method : 'get',
					url : '/scmapping/selectAllTerms'
				})
				.success(function(data) {
					$scope.terms = data;
					if(null != data && $scope.terms.length > 0){
						$scope.term = $scope.terms[$scope.terms.length - 1].pterm;	
					}
					$scope.loadTableData();
				});
			}
			loadAllTerms();
			
			init = function(){
				$scope.w1s1 = '';
				$scope.w1s2 = '';
				$scope.w1s3 = '';
				$scope.w1s4 = '';
				$scope.w1s5 = '';
				$scope.w2s1 = '';
				$scope.w2s2 = '';
				$scope.w2s3 = '';
				$scope.w2s4 = '';
				$scope.w2s5 = '';
				$scope.w3s1 = '';
				$scope.w3s2 = '';
				$scope.w3s3 = '';
				$scope.w3s4 = '';
				$scope.w3s5 = '';
				$scope.w4s1 = '';
				$scope.w4s2 = '';
				$scope.w4s3 = '';
				$scope.w4s4 = '';
				$scope.w4s5 = '';
				$scope.w5s1 = '';
				$scope.w5s2 = '';
				$scope.w5s3 = '';
				$scope.w5s4 = '';
				$scope.w5s5 = '';
				$scope.w6s1 = '';
				$scope.w6s2 = '';
				$scope.w6s3 = '';
				$scope.w6s4 = '';
				$scope.w6s5 = '';
				$scope.w7s1 = '';
				$scope.w7s2 = '';
				$scope.w7s3 = '';
				$scope.w7s4 = '';
				$scope.w7s5 = '';				
			}
			init();
			
			$scope.loadTableData = function() {
				if(null != $scope.term){
					$http({
						method : 'post',
						url : '/schedule/selectByTerm',
						data : $scope.term
					})
					.success(function(data) {
						$scope.data = data;
						init();
						for(var i=0;i<$scope.data.length;i++){
							if("星期一" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w1s1 = $scope.w1s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w1s2 = $scope.w1s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w1s3 = $scope.w1s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w1s4 = $scope.w1s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w1s5 = $scope.w1s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}
							}else if("星期二" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w2s1 = $scope.w2s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w2s2 = $scope.w2s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w2s3 = $scope.w2s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w2s4 = $scope.w2s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w2s5 = $scope.w2s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}
							}else if("星期三" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w3s1 = $scope.w3s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w3s2 = $scope.w3s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w3s3 = $scope.w3s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w3s4 = $scope.w3s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w3s5 = $scope.w3s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}									
							}else if("星期四" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w4s1 = $scope.w4s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w4s2 = $scope.w4s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w4s3 = $scope.w4s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w4s4 = $scope.w4s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w4s5 = $scope.w4s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}									
							}else if("星期五" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w5s1 = $scope.w5s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w5s2 = $scope.w5s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w5s3 = $scope.w5s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w5s4 = $scope.w5s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w5s5 = $scope.w5s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}									
							}else if("星期六" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w6s1 = $scope.w6s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w6s2 = $scope.w6s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w6s3 = $scope.w6s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w6s4 = $scope.w6s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w6s5 = $scope.w6s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}									
							}else if("星期日" == $scope.data[i].week){
								if("1-2节" == $scope.data[i].section){
									$scope.w7s1 = $scope.w7s1+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("3-4节" == $scope.data[i].section){
									$scope.w7s2 = $scope.w7s2+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("5-6节" == $scope.data[i].section){
									$scope.w7s3 = $scope.w7s3+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("7-8节" == $scope.data[i].section){
									$scope.w7s4 = $scope.w7s4+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}else if("9-10节" == $scope.data[i].section){
									$scope.w7s5 = $scope.w7s5+'<br>'+$scope.data[i].cname+'<br>'+$scope.data[i].spositon+'<br>'+$scope.data[i].sdescription+$scope.data[i].freq;
								}									
							}
						}
						});
				}
			};
}		
);
