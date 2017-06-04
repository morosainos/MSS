(function() {
	'use strict'
	var constants = {
		'URL': {
			'LOGIN_URL': '/login/login.html',
			'DEFAULT_PAGE_URL': '/home/infomation-view',
			'HOME_URL': '/home',
			'INFO_VIEW_URL': '/infomation-view',
			'INFO_NEWS_URL': '/infomation-news',
			'COURSE_VIEW_URL': '/course-view',
			'COURSE_SELECT_URL': '/course-select',
			'EXAM_VIEW_URL': '/exam-view',
			'SCORE_VIEW_URL': '/score-view',
			'SCORE_VIEW_TEACHER_URL': '/score-view-teacher',
			'INFO_SCHEDULE_URL':'/infomation-schedule',
			'SCORE_REPORT_URL':'/score-report',
			'MEMBER_STUDENT_URL':'/member-student',
			'MEMBER_TEACHER_URL':'/member-teacher',
			'LOG_OUT_URL': '/logout'
		},
		'STATE': {
			'HOME_STATE': 'home',
			'INFO_VIEW_STATE': 'home.infomation-view',
			'INFO_NEWS_STATE': 'home.infomation-news',
			'COURSE_VIEW_STATE': 'home.course-view',
			'COURSE_SELECT_STATE': 'home.course-select',
			'EXAM_VIEW_STATE': 'home.exam-view',
			'SCORE_VIEW_STATE': 'home.score-view',
			'SCORE_VIEW_TEACHER_STATE': 'home.score-view-teacher',
			'INFO_SCHEDULE_STATE':'home.infomation-schedule',
			'SCORE_REPORT_STATE':'home.score-report',
			'MEMBER_STUDENT_STATE':'home.member-student',
			'MEMBER_TEACHER_STATE':'home.member-teacher'
		},
		'TEMPLATE': {
			'HOME_TEMPLATE': 'home/home.html',
			'INFO_VIEW_TEMPLATE': 'infomation-view/infomation-view.html',
			'INFO_NEWS_TEMPLATE': 'infomation-news/infomation-news.html',
			'COURSE_VIEW_TEMPLATE': 'course-view/course-view.html',
			'COURSE_SELECT_TEMPLATE': 'course-select/course-select.html',
			'EXAM_VIEW_TEMPLATE': 'exam-view/exam-view.html',
			'SCORE_VIEW_TEMPLATE': 'score-view/score-view.html',
			'SCORE_VIEW_TEACHER_TEMPLATE': 'score-view-teacher/score-view-teacher.html',
			'INFO_SCHEDULE_TEMPLATE':'infomation-schedule/infomation-schedule.html',
			'SCORE_REPORT_TEMPLATE':'score-report/score-report.html',
			'MEMBER_STUDENT_TEMPLATE':'member-student/member-student.html',
			'MEMBER_TEACHER_TEMPLATE':'member-teacher/member-teacher.html'
		},
		'CONTROLLER': {
			'HOME_CONTROLLER': 'HomeController',
			'INFO_VIEW_CONTROLLER': 'InfoViewController',
			'INFO_NEWS_CONTROLLER': 'InfoNewsController',
			'COURSE_VIEW_CONTROLLER': 'CourseViewController',
			'COURSE_SELECT_CONTROLLER': 'CourseSelectController',
			'EXAM_VIEW_CONTROLLER': 'ExamViewController',
			'SCORE_VIEW_CONTROLLER': 'ScoreViewController',
			'SCORE_VIEW_TEACHER_CONTROLLER': 'ScoreViewTeacherController',
			'INFO_SCHEDULE_CONTROLLER':'InfoScheduleController',
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
		'VALIDATE_MSG':{
			'EMAIL_INVALID':'邮箱格式不正确',
			'PASSWORD_NOT_EQUAL':'两次输入密码不同',
			'PHONE_INVALID': '电话只能是数字',
			'PASSWORD_EMPTY': '密码不能为空',
			'NAME_EMPTY':'姓名不能为空',
			'NUMBER_EMPTY':'账号不能为空',
			'DATE_EMPTY':'入学时间不能为空',
			'MAJOR_EMPTY':'专业不能为空',
			'ACADEMY_EMPTY':'学院不能为空',
			'CLASS_EMPTY':'班级不能为空',
			'NUMBER_INVALID': '账号只能是数字',
			'DATE_INVALID': '入学时间只能是数字',
			'ACCOUNT_DUPLICATE': '账号已存在！',
			'TERM_EMPTY': '学期不能为空',
			'COURSE_EMPTY': '课程不能为空',
			'CNAME_EMPTY': '名称不能为空',
			'TYPE_EMPTY': '考试类型不能为空',
			'FORM_EMPTY': '考试形式不能为空',
			'POSITION_EMPTY': '考试地点不能为空',
			'HOUR_EMPTY': '考试时间不能为空',
			'COURSE_DUPLICATE': '该时间已有课程！',
			'SCORE_EMPTY': '成绩未编辑完成！'
		},
		'UPDATE_MSG':{
			'UPDATE_SUCCESS':'修改成功！',
			'UPDATE_FAILED':'修改失败！',
			'INSERT_SUCCESS':'插入成功！',
			'INSERT_FAILED':'插入失败！',
			'DELETE_SUCCESS':'删除成功！',
			'SELECT_EMPTY':'请选中要删除的行！',
			'SELECT_SUCCESS':'预选课成功！'
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
