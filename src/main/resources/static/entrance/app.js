var adminApp = angular.module(window.mss.appName, ['ui.router', 'oc.lazyLoad',
		'isteven-multi-select', 'ui.bootstrap', 'ngAnimate',
		'toastr', 'ngTable', 'ngResource', 'ngMaterial', 'ngMessages','ngSanitize',
		'ngTagsInput','chart.js','720kb.tooltips']);
angular.element(document).ready(function() {
	angular.bootstrap(document, [ window.mss.appName ]);
});
