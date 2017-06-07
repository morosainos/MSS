'use strict';
// Setup Routing For All Menu Pages

adminApp.run(function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});
adminApp.config(function($stateProvider, $urlRouterProvider, $controllerProvider) {
	adminApp.controllerProvider = $controllerProvider;
	$urlRouterProvider.when("", window.mss.constants.URL.DEFAULT_PAGE_URL);
	$urlRouterProvider.otherwise(window.mss.constants.URL.DEFAULT_PAGE_URL);

	$stateProvider.state(window.mss.constants.STATE.HOME_STATE, {
			url: window.mss.constants.URL.HOME_URL,
			templateUrl: window.mss.constants.TEMPLATE.HOME_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.HOME_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['home/home.js']);
				}]
			}
		})
		.state(window.mss.constants.STATE.INFO_VIEW_STATE, {
			url: window.mss.constants.URL.INFO_VIEW_URL,
			templateUrl: window.mss.constants.TEMPLATE.INFO_VIEW_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.INFO_VIEW_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['infomation-view/infomation-view.js','infomation-view/infomation-view.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.SCORE_REPORT_STUDENT_STATE, {
			url: window.mss.constants.URL.SCORE_REPORT_STUDENT_URL,
			templateUrl: window.mss.constants.TEMPLATE.SCORE_REPORT_STUDENT_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.SCORE_REPORT_STUDENT_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['score-report-student/score-report-student.js','score-report-student/score-report-student.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.COURSE_VIEW_STATE, {
			url: window.mss.constants.URL.COURSE_VIEW_URL,
			templateUrl: window.mss.constants.TEMPLATE.COURSE_VIEW_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.COURSE_VIEW_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['course-view/course-view.js','course-view/course-view.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.COURSE_SELECT_STATE, {
			url: window.mss.constants.URL.COURSE_SELECT_URL,
			templateUrl: window.mss.constants.TEMPLATE.COURSE_SELECT_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.COURSE_SELECT_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['course-select/course-select.js','course-select/course-select.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.EXAM_VIEW_STATE, {
			url: window.mss.constants.URL.EXAM_VIEW_URL,
			templateUrl: window.mss.constants.TEMPLATE.EXAM_VIEW_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.EXAM_VIEW_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['exam-view/exam-view.js','exam-view/exam-view.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.SCORE_VIEW_STATE, {
			url: window.mss.constants.URL.SCORE_VIEW_URL,
			templateUrl: window.mss.constants.TEMPLATE.SCORE_VIEW_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.SCORE_VIEW_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['score-view/score-view.js','score-view/score-view.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.SCORE_VIEW_TEACHER_STATE, {
			url: window.mss.constants.URL.SCORE_VIEW_TEACHER_URL,
			templateUrl: window.mss.constants.TEMPLATE.SCORE_VIEW_TEACHER_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.SCORE_VIEW_TEACHER_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['score-view-teacher/score-view-teacher.js','score-view-teacher/score-view-teacher.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.INFO_SCHEDULE_STATE, {
			url: window.mss.constants.URL.INFO_SCHEDULE_URL,
			templateUrl: window.mss.constants.TEMPLATE.INFO_SCHEDULE_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.INFO_SCHEDULE_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['infomation-schedule/infomation-schedule.js','infomation-schedule/infomation-schedule.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.SCORE_REPORT_STATE, {
			url: window.mss.constants.URL.SCORE_REPORT_URL,
			templateUrl: window.mss.constants.TEMPLATE.SCORE_REPORT_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.SCORE_REPORT_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['score-report/score-report.js','score-report/score-report.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.MEMBER_STUDENT_STATE, {
			url: window.mss.constants.URL.MEMBER_STUDENT_URL,
			templateUrl: window.mss.constants.TEMPLATE.MEMBER_STUDENT_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.MEMBER_STUDENT_CONTROLLER,
			params:{reportHistoryId:null},
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['member-student/member-student.js','member-student/member-student.css']);
				}]
			}
		})
		.state(window.mss.constants.STATE.MEMBER_TEACHER_STATE, {
			url: window.mss.constants.URL.MEMBER_TEACHER_URL,
			templateUrl: window.mss.constants.TEMPLATE.MEMBER_TEACHER_TEMPLATE,
			controller: window.mss.constants.CONTROLLER.MEMBER_TEACHER_CONTROLLER,
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load(['member-teacher/member-teacher.js','member-teacher/member-teacher.css']);
				}]
			}
		})

});