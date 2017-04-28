/**
 *  @Author:Victor Victor.Huimin.He@Kingland.com
 *  @Date:2016-12-20
 *  @Description: Short answer page,using template by directive
 */

var app = angular.module('shortAnswer', ['angular-simditor', 'ngSanitize']);
	app.directive("shortAnswer", function () {
    return {
        restrict: 'E',
        templateUrl: '/global/template/short-answer-template/short-answer-module.html',
        scope: {
        	 mode: '=',
        	//get question information from parent scope
        	 questionDetail : '=',
        	 answerDetailList: '=',
        	 userAnswers : '='
        },
        link: function(scope) {
        	scope.userAnswers;
        	
        	scope.isQuestionEditable = false;
        	scope.isAnswerEditable = false;
			switch(scope.mode) {
				case window.otp.constants.TEMPALTE_MODE.USER_EDITING:{
		        	scope.isQuestionEditable = true;
		        	scope.isAnswerEditable = true;
		        	break;
				}				
				case window.otp.constants.TEMPALTE_MODE.USER_REVIEWING:{
		        	scope.isQuestionEditable = false;
		        	scope.isAnswerEditable = false;
		        	changeReviewFlag();
		        	break;
				}
				case window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING:{
		        	scope.isQuestionEditable = false;
		        	scope.isAnswerEditable = true;
		        	break;
				}
			};
			
			//change flag
			function changeReviewFlag () {
				if (scope.userAnswers != null) {
					scope.isReviewing = true;
				}else {
					scope.isReviewing = false;
				}
			} 
        }
    };
});