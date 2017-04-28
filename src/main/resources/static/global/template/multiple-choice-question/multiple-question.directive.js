/**
 * @author:Celery celery.mingyu.qin@kingland.com 
 * @date:2016-12-21
 * @description:Directive for multiple choice template.
 */
"use strict";
(function() {
	var multipleTemplate = angular.module('multiple', ['angular-simditor', 'ngSanitize']);
	multipleTemplate.directive('multipleChoice', function() {
		return {
			restrict: 'AE',
			templateUrl: "/global/template/multiple-choice-question/multiple-question.template.html",
			/**
			 * @description:Customize attributes
			 * @mode:Used to decide which mode it is:window.otp.constants.TEMPALTE_MODE.USER_EDITING,
			 * 		window.otp.constants.TEMPALTE_MODE.USER_REVIEWING,window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING.
			 * @loadQuestion:Receive QuestionDetail's questionContent to load question.
			 * @loadChoice:Receive list of AnswerDetail to load choice.
			 */
			scope: {
				mode: '=',
				questionDetail: '=',
				answerDetailList: '=',
				userAnswers : '='
			},
			link: function(scope) {
				
				scope.arrayUserChoice = new Array ();
				
				scope.answerDetailList;
				
				scope.questionDetail;
				
				scope.userAnswers;
				
				/**
				 * @description:Set isEditable refering to mode.
				 */
				switch(scope.mode) {
					case window.otp.constants.TEMPALTE_MODE.USER_EDITING:
						scope.isEditable = true;
						break;
					case window.otp.constants.TEMPALTE_MODE.USER_REVIEWING:
						setAnswerIcon();
						break;
					case window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING:
						scope.isEditable = false;
						break;
				};
				
				/**
				 * set user answer icon
				 */
				function setAnswerIcon () {
					if (scope.answerDetailList != null && scope.answerDetailList.length > 0) {
						for(var i = 0; i < scope.answerDetailList.length; i++){
							scope.arrayUserChoice[i] = false;
							if (scope.userAnswers != null && scope.userAnswers.length > 0) {
								for(var k = 0; k < scope.userAnswers.length; k++){
									if(scope.userAnswers[k].answerId == scope.answerDetailList[i].answerId){
										scope.arrayUserChoice[i]=true;
										break;
									}
								}
							}
						}
					}
				} ;
				/**
				 * @author:Daisy Daisy.Xue.Wang@Kingland.com
				 * @date:2016-12-26
				 * @description:Add choice.
				 */
				scope.add = function() {
					scope.answerDetailList.push({
						answerContent: "",
						isCorrect: false
					});
				};
				/**
				 * @description:Delete choice,only when choice's number is over four.
				 */
				scope.minus = function(num) {
					scope.answerDetailList.splice(num, 1);
				};
			}
		}
	});
})();