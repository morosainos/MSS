/**
 * @description 
 * 	Create a component named programingQuestion in programingQuestion module.
 * 	The component includes a question editor reference to Simditor and a code editor reference to CodeMirror:
 * 		-- The question editor has editable attribute.
 * 		-- The code editor can hold java and C# code and has editable attribute.
 * 
 * @author Peter peter.xiaoming.shi@kingland.com
 * 
 * @date 12/22/2016T15:40
 */

'use strict';
angular.module('programingQuestion', [
	'angular-simditor',
	'ngSanitize'
]);
// Declare code mirror directive
angular.module('programingQuestion')
	.constant('codeMirrorConfig',{
		lineNumbers: true,
		matchBrackets: true,
		autofocus: true
	})
	.directive('codeEditor', ['codeMirrorConfig', '$timeout', function(codeMirrorConfig, $timeout){
		return {
			scope : {
				content : '=',
				editable : '=',
				mime : '='		// java: "text/x-java"; C#: "text/x-csharp" (Must be variable!!!!!)
			},
			template : '<textarea></textarea>',
			link : function(scope, ele){
				// init code mirror editor
				var codeCM = CodeMirror.fromTextArea(ele.find('textarea')[0],
					angular.extend({
						value: scope.content,				
						mode: scope.mime,				
						readOnly: !scope.editable
					}, codeMirrorConfig)
				);
				
				var nowContent = '';
				
				// Add a listener to scope.content for dynamicly change code value with scope.content
				scope.$watch('content', function(value){			
					if(!angular.isUndefined(value) && value != nowContent){					
						codeCM.setValue(value);
					}
					
				});
				// Add a listener to scope.editable for dynamicly change code editor editable with scope.editable
				scope.$watch('editable', function(value){
					if(!angular.isUndefined(value))
						codeCM.setOption('readOnly', !value);
				});		
				// Add a listener to scope.mime for dynamicly change code editor mime with scope.mime
				scope.$watch('mime', function(value){
					if(!angular.isUndefined(value))
						codeCM.setOption('mode', value);
				});		
				// Keep code editor's value is same with scope.content
				codeCM.on('change', function(){
					if(scope.content != codeCM.getValue())
					{
						$timeout(function(){
							scope.content = nowContent = codeCM.getValue();
						});
					}
				});			
			}
		}
	}]);
// Declare programingQuestion directive
angular.module('programingQuestion').directive('programingQuestion',function(){
	return {
		scope : {
			questionDetail	: 	'=',
			answerDetailList: 	'=',
			mode		:	'=',
			codeMime	: 	'='	,// java: "text/x-java"; C#: "text/x-csharp"				
			userAnswers : '='
		},
		templateUrl :  '/global/template/programing-question/programing-question.template.html',
		link : function(scope,ele,attrs){
			
			scope.userAnswers;
			// init 
			scope.questionEditable	= 	false;
			scope.codeEditable		=	false;
			// check if the code-mime is a string or a variable and set a correct value to scope.codeMime
			if(typeof scope.codeMime == 'number')
				scope.mime = attrs.codeMime;
			else
			{
				scope.$watch('codeMime', function(value,old){
					scope.mime = scope.codeMime;
				});				
			}

			// set editable status depend on mode
			if(angular.equals(scope.mode, window.otp.constants.TEMPALTE_MODE.USER_EDITING))
			{
				scope.questionEditable	= 	true;
				scope.codeEditable		=	true;				
			}
			else if(angular.equals(scope.mode, window.otp.constants.TEMPALTE_MODE.USER_REVIEWING))
			{
				scope.questionEditable	= 	false;
				scope.codeEditable		=	false;
				changeReviewFlag();
			}
			else if(angular.equals(scope.mode, window.otp.constants.TEMPALTE_MODE.APPLICANTS_TESTING))
			{
				scope.questionEditable	= 	false;
				scope.codeEditable		=	true;
			}
			
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