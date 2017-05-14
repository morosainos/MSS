var adminApp = angular.module(window.mss.appName, [ 'ui.router', 'oc.lazyLoad',
		'ui.bootstrap', 'ngAnimate','toastr']);
angular.element(document).ready(function() {
	angular.bootstrap(document, [ window.mss.appName ]);
});
