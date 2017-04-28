//-- Modified login.js
//-- Barry  Barry.Haolin.Lu@Kingland.com
//-- 2016-12-12

/**
 * Modified part:
 * 		1. Modify the name of ng-app and ng-controller to validateFormApp and validate FormCtrl respectively.
 * 		2. Define the namespace OTP and add some error message constants into it.
 * 
 * @author Peter peter.xiaoming.shi@kingland.com
 * 
 * Date: 2016-12-14T15:45
 */

/**
 * Author : update by Vulcan Description : add forward page add
 */

var loginApp = angular.module('validateFormApp', [ 'ngAnimate', 'toastr' ]);
loginApp.config(function(toastrConfig) {
	angular.extend(toastrConfig, {
		autoDismiss : false,
		containerId : 'toast-container',
		maxOpened : 0,
		newestOnTop : true,
		positionClass : 'toast-top-center',
		preventDuplicates : false,
		preventOpenDuplicates : false,
		target : 'body'
	});
});

loginApp
		.controller(
				'validateFormCtrl',
				function($scope, $http, $window, toastr) {

					$scope.emailReg = /^[\w\-\.]+@[kK][iI][nN][gG][lL][aA][nN][dD].[cC][oO][mM]$/; 
																	// King land
																	// email
																	// regular
																	// expression

					// The messages displayed in response to email component
					// status
					$scope.EMAIL_EMPTY_MSG = window.otp.constants.EMAIL_ERROR_MSG.EMPTY;
					$scope.EMAIL_INVALID_MSG = window.otp.constants.EMAIL_ERROR_MSG.INVALID;
					$scope.EMAIL_ERROR_MSG = window.otp.constants.EMAIL_ERROR_MSG.ERROR;

					// The messages displayed in response to password component
					// status
					$scope.PASSWORD_EMPTY_MSG = window.otp.constants.PASSWORD_ERROR_MSG.EMPTY;

					$scope.user = {};
					$scope.login = function() {
						$http(
								{
									method : 'post',
									url : '/login',
									data : $scope.user,
									headers : {
										'Content-Type' : 'application/x-www-form-urlencoded'
									},
									transformRequest : function(obj) {
										var str = [];
										for ( var p in obj) {
											str
													.push(encodeURIComponent(p)
															+ "="
															+ encodeURIComponent(obj[p]));
										}
										return str.join("&");
									}
								})
								.success(
										function(response) {
											$window.location.href = "/otpinternal/dashboard.html";
										})
								.error(
										function(response) {
											//alert("Email Address and Password is not correct");
											toastr
													.warning("Error",
															"Email Address and Password is not correct");
										});
					};

				});
