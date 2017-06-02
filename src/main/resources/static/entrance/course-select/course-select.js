angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.COURSE_SELECT_CONTROLLER,
		function($rootScope, $scope, $http, $window, $uibModal, toastr, NgTableParams) {
			console.log("COURSE_SELECT_CONTROLLER");

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
			
			$scope.term = {};
			var date = new Date();
			var month = date.getMonth()+1;
			var year = date.getFullYear();
			if(month > 3 && month < 9)
			{
				$scope.term = year + "第一学期";
			}else{
				$scope.term = year = "第二学期";
			}
			
			$scope.filter = [ {
				name : "课程号",
				ticked : false
			}, {
				name : "课程名",
				ticked : true
			}, {
				name : "课程老师",
				ticked : true
			}, {
				name : "课程属性",
				ticked : true
			},{
				name : "课程类型",
				ticked : false
			}, {
				name : "所属学院",
				ticked : false
			}, {
				name : "学分",
				ticked : true
			},{
				name : "学时",
				ticked : true
			},{
				name : "考试类型",
				ticked : false
			},{
				name : "星期",
				ticked : true
			},{
				name : "节数",
				ticked : true
			},{
				name : "周长",
				ticked : true
			},{
				name : "频率",
				ticked : true
			},{
				name : "总人数",
				ticked : true
			},{
				name : "剩余人数",
				ticked : true
			}];
			$scope.outputSelect = [];
			
			initSchedule = function(){
				$scope.w1s1 = '';$scope.w1s2 = '';$scope.w1s3 = '';
				$scope.w1s4 = '';$scope.w1s5 = '';$scope.w2s1 = '';
				$scope.w2s2 = '';$scope.w2s3 = '';$scope.w2s4 = '';
				$scope.w2s5 = '';$scope.w3s1 = '';$scope.w3s2 = '';
				$scope.w3s3 = '';$scope.w3s4 = '';$scope.w3s5 = '';
				$scope.w4s1 = '';$scope.w4s2 = '';$scope.w4s3 = '';
				$scope.w4s4 = '';$scope.w4s5 = '';$scope.w5s1 = '';
				$scope.w5s2 = '';$scope.w5s3 = '';$scope.w5s4 = '';
				$scope.w5s5 = '';$scope.w6s1 = '';$scope.w6s2 = '';
				$scope.w6s3 = '';$scope.w6s4 = '';$scope.w6s5 = '';
				$scope.w7s1 = '';$scope.w7s2 = '';$scope.w7s3 = '';
				$scope.w7s4 = '';$scope.w7s5 = '';
			}
			init = function(){
				initSchedule();
				$scope.w1s1i = false;$scope.w1s2i = false;$scope.w1s3i = false;
				$scope.w1s4i = false;$scope.w1s5i = false;$scope.w2s1i = false;
				$scope.w2s2i = false;$scope.w2s3i = false;$scope.w2s4i = false;
				$scope.w2s5i = false;$scope.w3s1i = false;$scope.w3s2i = false;
				$scope.w3s3i = false;$scope.w3s4i = false;$scope.w3s5i = false;
				$scope.w4s1i = false;$scope.w4s2i = false;$scope.w4s3i = false;
				$scope.w4s4i = false;$scope.w4s5i = false;$scope.w5s1i = false;
				$scope.w5s2i = false;$scope.w5s3i = false;$scope.w5s4i = false;
				$scope.w5s5i = false;$scope.w6s1i = false;$scope.w6s2i = false;
				$scope.w6s3i = false;$scope.w6s4i = false;$scope.w6s5i = false;
				$scope.w7s1i = false;$scope.w7s2i = false;$scope.w7s3i = false;
				$scope.w7s4i = false;$scope.w7s5i = false;
				
			}
			init();
			
			$scope.loadTableSchedule = function() {
				if(null != $scope.term){
					$http({
						method : 'post',
						url : '/schedule/selectByTerm',
						data : $scope.term
					})
					.success(function(response) {
						$scope.response = response;
						init();
						for(var i=0;i<$scope.response.length;i++){
							if("星期一" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w1s1 = $scope.w1s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w1s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w1s2 = $scope.w1s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w1s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w1s3 = $scope.w1s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w1s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w1s4 = $scope.w1s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w1s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w1s5 = $scope.w1s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w1s5i = true;
								}
							}else if("星期二" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w2s1 = $scope.w2s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w2s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w2s2 = $scope.w2s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w2s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w2s3 = $scope.w2s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w2s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w2s4 = $scope.w2s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w2s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w2s5 = $scope.w2s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w2s5i = true;
								}
							}else if("星期三" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w3s1 = $scope.w3s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w3s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w3s2 = $scope.w3s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w3s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w3s3 = $scope.w3s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w3s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w3s4 = $scope.w3s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w3s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w3s5 = $scope.w3s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w3s5i = true;
								}									
							}else if("星期四" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w4s1 = $scope.w4s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w4s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w4s2 = $scope.w4s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w4s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w4s3 = $scope.w4s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w4s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w4s4 = $scope.w4s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w4s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w4s5 = $scope.w4s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w4s5i = true;
								}									
							}else if("星期五" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w5s1 = $scope.w5s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w5s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w5s2 = $scope.w5s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w5s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w5s3 = $scope.w5s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w5s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w5s4 = $scope.w5s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w5s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w5s5 = $scope.w5s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w5s5i = true;
								}									
							}else if("星期六" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w6s1 = $scope.w6s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w6s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w6s2 = $scope.w6s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w6s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w6s3 = $scope.w6s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w6s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w6s4 = $scope.w6s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w6s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w6s5 = $scope.w6s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w6s5i = true;
								}									
							}else if("星期日" == $scope.response[i].week){
								if("1-2节" == $scope.response[i].section){
									$scope.w7s1 = $scope.w7s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w7s1i = true;
								}else if("3-4节" == $scope.response[i].section){
									$scope.w7s2 = $scope.w7s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w7s2i = true;
								}else if("5-6节" == $scope.response[i].section){
									$scope.w7s3 = $scope.w7s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w7s3i = true;
								}else if("7-8节" == $scope.response[i].section){
									$scope.w7s4 = $scope.w7s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w7s4i = true;
								}else if("9-10节" == $scope.response[i].section){
									$scope.w7s5 = $scope.w7s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
									$scope.w7s5i = true;
								}									
							}
						}
						});
				}
			};
			$scope.loadTableSchedule();
			scopeForSave.loadTableSchedule = $scope.loadTableSchedule;
			$scope.isShow = false;
			$scope.showTable = function(){
				$scope.isShow = !$scope.isShow;
			}
			
			loadTableData = function() {
				$scope.checkboxes = {
					checked : false,
					items : {}
				};
				$http({
					method : 'post',
					url : '/course/selectSelectiveCourse',
					data : $scope.term
				})
				.success(function(data) {
					$scope.data = data;
					$scope.tableParams = new NgTableParams({
						'count' : 8
					}, {
						counts : [],
						filterDelay : 0,
						dataset : data
					});
				});
			};
			loadTableData();
			scopeForSave.loadTableData = loadTableData;

			//checkBox operation
			$scope.checkboxes = {
				checked : false,
				items : {}
			};
			
			// watch for check all checkbox
			$scope.$watch(function() {
				return $scope.checkboxes.checked;
			}, function(value) {
				angular.forEach($scope.data, function(course) {
					$scope.checkboxes.items[course.coid] = value;
				});
			});
			//get checked questions ids in array
			getAllSelectedData=function(){
				var courseIds=[];
				angular.forEach($scope.data, function(course) {
					if($scope.checkboxes.items[course.coid]){
						courseIds.push(parseInt(course.coid));
					}
				});
				return courseIds;
			}
			getAllSelectedScheids=function(){
				var scheIds=[];
				angular.forEach($scope.data, function(course) {
					if($scope.checkboxes.items[course.coid]){
						scheIds.push(parseInt(course.scheid));
					}
				});
				return scheIds;
			}
			$scope.selectCourse = function(course){
				if(!$scope.checkboxes.items[course.coid])
				{	
					for(var m=0;m<3;m++){
						for(var j = 0;j<$scope.response.length;j++){
							if($scope.response[j].coid == course.coid){
								$scope.response.splice(j,1);
							}
						}						
					}
					initSchedule();

					for(var i=0;i<$scope.response.length;i++){
						if("星期一" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w1s1 = $scope.w1s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w1s2 = $scope.w1s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w1s3 = $scope.w1s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w1s4 = $scope.w1s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w1s5 = $scope.w1s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}
						}else if("星期二" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w2s1 = $scope.w2s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w2s2 = $scope.w2s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w2s3 = $scope.w2s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w2s4 = $scope.w2s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w2s5 = $scope.w2s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}
						}else if("星期三" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w3s1 = $scope.w3s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w3s2 = $scope.w3s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w3s3 = $scope.w3s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w3s4 = $scope.w3s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w3s5 = $scope.w3s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}									
						}else if("星期四" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w4s1 = $scope.w4s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w4s2 = $scope.w4s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w4s3 = $scope.w4s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w4s4 = $scope.w4s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w4s5 = $scope.w4s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}									
						}else if("星期五" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w5s1 = $scope.w5s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w5s2 = $scope.w5s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w5s3 = $scope.w5s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w5s4 = $scope.w5s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w5s5 = $scope.w5s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}									
						}else if("星期六" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w6s1 = $scope.w6s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w6s2 = $scope.w6s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w6s3 = $scope.w6s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w6s4 = $scope.w6s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w6s5 = $scope.w6s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}									
						}else if("星期日" == $scope.response[i].week){
							if("1-2节" == $scope.response[i].section){
								$scope.w7s1 = $scope.w7s1+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("3-4节" == $scope.response[i].section){
								$scope.w7s2 = $scope.w7s2+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("5-6节" == $scope.response[i].section){
								$scope.w7s3 = $scope.w7s3+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("7-8节" == $scope.response[i].section){
								$scope.w7s4 = $scope.w7s4+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}else if("9-10节" == $scope.response[i].section){
								$scope.w7s5 = $scope.w7s5+'<br>'+$scope.response[i].cname+$scope.response[i].spositon+'<br>'+$scope.response[i].sdescription+$scope.response[i].freq;
							}									
						}
					}
				}
				else{
					var isDuplicate = false;
					var allCourses = [];
					for(var j=0;j<$scope.data.length;j++)
					{
						if(isDuplicate)
						{
							break;							
						}
						var c = $scope.data[j];
						if(c.coid == course.coid)
						{
							allCourses.push(c);
							for(var i=0;i<$scope.response.length;i++){
								if($scope.response[i].week == c.week)
								{
									if($scope.response[i].section == c.section)
									{
										if($scope.response[i].freq == "每周" || c.freq == "每周" || $scope.response[i].freq == c.freq){
											isDuplicate = true;
											break;								
										}
									}
								}
							}
						}
					}

					if(isDuplicate)
					{
						$scope.checkboxes.items[course.coid] = false;
						toastr.error("Error",window.mss.constants.VALIDATE_MSG.COURSE_DUPLICATE);
					}
					else
					{
						for(var i=0;i<allCourses.length;i++)
						{
						var course = allCourses[i];
						if("星期一" == course.week){
							if("1-2节" == course.section){
								$scope.w1s1 = $scope.w1s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w1s2 = $scope.w1s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w1s3 = $scope.w1s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w1s4 = $scope.w1s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w1s5 = $scope.w1s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}
						}else if("星期二" == course.week){
							if("1-2节" == course.section){
								$scope.w2s1 = $scope.w2s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w2s2 = $scope.w2s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w2s3 = $scope.w2s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w2s4 = $scope.w2s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w2s5 = $scope.w2s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}
						}else if("星期三" == course.week){
							if("1-2节" == course.section){
								$scope.w3s1 = $scope.w3s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w3s2 = $scope.w3s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w3s3 = $scope.w3s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w3s4 = $scope.w3s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w3s5 = $scope.w3s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}									
						}else if("星期四" == course.week){
							if("1-2节" == course.section){
								$scope.w4s1 = $scope.w4s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w4s2 = $scope.w4s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w4s3 = $scope.w4s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w4s4 = $scope.w4s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w4s5 = $scope.w4s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}									
						}else if("星期五" == course.week){
							if("1-2节" == course.section){
								$scope.w5s1 = $scope.w5s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w5s2 = $scope.w5s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w5s3 = $scope.w5s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w5s4 = $scope.w5s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w5s5 = $scope.w5s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}									
						}else if("星期六" == course.week){
							if("1-2节" == course.section){
								$scope.w6s1 = $scope.w6s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w6s2 = $scope.w6s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w6s3 = $scope.w6s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w6s4 = $scope.w6s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w6s5 = $scope.w6s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}									
						}else if("星期日" == course.week){
							if("1-2节" == course.section){
								$scope.w7s1 = $scope.w7s1+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("3-4节" == course.section){
								$scope.w7s2 = $scope.w7s2+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("5-6节" == course.section){
								$scope.w7s3 = $scope.w7s3+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("7-8节" == course.section){
								$scope.w7s4 = $scope.w7s4+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}else if("9-10节" == course.section){
								$scope.w7s5 = $scope.w7s5+'<br>'+course.coname+course.position+'<br>'+course.sdescription+course.freq;
								$scope.response.push(course);
							}
						}
						}
					}
				}
			}
			
		$scope.save = function(){
			var courseIds = getAllSelectedData();
			var scheIds = getAllSelectedScheids();
			$uibModal.open({				
					backdrop: false, 
					templateUrl : 'sureSaveCS.html',
					controller : 'sureSaveCSCtrl',
					scope: scopeForSave,
					resolve : {
						courseIds:function(){ 
							return courseIds;
						},
						scheIds:function(){ 
							return scheIds;
						},
						term:function(){ 
							return $scope.term;
						}
					}
				});
		}
		
		$scope.delete = function (){
			$uibModal.open({
				templateUrl: 'deleteSelectCourse.html',
				controller: 'deleteSelectCourseCtrl',
				size : 'lg',
				scope: scopeForSave
		});
		};
}
);

angular.module('sureSaveCS', []).controller('sureSaveCSCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, courseIds, scheIds, term) {
	$scope.courseIds = courseIds;
	$scope.scheIds = scheIds;
	
	$scope.yes = function() {
		if(courseIds.length > 0 && scheIds.length > 0)
		{
			var maps = [];
			for(var m=0;m<$scope.courseIds.length;m++){
				var mapp = {};
				mapp.pcid = $scope.courseIds[m];
				mapp.pterm = term;
				maps.push(mapp);
			}
			$http({
				method : 'post',
				url : '/scmapping/insert',
				data : maps
			})
			.success(function(response) {
				$http.get("/schedule/minusRemainPeople?scheIds="+scheIds)
				.success(function(data){
					toastr.success("Success",window.mss.constants.UPDATE_MSG.SELECT_SUCCESS);
					$scope.loadTableSchedule();
					$scope.loadTableData();
					$uibModalInstance.close();	
				}).error(function(){
					toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
					$uibModalInstance.close();
				});
			})
			.error(function(response) {
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



angular.module('deleteSelectCourseApp', []).controller('deleteSelectCourseCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, NgTableParams) {
	var scopeForSave = $scope.$new();
	scopeForSave.loadTableSchedule = $scope.loadTableSchedule;
	scopeForSave.loadTableData = $scope.loadTableData;
	
	$scope.filter = [ {
			name : "课程号",
			ticked : false
		}, {
			name : "课程名",
			ticked : true
		}, {
			name : "课程老师",
			ticked : true
		}, {
			name : "课程属性",
			ticked : true
		},{
			name : "课程类型",
			ticked : false
		}, {
			name : "所属学院",
			ticked : false
		}, {
			name : "学分",
			ticked : true
		},{
			name : "学时",
			ticked : true
		},{
			name : "考试类型",
			ticked : false
		},{
			name : "星期",
			ticked : true
		},{
			name : "节数",
			ticked : true
		},{
			name : "周长",
			ticked : true
		},{
			name : "频率",
			ticked : true
		},{
			name : "总人数",
			ticked : true
		},{
			name : "剩余人数",
			ticked : true
		}];
	$scope.outputSelect = [];
	
	$scope.term = {};
	var date = new Date();
	var month = date.getMonth()+1;
	var year = date.getFullYear();
	if(month > 3 && month < 9)
	{
		$scope.term = year + "第一学期";
	}else{
		$scope.term = year = "第二学期";
	}
		
	loadSelectCourse = function() {
		$http({
			method : 'post',
			url : '/course/selectSelectiveCourseFoStudent',
			data : $scope.term
		})
		.success(function(data) {
			$scope.data = data;
			$scope.tableParams = new NgTableParams({
				'count' : 10
			}, {
				counts : [],
				filterDelay : 0,
				dataset : $scope.data
			});
		});
	};
	loadSelectCourse();
		
	$scope.modalcheckboxes = {
		checked : false,
		items : {}
	};
	
	// watch for check all checkbox
	$scope.$watch(function() {
		return $scope.modalcheckboxes.checked;
	}, function(value) {
		angular.forEach($scope.data, function(course) {
			$scope.modalcheckboxes.items[course.mapid] = value;
		});
	});
	//get checked questions ids in array
	getAllMapid=function(){
		var mapIds=[];
		angular.forEach($scope.data, function(course) {
			if($scope.modalcheckboxes.items[course.mapid]){
				mapIds.push(parseInt(course.mapid));
			}
		});
		return mapIds;
	}
	
	getAllScheid=function(){
		var scheIds=[];
		angular.forEach($scope.data, function(course) {
			if($scope.modalcheckboxes.items[course.mapid]){
				scheIds.push(parseInt(course.scheid));
			}
		});
		return scheIds;
	}

	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	}
	
	$scope.delete = function (){
		var mapIds = getAllMapid();
		var scheIds = getAllScheid();
		
		$uibModal.open({
			templateUrl: 'sureDeleteSC.html',
			controller: 'sureDeleteSCCtrl',
			scope: scopeForSave,
			resolve : {
				parentModalInstance: function() {
					return $uibModalInstance;
				},
				mapIds:function(){ 
					return mapIds;
				},
				scheIds:function(){ 
					return scheIds;
				}
			}
		});
	};
});

angular.module('sureDeleteSCApp', []).controller('sureDeleteSCCtrl', function($scope,$uibModal, 
		$uibModalInstance, $http, toastr, parentModalInstance, mapIds, scheIds) {
	var mapIds = mapIds;
	var scheIds = scheIds;
	
	$scope.yes = function() {
		if(mapIds.length > 0 && scheIds.length > 0){
			$http.get("/scmapping/inactive?mapIds="+mapIds)
			.success(function(data){
				$http.get("/schedule/addRemainPeople?scheIds="+scheIds)
				.success(function(data){
					toastr.success("Success",window.mss.constants.UPDATE_MSG.DELETE_SUCCESS);
					$scope.loadTableSchedule();
					$scope.loadTableData();
					$uibModalInstance.close();
					parentModalInstance.close();
				}).error(function(){
					toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
					$uibModalInstance.close();
				});
			}).error(function(){
				toastr.error("Error",window.mss.constants.LOGIN_MSG.SERVER_ERROR);
				$uibModalInstance.close();
				parentModalInstance.close();
			});
		}else{
			toastr.error("Error",window.mss.constants.UPDATE_MSG.SELECT_EMPTY);
		}
	}
	$scope.no = function() {
		$uibModalInstance.dismiss();
	}
	
});