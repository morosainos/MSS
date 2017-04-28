(function() {
	var typeahead = angular.module('typeahead', []);
typeahead.directive('typeahead', function($timeout) {
	return {
		restrict: 'AEC',
		scope: {
			items: '=',
			prompt: '@',
			title: '@',
			subtitle: '@',
			model: '=',
			onSelect: '&'
		},
		link: function(scope, elem, attrs) {
			scope.handleSelection = function(selectedItem) {
				scope.model = selectedItem;
				scope.current = 0;
				scope.selected = true;
				$timeout(function() {
					scope.onSelect(); 
				}, 200);
			};
			scope.current = 0;
			scope.selected = true;
			scope.isCurrent = function(index) {
				return scope.current == index;
			};
			scope.setCurrent = function(index) {
				scope.current = index;
			};
		},
		templateUrl: 'home/typeahead-template.html'
	}
});

})();
function typeaheadGetJson($scope,$http) {
	$http({
		method:'GET',
		url:'home/typeahead-test.json'
	}).success(function(data){
		$scope.items = data;
	}).error(function(data){
		console.log("error")
	})
	$scope.name = "";
	$scope.onItemSelected = function() {
		console.log('selected=' + $scope.name);
	}
};
