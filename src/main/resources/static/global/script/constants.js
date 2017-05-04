(function() {
	'use strict'
	var constants = {
		'URL': {
			'APPLICATION': '/optinternal/index.html#/',
			'HOME_PAGE': '/optinternal/dashboard.html',
			'LOGIN_URL': '/optexternal/login.html',
			'RESET_PASSWORD': '',
			'DEFAULT_PAGE_URL': 'userhome/review-process',
			'HOME_URL': '/userhome',
			'REVIEW_PROCESS_URL': '/review-process',
			'INTERVIEW_PROCESS_URL': '/interview-process',
			'APPLICANTS_MANAGEMENT_URL': '/applicants-management',
			'KSC_USER_MANAGEMENT_URL': '/ksc-user-management',
			'QUESTION_MAINTENANCE_URL': '/question-maintenance',
			'IMPORT_URL': '/import',
			'EXPORT_URL': '/export',
			'CONFIGURATION_URL': '/configuration',
			'CUSTOMIZED_REPORTS_URL':'/customized-reports',
			'Recruitment_URL':'/recruitment',
			'Campus_Hiring_Status_URL':'/campus-hiring-status',
			'Customize_URL':'/customize',
			'LOG_OUT_URL': '/logout',
			'APPLICANT_LOGIN_URL':'/mssexternal/login/applicantsLogin/applicant_login.html',
			'RECOVER_URL':'/applicant/recover',
			'ANSWER_PAGE_URL':'/mssexternal/login/testing/testing.html',
			'START_TESTING_URI' : '/testing/start',
			'DO_NEXT_QUESTION_URI' : '/testing/doNextQuestion',
			'RECOVER_URI' : '/testing/recover',
			'SUBMISSION_PAGE_URL' : '/mssexternal/submission/submission.html'
		},
		'STATE': {
			'HOME_STATE': 'userhome',
			'REVIEW_PROCESS_STATE': 'userhome.review-process',
			'INTERVIEW_PROCESS_STATE': 'userhome.interview-process',
			'APPLICANTS_MANAGEMENT_STATE': 'userhome.applicants-management',
			'KSC_USER_MANAGEMENT_STATE': 'userhome.ksc-user-management',
			'QUESTION_MAINTENANCE_STATE': 'userhome.question-maintenance',
			'IMPORT_STATE': 'userhome.import',
			'EXPORT_STATE': 'userhome.export',
			'CONFIGURATION_STATE': 'userhome.configuration',			
			'SUCCESS':'Success',
			'IS_NOT_KSC_USER':'IS_NOT_KSC_USER',
			'IS_KSC_USER':'IS_KSC_USER',

			'Campus_Hiring_Status_STATE':'userhome.campus-hiring-status',
			'Recruitment_STATE':'userhome.recruitment',			
			'Customize_STATE':'userhome.customize',
			'CUSTOMIZED_REPORTS_STATE':'userhome.customize-reports',
		},
		'TEMPLATE': {
			'HOME_TEMPLATE': 'home/userhome.html',
			'REVIEW_PROCESS_TEMPLATE': 'review-process/review-process.html',
			'INTERVIEW_PROCESS_TEMPLATE': 'interview-process/interview-process.html',
			'APPLICANTS_MANAGEMENT_TEMPLATE': 'applicants-management/applicants-management.html',
			'KSC_USER_MANAGEMENT_TEMPLATE': 'ksc-user-management/ksc-user-management.html',
			'QUESTION_MAINTENANCE_TEMPLATE': 'question-maintenance/question-maintenance.html',
			'IMPORT_TEMPLATE': 'import/import.html',
			'EXPORT_TEMPLATE': 'export/export.html',
			'CONFIGURATION_TEMPLATE': 'configuration/configuration.html',
			
			'Campus_Hiring_Status_TEMPLATE':'campus-hiring-status/campus-hiring-status.html',
			'Recruitment_TEMPLATE':'recruitment/recruitment.html',
			'Customize_TEMPLATE':'customize/customize.html',
			'CUSTOMIZED_REPORTS_TEMPLATE':'customized-reports/customized-reports.html',
		},
		'CONTROLLER': {
			'HOME_CONTROLLER': 'HomeController',
			'REVIEW_PROCESS_CONTROLLER': 'ReviewProcessController',
			'INTERVIEW_PROCESS_CONTROLLER': 'InterviewProcessController',
			'APPLICANTS_MANAGEMENT_CONTROLLER': 'ApplicantsManagementController',
			'KSC_USER_MANAGEMENT_CONTROLLER': 'KscUserManagementController',
			'QUESTION_MAINTENANCE_CONTROLLER': 'QuestionMaintenanceController',
			'IMPORT_CONTROLLER': 'ImportController',
			'EXPORT_CONTROLLER': 'ExportController',
			'CONFIGURATION_CONTROLLER': 'ConfigurationController',
			
			'Campus_Hiring_Status_CONTROLLER':'CampusHiringStatusController',
			'Recruitment_CONTROLLER':'RecruitmentController',			
			'Customize_CONTROLLER':'CustomizeController',
			'CUSTOMIZED_REPORTS_CONTROLLER':'CustomizedReportsController',
		},
		'LOGIN_MSG': {
			'NUM_EMPTY': '账号不能为空',
			'PASSWORD_EMPTY': '密码不能为空',
			'NUM_ERROR': '账号不存在',
			'NUM_INVALID': '账号只能是数字',
			'PASSWORD_ERROR': '密码错误',
			'SERVER_ERROR': '服务器连接失败，请联系管理员',
			'LOGIN_SUCCESS':'欢迎登录!'
		},
		'TEMPALTE_MODE' : {
			'USER_EDITING' : 0,
			'USER_REVIEWING' : 1,
			'APPLICANTS_TESTING' : 2
		},
		'QUESTION_CONSTANTS' : {
			'MIN_QUESTION_NUM' : 4,
			'JAVA_MIMIE' : 'text/x-java',
			'NET_MIME' : 'text/x-csharp',
			'TYPE_JAVA' : 'Java',
			'TYPE_DOTNET' : '.Net'
		},
		'EDIT_APPLICANT_DECISION':{
			'EDIT_APPLICANT__DECISION_SUCCESS':'Update applicant decision success'
		},
		'TIMEOUT_STATUS' : {	
			'PARAMETER' : 'isTimeout',
			'TIMEOUT' : '1',
			'NORMAL' : '2'
		},
		'QUESTION_CATEGORY' :{
			'SINGLE_CHOICE' : 800,
			'MULTIPLE_CHOICES' : 801,
			'SHORT_ANSWER' : 802,
			'PROGRAMMING' : 803
		},
		'UNKNOWN_ERROR' : 'Unknown Error'
		
	};

	//registry namespace for mss
	window.mss = window.mss || {};
	window.mss.constants = constants;
	window.mss.appName = 'mssApp';

}).call(this);
