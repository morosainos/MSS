(function() {
	'use strict'
	var constants = {
		'URL': {
			'LOGIN_URL': '/login/login.html',
			'DEFAULT_PAGE_URL': '/home/infomation-view',
			'HOME_URL': '/home',
			'INFO_VIEW_URL': '/infomation-view',
			'INFO_EDIT_URL': '/infomation-edit',
			'COURSE_VIEW_URL': '/course-view',
			'COURSE_SELECT_URL': '/course-select',
			'COURSE_EDIT_URL': '/course-edit',
			'EXAM_VIEW_URL': '/exam-view',
			'EXAM_EDIT_URL': '/exam-edit',
			'SCORE_VIEW_URL': '/score-view',
			'SCORE_EDIT_URL':'/score-edit',
			'SCORE_REPORT_URL':'/score-report',
			'MEMBER_STUDENT_URL':'/member-student',
			'MEMBER_TEACHER_URL':'/member-teacher',
			'LOG_OUT_URL': '/logout'
		},
		'STATE': {
			'HOME_STATE': 'home',
			'INFO_VIEW_STATE': 'home.infomation-view',
			'INFO_EDIT_STATE': 'home.infomation-edit',
			'COURSE_VIEW_STATE': 'home.course-view',
			'COURSE_SELECT_STATE': 'home.course-select',
			'COURSE_EDIT_STATE': 'home.course-edit',
			'EXAM_VIEW_STATE': 'home.exam-view',
			'EXAM_EDIT_STATE': 'home.exam-edit',
			'SCORE_VIEW_STATE': 'home.score-view',
			'SCORE_EDIT_STATE':'home.score-edit',
			'SCORE_REPORT_STATE':'home.score-report',
			'MEMBER_STUDENT_STATE':'home.member-student',
			'MEMBER_TEACHER_STATE':'home.member-teacher'
		},
		'TEMPLATE': {
			'HOME_TEMPLATE': 'home/home.html',
			'INFO_VIEW_TEMPLATE': 'infomation-view/infomation-view.html',
			'INFO_EDIT_TEMPLATE': 'infomation-edit/infomation-edit.html',
			'COURSE_VIEW_TEMPLATE': 'course-view/course-view.html',
			'COURSE_SELECT_TEMPLATE': 'course-select/course-select.html',
			'COURSE_EDIT_TEMPLATE': 'course-edit/course-edit.html',
			'EXAM_VIEW_TEMPLATE': 'exam-view/exam-view.html',
			'EXAM_EDIT_TEMPLATE': 'exam-edit/exam-edit.html',
			'SCORE_VIEW_TEMPLATE': 'score-view/score-view.html',
			'SCORE_EDIT_TEMPLATE':'score-edit/score-edit.html',
			'SCORE_REPORT_TEMPLATE':'score-report/score-report.html',
			'MEMBER_STUDENT_TEMPLATE':'member-student/member-student.html',
			'MEMBER_TEACHER_TEMPLATE':'member-teacher/member-teacher.html'
		},
		'CONTROLLER': {
			'HOME_CONTROLLER': 'HomeController',
			'INFO_VIEW_CONTROLLER': 'InfoViewController',
			'INFO_EDIT_CONTROLLER': 'InfoEditController',
			'COURSE_VIEW_CONTROLLER': 'CourseViewController',
			'COURSE_SELECT_CONTROLLER': 'CourseSelectController',
			'COURSE_EDIT_CONTROLLER': 'CourseEditController',
			'EXAM_VIEW_CONTROLLER': 'ExamViewController',
			'EXAM_EDIT_CONTROLLER': 'ExamEditController',
			'SCORE_VIEW_CONTROLLER': 'ScoreViewController',
			'SCORE_EDIT_CONTROLLER':'ScoreEditController',
			'SCORE_REPORT_CONTROLLER':'ScoreReportController',
			'MEMBER_STUDENT_CONTROLLER':'MemberStudentController',
			'MEMBER_TEACHER_CONTROLLER':'MemberTeacherController'
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
