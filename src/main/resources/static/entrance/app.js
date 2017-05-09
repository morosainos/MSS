var adminApp = angular.module(window.mss.appName, [ 'ui.router', 'oc.lazyLoad',
		'typeahead', 'isteven-multi-select', 'ui.bootstrap', 'ngAnimate',
		'toastr', 'ngTable', 'ngResource', 'multiple', 'programingQuestion', 'shortAnswer', 'singleChoice', 'ngMaterial', 'ngMessages','ngSanitize','ngTagsInput','chart.js','reportChart']);
angular.element(document).ready(function() {
	angular.bootstrap(document, [ window.mss.appName ]);
});
