angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.SCORE_REPORT_CONTROLLER,
		function($scope, $uibModal, $http, toastr) {
			console.log("SCORE_REPORT_CONTROLLER");	
			
			$scope.user ={};
			getUser = function(){
				$http({
					method : 'get',
					url : '/user/getSession'
				})
				.success(function(response) {
					$scope.user = response;
					if("teacher" == $scope.user.type)
					{
						if("管理员" == response.role){
							$scope.user.admin = true;
						}
						$scope.user.teacher = true;
					}
				}); 

			}
			getUser();
			
			$scope.terms = [];
			$scope.term1 = '';
			$scope.term2 = '';
			$scope.exams = [];
			$scope.scores = [];
			$scope.course = 0;
			$scope.exam = 0;
			$scope.showChart = true;
			$scope.dataNull = true;
			$scope.isExamDisable = false;
			
			var loadAllTerms = function(){
				$http({
					method : 'get',
					url : '/scmapping/selectAllTerms'
				})
				.success(function(data) {
					$scope.terms = data;
					if(null != data && $scope.terms.length > 0){
						$scope.term1 = $scope.terms[$scope.terms.length - 1].pterm;	
						$scope.term2 = $scope.terms[$scope.terms.length - 1].pterm;	
					}
				});
			}
			loadAllTerms();
					
			$scope.loadCourseData = function(){
				$scope.term = [];
				if($scope.term1 == $scope.term2){
					$scope.term.push($scope.term1);
					$scope.isExamDisable = false;
				}else{
					$scope.isExamDisable = true;
					if(!$scope.showChart){
						$scope.showChart = true
					}
					var term1 = '';
					var term2 = '';
					for(var i = 0;i<$scope.terms.length;i++){
						if($scope.term1 == $scope.terms[i].pterm)
							term1 = i;
						else if($scope.term2 == $scope.terms[i].pterm)
							term2 = i;
					}
					if(term1 > term2){
						for(var i = term2;i<=term1;i++){
							$scope.term.push($scope.terms[i].pterm);
						}
					}else if(term1<term2){
						for(var i = term1;i<=term2;i++){
							$scope.term.push($scope.terms[i].pterm);
						}						
					}
				}
				$http.get("/course/selectCourseByTermForTeacher?term="+$scope.term)
				.success(function(data) {
					$scope.courses = data;
					if(null != data && $scope.courses.length > 0){
						$scope.course = $scope.courses[0].coid;	
						$scope.loadExamData();
					}
				});
			}
			
			$scope.loadExamData = function(){
				if(!$scope.isExamDisable){
					$http.get("/examination/selectExamByCourseForTeacher?term="+$scope.term+"&cid="+$scope.course)
					.success(function(data) {
						$scope.exams = data;
						if(null != data && $scope.exams.length > 0){
							$scope.exam = $scope.exams[0].eid;	
							$scope.loadScoreData();
						}
					});					
				}else{
					$scope.exam = "所有期末考试";
					$scope.loadScoreData();
				}
			}

			$scope.loadScoreData = function(){
				$scope.dataNull = true;
				if(!angular.isUndefined($scope.exam) && null != $scope.exam){
					if("所有期末考试" == $scope.exam){
						$http.get("/score/selectByTermsForGraphics?term="+$scope.term+"&cid="+$scope.course)
						.success(function(data) {
							$scope.scores = data;
							$scope.totalscore = 0;
							$scope.lineLabels = [];
							$scope.pieLabels = [];
							$scope.labelScales = [];
							$scope.lineData = [];
							$scope.pieData = [];
							$scope.totalpeople = 0;
							$scope.series = [];
							if(null != data && data.length > 0){
								$scope.dataNull = false;
								$scope.series.push("及格率");
								$scope.series.push("不及格率");
								$scope.pieLabels.push("大挂率");
								$scope.pieLabels.push("小挂率");
								$scope.pieLabels.push("及格率");
								$scope.pieLabels.push("良好率");
								$scope.pieLabels.push("优秀率");
								var passData = [];
								var npassData = [];
								var greatp = 0;
								var goodp = 0;
								var okp = 0;
								var snpassp = 0;
								var bnpassp = 0;
								for(var i=0;i<$scope.scores.length;i++){
									$scope.lineLabels.push($scope.scores[i].term);
									passData.push(((($scope.scores[i].greatp+$scope.scores[i].goodp+$scope.scores[i].okp)/$scope.scores[i].totalp)*100).toFixed(2));
									npassData.push(((($scope.scores[i].snpassp+$scope.scores[i].bnpassp)/$scope.scores[i].totalp)*100).toFixed(2));
									greatp += $scope.scores[i].greatp/$scope.scores[i].totalp;
									goodp += $scope.scores[i].goodp/$scope.scores[i].totalp;
									okp += $scope.scores[i].okp/$scope.scores[i].totalp;
									snpassp += $scope.scores[i].snpassp/$scope.scores[i].totalp;
									bnpassp += $scope.scores[i].bnpassp/$scope.scores[i].totalp;
								}
								var num = $scope.scores.length;
								$scope.lineData.push(passData);
								$scope.lineData.push(npassData);
								$scope.pieData.push(((bnpassp/num)*100).toFixed(2));
								$scope.pieData.push(((snpassp/num)*100).toFixed(2));
								$scope.pieData.push(((okp/num)*100).toFixed(2));
								$scope.pieData.push(((goodp/num)*100).toFixed(2));
								$scope.pieData.push(((greatp/num)*100).toFixed(2));
							}
						});	
					}else{
						$scope.totalscore = 0;
						$scope.lineLabels = [];
						$scope.pieLabels = [];
						$scope.labelScales = [];
						$scope.lineData = [];
						$scope.pieData = [];
						$scope.totalpeople = 0;
						$scope.series = [];
						$http({
							method : 'post',
							url : '/score/selectByExam',
							data :$scope.exam
						})
						.success(function(data) {
							$scope.scores = data;
							if(null != data && data.length >0){
								for(var i=0;i<$scope.exams.length;i++){
									if($scope.exam == $scope.exams[i].eid){
										$scope.totalscore = $scope.exams[i].eTotalScore;
										break;
									}
								}
								if(null != $scope.totalscore && $scope.totalscore != 0){
									$scope.dataNull = false;
									$scope.totalpeople = $scope.scores.length;
									for(var i = 0;i<=$scope.totalscore;i=i+$scope.totalscore/10){
										$scope.lineLabels.push(i+"分");
										$scope.labelScales.push(i);
									}
									$scope.pieLabels.push("大挂");
									$scope.pieLabels.push("小挂");
									$scope.pieLabels.push("及格");
									$scope.pieLabels.push("良好");
									$scope.pieLabels.push("优秀");
									var scoredata=new Array(0,0,0,0,0,0,0,0,0,0,0);
									var ratiodata=new Array(0,0,0,0,0);
									for(var i=0;i<$scope.scores.length;i++){
										var sc = $scope.scores[i].score;
										if(sc >= $scope.labelScales[10]){
											scoredata[10]+=1; 
										}else if(sc >= $scope.labelScales[9]){
											scoredata[9]+=1; 
										}else if(sc >= $scope.labelScales[8]){
											scoredata[8]+=1; 
										}else if(sc >= $scope.labelScales[7]){
											scoredata[7]+=1; 
										}else if(sc >= $scope.labelScales[6]){
											scoredata[6]+=1; 
										}else if(sc >= $scope.labelScales[5]){
											scoredata[5]+=1; 
										}else if(sc >= $scope.labelScales[4]){
											scoredata[4]+=1; 
										}else if(sc >= $scope.labelScales[3]){
											scoredata[3]+=1; 
										}else if(sc >= $scope.labelScales[2]){
											scoredata[2]+=1; 
										}else if(sc >= $scope.labelScales[1]){
											scoredata[1]+=1; 
										}else if(sc >= $scope.labelScales[0]){
											scoredata[0]+=1; 
										};
										if(sc >= 0.9*$scope.totalscore){
											ratiodata[4] +=1;
										}else if(sc >= 0.7*$scope.totalscore){
											ratiodata[3] +=1;
										}else if(sc >= 0.6*$scope.totalscore){
											ratiodata[2] +=1;
										}else if(sc >= 0.4*$scope.totalscore){
											ratiodata[1] +=1;
										}else{
											ratiodata[0] +=1;
										}
									}
									for(var i = 0;i<scoredata.length;i++){
										$scope.lineData.push(scoredata[i]);
									}
									for(var i = 0;i<ratiodata.length;i++){
										$scope.pieData.push(ratiodata[i]);
									}
								}
							}
						});
					}
				}
			}
			
			$scope.$watch('term1+term2',function(newValue,oldValue){
				if(newValue != oldValue){
					$scope.loadCourseData();
				}
			});	
			
			$scope.clip = function(){
				$scope.showChart = !$scope.showChart;
			}
			
			$scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
			
			$scope.viewClass = function(){
				var modalInstance = $uibModal.open({
					animation : true,
					templateUrl : 'viewClass.html',
					controller : 'viewClassCtrl',
					size : 'lg',
					backdrop : false
				});
			}

}
);


var editInfo = angular.module('viewClassApp',[]);
editInfo.controller('viewClassCtrl',function($scope,$http, $uibModal, $uibModalInstance, toastr){
	//cancel function
	$scope.term = '';
	$scope.academy = 0;
	$scope.major = 0;
	$scope.sclass = 0;
	$scope.showChart = true;
	$scope.dataNull = true;
	
	$scope.cancel = function() {
		$uibModalInstance.close();
	};
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
	});
	}
	loadAllTerms();
	
	var getAllAcademy = function(){
	$http({
			method : 'get',
			url : '/academy/selectAllAcademy'
		})
		.success(function(response) {
			$scope.academies = response;
			$scope.academy = $scope.academies[0].aid;
			$scope.loadMajor();
		});
	}
	getAllAcademy();
	
	$scope.loadMajor = function(){
		$http({
				method : 'post',
				url : '/major/loadMajorByAcademy',
				data : $scope.academy
			})
			.success(function(response) {
				$scope.majors = response;
				$scope.major = $scope.majors[0].mid;
				$scope.loadClass();
			});
	}

	$scope.loadClass = function(){
		$http({
				method : 'post',
				url : '/class/selectByMajor',
				data : $scope.major
			})
			.success(function(response) {
				$scope.classes = response;
				if(null != response && response.length > 0){
					$scope.sclass = $scope.classes[0].cid;
					$scope.loadPoint();
				}
			});
	}
	
	$scope.loadPoint = function(){
		$scope.pieLabels = [];
		$scope.pieData = [];
		$http.get("/pointset/selectForClassGraphic?term="+$scope.term+"&cid="+$scope.sclass)
				.success(function(data) {
					$scope.points = data;
					$scope.pieLabels.push("通过率");
					$scope.pieLabels.push("挂科率");
					var passratio = 0;
					var nopassratio = 0;
					if(null != data && data.length>0){
						$scope.dataNull = false;
						for(var i=0;i<$scope.points.length;i++){
							passratio += (($scope.points[i].allcourse - $scope.points[i].nopass)/$scope.points[i].allcourse)*100;
							nopassratio += ($scope.points[i].nopass/$scope.points[i].allcourse)*100;
						}
						$scope.pieData.push((passratio/$scope.points.length).toFixed(2));
						$scope.pieData.push((nopassratio/$scope.points.length).toFixed(2));
					}
				});
	}
	
	$scope.clip = function(){
		$scope.showChart = !$scope.showChart;
	}
			

});