/**
 * Author:Marvin Marvin.songao.zhang@kingland.com Date:2016-12-22
 * Description:Module for single Choice template
 */
'use strict';
var singleSelection = angular
		.module("singleChoice", [ 'angular-simditor', 'ngSanitize' ])
		.directive(
				'singleChoice',
				function() {
					return {
						/**
						 * @description:get the parameter to control the
						 *                  interface
						 * @mode:use this parameter to judge what operation is
						 *           be doing. Adding,Reviewing or Testing
						 * @loadQuestion:use this parameter to load question
						 *                   detail
						 * @answerDetailList: use this parameter to load answer
						 *                    detail
						 */
						scope : {
							mode : '=',
							questionDetail : '=',
							answerDetailList : '=',
							userAnswers : '=',
							radioName: '=?'
						},
						restrict : 'AE',
						templateUrl : '/global/template/single-selection-template/singleChoice.template.html',
						link : function($scope) {
							/**
							 * use answerChoiceModel to get the radio button
							 * change or not use answerModel to add normal model
							 * when need add answer item
							 */
							
							$scope.answerDetailList;
							
							$scope.questionDetail;
							
							$scope.userAnswers;
							
							$scope.radioName;
							
							$scope.arrayUserChoice=new Array();
							
							$scope.answerChoiceModel = function(answerId) {
								this.answerId = answerId;
							}
							
							$scope.answerModle = function(answerContent,
									isCorrect) {
								this.answerContent = answerContent;
								this.isCorrect = isCorrect;
							}

							$scope.answerChoice = new $scope.answerChoiceModel();
							
							/**
							 * watch the ng-model of the radio button when it
							 * change set the isCorrect flag
							 */

							$scope
									.$watch(
											'answerChoice.answerId',
											function(value, old) {
												if (!angular.isUndefined(old)&&old!=null) {
													$scope.answerDetailList[old].isCorrect = false;
												}
												if (!angular.isUndefined(value)&&value!=null) {
													$scope.answerDetailList[value].isCorrect = true;
												}
												
											});
							
							/**
							 * watch the answerDetailList beacuse the http
							 * request is asynchronous
							 */

							$scope
									.$watch(
											'answerDetailList',
											function(value, old) {
												/**
												 * judge the kind of operation
												 * and set the flag of it isShow
												 * control the add button and
												 * simditor raidoDisable control
												 * the radio button
												 */
												switch ($scope.mode) {
												case window.otp.constants.TEMPALTE_MODE.USER_EDITING:
													setRadioButton();
													$scope.editable = true;
													$scope.radioDisable = false;
													$scope.radioName = 'choiceRadio';
													break;
												case window.otp.constants.TEMPALTE_MODE.USER_REVIEWING:
													setRadioButton();
													$scope.setUserAnswerIcon();
													$scope.editable = false;
													$scope.radioDisable = true;
													break;
												case window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING:
													$scope.editable = false;
													$scope.radioDisable = false;
													$scope.radioName = 'choiceRadio';
													break;
												}

											});
							/**
							 * according to the answerDetailList to get the
							 * right answer and watch it to refresh right answer 
							 */
							function setRadioButton() {
								for (var i = 0; i < $scope.answerDetailList.length; i++) {
									if ($scope.answerDetailList[i].isCorrect == true) {
										$scope.answerChoice.answerId = i;
									}
								}
							}
							
							/**
							 * set user answer icon according to user's choice
							 */
							$scope.setUserAnswerIcon=function () {
								if ($scope.answerDetailList != null && $scope.answerDetailList.length > 0) {
									for(var i = 0; i < $scope.answerDetailList.length; i++){
										$scope.arrayUserChoice[i] = false;
										if ($scope.userAnswers != null && $scope.userAnswers.length > 0) {
											for(var k = 0; k < $scope.userAnswers.length; k++){
												if($scope.userAnswers[k].answerId == $scope.answerDetailList[i].answerId){
													$scope.arrayUserChoice[i]=true;
													break;
												}
											}
										}
									}
								}
							}; 
							
							/**
							 * when user answer next answer , reset the radio button
							 */
							
							$scope
								.$watch(
									'answerDetailList',
									function(value, old) {	
										if($scope.mode== window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING){
											$scope.answerChoice.answerId = null;
										}		
									});

						

							/**
							 * the function of add answer and drop answer
							 */

							$scope.addAnswer = function() {
								$scope.answerDetailList
										.push(new $scope.answerModle("", false));
							}

							$scope.dropAnswer = function(id) {
								$scope.answerDetailList.splice(id, 1);
							}
						}
					}
				});