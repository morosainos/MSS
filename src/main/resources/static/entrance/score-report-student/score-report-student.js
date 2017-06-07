angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.SCORE_REPORT_STUDENT_CONTROLLER,
		function($rootScope, $scope, $http, $window, toastr) {
			console.log("SCORE_REPORT_STUDENT_CONTROLLER");
			
			$scope.terms = [];
			$scope.types = [];
			$scope.term1 = '';
			$scope.term2 = '';
			$scope.type = 0;
			$scope.scores = [];
			$scope.showChart = true;
			$scope.dataNull = true;
			$scope.category = '';
			
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
				$http({
					method : 'post',
					url : '/listdata/selectByListID',
					data : 2
				})
				.success(function(response) {
					$scope.types = response;
					if(null !=response && response.length > 0){
						$scope.type = $scope.types[0].ldid;
						$scope.loadScoreData();
					}
				});
			}
			loadAllTerms();
					
			$scope.loadScoreData = function(){
				$scope.term = [];
				if($scope.term1 == $scope.term2){
					$scope.term.push($scope.term1);
				}else{
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
				for(var i=0;i<$scope.types.length;i++){
					if($scope.type == $scope.types[i].ldid){
						$scope.category = $scope.types[i].ldvalue;
						break;
					}
				}
				$http.get("/score/selectByTermsForStudentGraphics?term="+$scope.term+"&category="+$scope.type)
				.success(function(data) {
					$scope.dataNull = true;
					$scope.scores = data;
					$scope.lineLabels = [];
					$scope.pieLabels = [];
					$scope.lineData = [];
					$scope.pieData = [];
					$scope.series = [];
					if(null != data && data.length > 0){
						$scope.dataNull = false;
						$scope.series.push("优秀率");
						$scope.series.push("通过率");
						$scope.series.push("挂科率");
						$scope.pieLabels.push("平均优秀率");
						$scope.pieLabels.push("平均通过率");
						$scope.pieLabels.push("平均挂科率");
						var greatratio = [];
						var okratio = [];
						var nopassratio = [];
						var great = 0;
						var ok = 0;
						var nopass = 0;
						debugger;
						for(var i=0;i<$scope.scores.length;i++){
							var score = $scope.scores[i];
							$scope.lineLabels.push(score.term);
							greatratio.push(((score.greatp/score.totalp)*100).toFixed(2));
							okratio.push(((score.okp/score.totalp)*100).toFixed(2));
							nopassratio.push(((score.bnpassp/score.totalp)*100).toFixed(2));
							great +=score.greatp/score.totalp;
							ok +=score.okp/score.totalp;
							nopass +=score.bnpassp/score.totalp;
						}
						$scope.lineData.push(greatratio);
						$scope.lineData.push(okratio);
						$scope.lineData.push(nopassratio);
						$scope.pieData.push(((great/$scope.scores.length)*100).toFixed(2));
						$scope.pieData.push(((ok/$scope.scores.length)*100).toFixed(2));
						$scope.pieData.push(((nopass/$scope.scores.length)*100).toFixed(2));
					}
				});
			}
			
			
			$scope.$watch('term1+term2',function(newValue,oldValue){
				if(newValue != oldValue){
					$scope.loadScoreData();
				}
			});	
			
			$scope.clip = function(){
				$scope.showChart = !$scope.showChart;
			}
			
			$scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
			
		
}
);
