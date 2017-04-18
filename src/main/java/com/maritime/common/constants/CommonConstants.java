/**
 * Copyright 2016 Kingland System Corporation. All Rights Reserved.
 */
package com.maritime.common.constants;

/**
 * @author KSC
 * 
 *         This class is using for defining all constants.
 *
 */
public class CommonConstants {

	/****************************************************************************
	 * Common Constant Start
	 ***************************************************************************
	 */
	public final static String COMMON_COMMA = ",";

	public final static String COMMON_PERIOD = ".";

	public final static String COMMON_QUESTION = "?";

	public final static String COMMON_AND_MARK = "&";

	public final static String COMMON_EQUAL = "=";

	public final static String COMMON_ENCODING = "UTF-8";

	public final static String COMMON_DASH = "-";

	public final static String COMMON_SPACE = " ";

	public final static String COMMON_UNDERLINE = "_";

	public final static String COMMON_PLUS = "+";

	public final static String COMMON_VERTICAL_BAR = "|";

	public final static String COMMON_SLASH = "/";

	public final static String COMMON_COLON = ":";

	public final static String COMMON_URL_SPACE = "%20";

	public final static String COMMON_URL_SINGLE_QUOTE = "%27";

	public final static String COMMON_TXT_SUFFIX = ".txt";

	public final static String COMMON_PASSWORD_SALT = "KSD-OTP";

	public final static String COMMON_ENCODE_TYPE = "Md5";

	public final static String COMMON_KSC_EMAIL_REGEXP = "^[\\w\\-\\.]+@[kK][iI][nN][gG][lL][aA][nN][dD].[cC][oO][mM]$";

	public final static String COMMON_EXECUTE_SUCCESS = "Success";

	public final static String COMMON_DATE_FORMAT = "yyyy-MM-dd HH:mm";

	public final static String COMMON_DATE_FORMAT_DATE_TIME_WITH_LINE = "yyyy-MM-dd-HH-mm-ss";

	public final static String COMMON_DATE_FORMAT_ONLY_DATE = "yyyy-MM-dd";

	public final static String COMMON_DATE_FORMAT_FOR_UPLOAD_FILE = "yyyy-MM-dd";

	public final static String COMMON_TIME_ZONE_CONFIG = "user.timezone";

	public final static String COMMON_DEFAULT_TIME_ZONE = "UTC";

	public final static String WINDOWS_CHINESE_FONT = "C:/Windows/Fonts/ARIALUNI.TTF";
	
	public final static String LINUX_CHINESE_FONT = "/usr/share/fonts/TTF/ARIALUNI.TTF";
	
	public final static String SYSTEM_VERSION_WINDOWS = "windows";
	
	public final static String SYSTEM_VERSION_LINUX = "linux";

	/****************************************************************************
	 * Common Constant End
	 ***************************************************************************
	 */

	/****************************************************************************
	 * SystemController.java Start
	 ***************************************************************************
	 */
	public final static String TRANSLATIONS = "TRANSLATIONS";

	public final static String CODE_TABLE_VALUE_BY_CATAGORY_ID = "CODE_TABLE_VALUE_BY_CATAGORY_ID";

	public final static String CODE_TABLE_VALUE_BY_CATAGORY = "CODE_TABLE_VALUE_BY_CATAGORY";

	public final static String CODE_TABLE_VALUE_ALL = "CODE_TABLE_VALUE_ALL";

	public final static String CACHE_ALL = "all";

	public final static String CACHE_CODETABLE = "codetable";

	public final static String CACHE_TRANSLATION = "translation";
	/****************************************************************************
	 * SystemController.java End
	 ***************************************************************************
	 */

	/****************************************************************************
	 * SendMailUtils.java Start
	 ***************************************************************************
	 */
	public final static String MAIL_TYPE = "text/html;charset=utf-8";

	public final static String MAIL_PREFIX = "#{";

	public final static String MAIL_SUFFIX = "}";

	public final static String MAIL_PATH_TO_HR = "sendSubmissionEmailToHR.html";
	
	public final static String MAIL_PATH_TO_NEXT_REVIEWER = "sendEmailToNextReviewer.html";
	
	public final static String MAIL_PATH_TO_HR_REVIEW_FINISHED = "sendReviewFinishedEmailToHR.html";
	
	/****************************************************************************
	 * SendMailUtils.java End
	 ***************************************************************************
	 */

	/****************************************************************************
	 * Login Related Start
	 ***************************************************************************
	 */
	public static final String PERMISSION = "PERMISSION";

	public static final String USER_INFO = "USER_INFO";

	public static final String USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

	public static final String USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
	
	public static final String APPLICANT_RECOVER_SUCCEE = "APPLICANT_RECOVER_SUCCEE";

	public static final String KSC_USER_LOGIN_SUCCESS = "KSC_USER_LOGIN_SUCCESS";

	public static final String USER_FIRST_TIME_LOGIN = "USER_FIRST_TIME_LOGIN";

	public static final String LDAP_SEARCH_FILTER_TEMPLATE = "(mail={0})";

	public static final String LDAP_USER_PRINCIPAL_NAME = "userPrincipalName";

	/****************************************************************************
	 * Login Related End
	 ***************************************************************************
	 */

	/****************************************************************************
	 * The id of junit test for mapper
	 ***************************************************************************
	 */
	public static final Integer ID_FOR_JUNITTEST_ONE = 9999;

	public static final Integer ID_FOR_JUNITTEST_TWO = 10000;

	/****************************************************************************
	 * The id is for select users by role
	 ***************************************************************************
	 */

	public static final Integer ADMIN_USER_ROLEID = 1;

	public static final Integer KSC_USER_ROLEID = 2;

	public static final Integer APPLICANT_ROLEID = 3;

	/****************************************************************************
	 * File type
	 ***************************************************************************
	 */

	public static final String EXCEL_FILE_TYPE_XLS = ".xls";

	public static final String EXCEL_FILE_TYPE_XLSX = ".xlsx";

	/***************
	 * Update User Related Start
	 ***************************************************************************
	 */
	public static final String APPLICANT_UPDATE_SUCCESS = "APPLICANT_UPDATE_SUCCESS";
	
	public static final String APPLICANT_UPDATE_FAILED = "APPLICANT_UPDATE_FAILED";
	
	/****************************************************************************
	 * Update User Related End
	 ***************************************************************************
	 */

	/***************
	 * QuestionExtractionUtils.java Start
	 ***************************************************************************
	 */

	public static final String QUESTION_DIFFICULT_LEVEL_EASY = "EASY";

	public static final String QUESTION_DIFFICULT_LEVEL_DIFFICULT = "DIFFICULT";

	public static final String GENERATE_QUESTION_SET_SUCCESS = "generate test paper success";
	
	public static final String GENERATE_QUESTION_SET_FAILED = "generate test paper failed";

	/****************************************************************************
	 * QuestionExtractionUtils.java End
	 ***************************************************************************
	 */

	/***************
	 * Common export table to Excel path Start
	 ***************************************************************************
	 */

	public static final String COMMON_EXPORT_FILE_TO_EXCEL_PATH = "c:\\tmp\\ExportTheApplicantInfoToExcel";

	public static final String COMMON_EXPORT_REPORT_TO_EXCEL_PATH = "OTPResource/exportPage/";
	
	public static final String TEMPLATE_OF_IMPORT_PATH = "OTPResource/files-template/ImportApplicant.xlsx";

	public static final String NULL = "";
	

	/****************************************************************************
	 * Common export table to Excel path End
	 ***************************************************************************
	 */
	
	/***************
	 * export page template path
	 ***************************************************************************
	 */

	public static final String EXPORT_PAGE_TEMPLATE_PATH = "OTPResource/exportPage/";

	/****************************************************************************
	 * interviewer category
	 ***************************************************************************
	 */
	
	public static final String INTERVIEWER_CATEGORY_INTERN = "intern";
	
	public static final String INTERVIEWER_CATEGORY_SENIOR = "senior";
	
	public static final String INTERN_FREEMAKER_TEMPLATE = "internInterview.ftl";
	
	public static final String SENIOR_FREEMAKER_TEMPLATE = "seniorInterview.ftl";
	
	
	public static final String OPERATION_SUCCESSED = "success";
	public static final String OPERATION_FAILED = "fail";
	
	
	/****************************************************************************
	 * user account
	 ***************************************************************************
	 */
	public static final Integer SYSTEM_USER_ID = 1;
	
	/****************************************************************************
	 * user position
	 ***************************************************************************
	 */
	public static final String POSITION_INTERN = "Intern";
	
	
	/****************************************************************************
	 * Interview state 
	 ***************************************************************************
	 */
	public static final String INTERVIEW_HIRE = "STATUS_HIRE";
	
	public static final String INTERVIEW_REJECT = "STATUS_REJECT";
	
	public static final String INTERVIEW_NEXT_ROUND = "STATUS_NEXT_ROUND";
	
	/****************************************************************************
     * question category
     ***************************************************************************
     */
	public static final Integer CATEGORY_OF_SHORT_ANSWER = 802;
    
	public static final Integer CATEGORY_OF_PROGRAMMING = 803;

	
	
	public static final String COMMON_TELEPHONE = "15599999999";
}
