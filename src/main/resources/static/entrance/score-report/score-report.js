angular.module(window.mss.appName).controller(
		window.mss.constants.CONTROLLER.SCORE_REPORT_CONTROLLER,
		function($scope, $uibModal, $http, toastr) {
			console.log("SCORE_REPORT_CONTROLLER");	
			
//$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//$scope.series = ['Series A', 'Series B'];
//$scope.data = [
//  [65, 59, 80, 81, 56, 55, 40],
//  [28, 48, 40, 19, 86, 27, 90]
//];
//$scope.onClick = function (points, evt) {
//  console.log(points, evt);
//};
//$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
//$scope.options = {
//  scales: {
//    yAxes: [
//      {
//        id: 'y-axis-1',
//        type: 'linear',
//        display: true,
//        position: 'left'
//      },
//      {
//        id: 'y-axis-2',
//        type: 'linear',
//        display: true,
//        position: 'right'
//      }
//    ]
//  }
//};
//		
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data1 = [{x:300}, {x:500}, {x:100}, {x:40}, {x:120}];
    $scope.type = 'polarArea';
    $scope.data = [];
	for(var i=0;i<$scope.data1.length;i++){
		$scope.data.push($scope.data1[i].x);
	}

    $scope.toggle = function () {
      $scope.type = $scope.type === 'polarArea' ?
        'line' : 'polarArea';
    };



}
);