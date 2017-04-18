/**
 * Copyright 2016 Kingland System Corporation. All Rights Reserved.
 */
package com.maritime.common.constants;

/**
 * @author KSC
 * 
 *         The rule of name the constants should be ERROR TYPE + ERROR, like LOGIN_USER_NAME_ERROR, and the value should be the TR_KEY column value in
 *         translation table.
 */
public class OTPErrorConstants {

	/**
	 * COMMON UNKNOWN ERROR
	 */
	public static final String UNKNOWN_ERROR = "UNKNOWN_ERROR";

	/**
	 * USER NOT FOUND IN APPLICATION
	 */
	public static final String VALIDATION_FAIL_USER_NOT_FOUND_ERROR = "VALIDATION_FAIL_USER_NOT_FOUND_ERROR";

	/**
	 * UDPATE USER FAILED ERROR
	 */
	public static final String UPDATE_FAIL_ERROR = "UPDATE_FAIL_ERROR";

	/**
	 * ADD USER FAILED ERROR
	 */
	public static final String ADD_USER_FALL_ERROR = "ADD_USER_FALL_ERROR";

	/**
	 * USER ROLE NOT FOUND ERROR
	 */
	public static final String USER_ROLE_NOT_FOUND_ERROR = "USER_ROLE_NOT_FOUND_ERROR";

	/**
	 * DELETE USER FAILED ERROR
	 */
	public static final String DEL_USER_FAIL_ERROR = "DEL_USER_FAIL_ERROR";

	/**
	 * USERNAME PASSWORD COMBINATION INCORRECT
	 */
	public static final String LOGIN_FAIL_USERNAME_PASSWORD_COMBINATION_MESSAGE = "LOGIN_FAIL_USERNAME_PASSWORD_COMBINATION_MESSAGE";

	/**
	 * LOGIN USER OVER THE MAXIMUM SESSIONS
	 */
	public static final String LOGIN_FAIL_MAXIMUM_SESSIONS_MESSAGE = "LOGIN_FAIL_MAXIMUM_SESSIONS_MESSAGE";

	/**
	 * USER STATUS VALIDATE FAILURE
	 */
	public static final String VALIDATION_FAIL_USER_STATUS = "VALIDATION_FAIL_USER_STATUS";

	/**
	 * PERMISSION VALIDATE ACCESS DENIED
	 */
	public static final String PERMISSION_VALIDATE_ACCESS_DENIED = "PERMISSION_VALIDATE_ACCESS_DENIED";

	/**
	 * GET ALL KSC USER FAILUER
	 */
	public static final String GET_ALL_KSC_USER_FAIL_ERROR = "GET_ALL_KSC_USER_FAIL_ERROR";

	/**
	 * KSC USER LOGIN FAILED
	 */
	public static final String KSC_USER_LOGIN_FAILED = "KSC_USER_LOGIN_FAILED";

	/**
	 * KSC USER EMAIL FAILED
	 */
	public static final String KSC_USER_EMAIL_FAILED = "KSC_USER_EMAIL_FAILED";

	/**
	 * USER LOGINED BEFORE
	 */
	public static final String USER_LOGINED_BEFORE = "USER_LOGINED_BEFORE";

	/**
	 * GET APPLICANTS INFORMATION FAIL ERR
	 */
	public static final String GET_APPLICANTS_INFORMATION_ERR = "GET_APPLICANTS_INFORMATION_ERR";

	/**
	 * DELETE_QUESTION_ERROR
	 */
	public static final String DELETE_QUESTION_ERR = "DELETE_QUESTION_ERROR";

	/**
	 * GET APPLICANTS INFORMATION FAIL ERR
	 */
	public static final String DELETE_KSCUSER_ERR = "DELETE_KSCUSER_ERR";

	/**
	 * UPDATE USER ROLE FAILED ERROR
	 */
	public static final String UPDATE_USER_ROLE_FAILED = "UPDATE_USER_ROLE_FAILED";

	/**
	 * APPLICANT ROLE ID INVALID
	 */
	public static final String APPLICANT_ROLE_ID_INVALID = "APPLICANT_ROLE_ID_INVALID";

	/**
	 * GET CODETABLE DATA BY CATEGORY FAIL
	 */
	public static final String GET_CODETABLE_DATA_BY_CATEGORY_FAIL = "GET_CODETABLE_DATA_BY_CATEGORY_FAIL";

	/**
	 * GET CODETABLE DATA BY ID FAIL
	 */
	public static final String GET_CODETABLE_DATA_BY_ID_FAIL = "GET_CODETABLE_DATA_BY_ID_FAIL";

	/**
	 * GET QUESTION DATA BY ID FAIL
	 */
	public static final String GET_QUESTION_DATA_BY_ID_FAIL = "GET_QUESTION_DATA_BY_ID_FAIL";

	
	/**
	 * GET QUESTION DATA BY ID FAIL
	 */
	public static final String GET_QUESTION_SET_DEFINITION_BY_ID_FAIL = "GET_QUESTION_SET_DEFINITION_BY_ID_FAIL";
	
	/**
	 * EMAIL FORMAT ERROR
	 */
	public static final String EMAIL_FORMAT_ERROR = "EMAIL_FORMAT_ERROR";

	/**
	 * NAME FORMAT ERROR
	 */
	public static final String NAME_FORMAT_ERROR = "NAME_FORMAT_ERROR";

	/**
	 * INVALID TELEPHONE NUMBER ERROR
	 */
	public static final String INVALID_CELLPHONE = "INVALID_CELLPHONE";

	/**
	 * UNSUPPORTED FILE TYPE ERROR OF IMPORT QUESTION
	 */
	public static final String UNSUPPORTED_FILE_TYPE_ERROR = "UNSUPPORTED_FILE_TYPE_ERROR";

	/**
	 * FILE NOT FOUND ERROR OF IMPORT QUESTION
	 */
	public static final String FILE_NOT_FOUND_ERROR = "FILE_NOT_FOUND_ERROR";

	/**
	 * READ FILE FAILED ERROR OF IMPORT QUESTION
	 */
	public static final String READ_FILE_FAILED_ERROR = "READ_FILE_FAILED_ERROR";

	/**
	 * FILE CONTENT NOT CORRECT OF IMPORT QUESTION
	 */
	public static final String FILE_CONTENT_NOT_CORRECT = "FILE_CONTENT_NOT_CORRECT";

	/**
	 * NONE QUESTION OF IMPORT QUESTION
	 */
	public static final String NONE_QUESTION_ERROR = "NONE_QUESTION_ERROR";

	/**
	 * REQUIRED CAN NOT BE EMPTY
	 */
	public static final String REQUIRED_CAN_NOT_BE_EMPTY = "REQUIRED_CAN_NOT_BE_EMPTY";

	/**
	 * IS_KSC_USER
	 */
	public static final String IS_KSC_USER = "IS_KSC_USER";

	/**
	 * IS_NOT_KSC_USER
	 */
	public static final String IS_NOT_KSC_USER = "IS_NOT_KSC_USER";

	/**
	 * INSERT_QUESTION_ERROR
	 */
	public static final String INSERT_QUESTION_ERROR = "INSERT_QUESTION_ERROR";
	
	/**
	 * INSERT_QUESTION_SET_DEFINITION_ERROR
	 */
	public static final String INSERT_QUESTION_SET_DEFINITION = "INSERT_QUESTION_SET_DEFINITION_ERROR";

	/**
	 * UPDATE_QUESTION_ERROR
	 */
	public static final String UPDATE_QUESTION_ERROR = "UPDATE_QUESTION_ERROR";

	/**
	 * CHANGE_KSCUSERPERMISSION_ERROR
	 */
	public static final String CHANGE_KSCUSERPERMISSION_ERROR = "CHANGE_KSCUSERPERMISSION_ERROR";

	/**
	 * INSERT_ANSWER_LIST_ERROR
	 */
	public static final String INSERT_ANSWER_LIST_ERROR = "INSERT_ANSWER_LIST_ERROR";

	/**
	 * APPLICANT_NULL_ERR
	 */
	public static final String APPLICANT_NULL_ERR = "APPLICANT_NULL_ERR";

	/**
	 * NESTED_USERMODEL_NULL_ERR
	 */
	public static final String NESTED_USERDETAILMODEL_NULL_ERR = "NESTED_USERDETAILMODEL_NULL_ERR";

	/**
	 * APPLICANT_UPDATE_FAILED
	 */
	public static final String APPLICANT_UPDATE_FAILED = "APPLICANT_UPDATE_FAILED";

	/**
	 * APPLICANT_MODIFY_ITEM_ERR
	 */
	public static final String APPLICANT_MODIFY_ITEM_ERR = "APPLICANT_MODIFY_ITEM_ERR";

	/**
	 * INSERT_APPLICANT_ERR
	 */
	public static final String INSERT_APPLICANT_ERR = "INSERT_APPLICANT_ERR";

	/**
	 * INSERT_APPLICANT_INTERCEPT_ERR
	 */
	public static final String INSERT_APPLICANT_INTERCEPT_ERR = "INSERT_APPLICANT_INTERCEPT_ERR";

	/**
	 * APPLICANT_IMPORTFILE_NULL_ERR
	 */
	public static final String APPLICANT_IMPORTFILE_NULL_ERR = "APPLICANT_IMPORTFILE_NULL_ERR";

	/**
	 * APPLICANT_IMPORTFILE_TEMPLATE_CHANGED_ERR
	 */
	public static final String APPLICANT_IMPORTFILE_TEMPLATE_CHANGED = "APPLICANT_IMPORTFILE_TEMPLATE_CHANGED";

	/**
	 * ADD_KSCUSER_ERROR
	 */
	public static final String ADD_KSCUSER_ERROR = "ADD_KSCUSER_ERROR";

	/**
	 * GET QUESTION DATA BY CATEGORY FAIL
	 */
	public static final String GET_QUESTION_DATA_BY_CATEGORY_AND_TYPE_FAIL = "GET_QUESTION_DATA_BY_CATEGORY_FAIL";

	/**
	 * QUESTION_SECTION_IS_NULL
	 */
	public static final String QUESTION_SECTION_IS_NULL = "QUESTION_SECTION_IS_NULL";
	
	/**
     * QUESTION_SECTION_DEFINITION_IS_NULL
     */
    public static final String QUESTION_SECTION_DEFINITION_IS_NULL = "QUESTION_SECTION_DEFINITION_IS_NULL";

	/**
	 * QUESTION_SET_DEFINITION_IS_NULL
	 */
	public static final String QUESTION_SET_DEFINITION_IS_NULL = "QUESTION_SET_DEFINITION_IS_NULL";
	
    /**
     * QUESTION_SET_IS_NULL
     */
    public static final String QUESTION_SET_IS_NULL = "QUESTION_SET_IS_NULL";

	/**
	 * QUESTION_SECTION_ATTIBUTES_IS_INVALID
	 */
	public static final String QUESTION_SECTION_ATTIBUTES_IS_INVALID = "QUESTION_SECTION_ATTIBUTES_IS_INVALID";

	/**
	 * QUESTION_SET_ATTIBUTES_IS_INVALID
	 */
	public static final String QUESTION_SET_ATTIBUTES_IS_INVALID = "QUESTION_SET_ATTIBUTES_IS_INVALID";

	/**
	 * QUESTIONS_IS_NOT_ENOUGH
	 */
	public static final String QUESTIONS_IS_NOT_ENOUGH = "QUESTIONS_IS_NOT_ENOUGH";
	
	/**
     * INSERT_QUESTION_SECTION_ERR
     */
    public static final String INSERT_QUESTION_SECTION_ERR = "INSERT_QUESTION_SECTION_ERR";
    
    /**
     * QUESTION_SECTION_ATTRIBUTE_ERROR 
     */
    public static final String QUESTION_SECTION_ATTRIBUTE_ERROR = "QUESTION_SECTION_ATTRIBUTE_ERROR";
	
	/**
     * INSERT_QUESTION_SET_USER_XREF_ERR  
     */
    public static final String INSERT_QUESTION_SET_USER_XREF_ERR = "INSERT_QUESTION_SET_USER_XREF_ERR";
    
    /**
     * QUESTION_SET_USER_XREF_ATTRIBUTE_ERROR  
     */
    public static final String QUESTION_SET_USER_XREF_ATTRIBUTE_ERROR  = "QUESTION_SET_USER_XREF_ATTRIBUTE_ERROR ";
    
    /**
     * INSERT_QUESTION_SET_QUESTION_DETAIL_ERR 
     */
    public static final String INSERT_QUESTION_SET_QUESTION_DETAIL_ERR = "INSERT_QUESTION_SET_QUESTION_DETAIL_ERR";
    
    /**
     * QUESTION_SET_QUESTIONDETAIL_XREF_ATTRIBUTE_ERROR  
     */
    public static final String QUESTION_SET_QUESTIONDETAIL_XREF_ATTRIBUTE_ERROR = "QUESTION_SET_QUESTIONDETAIL_XREF_ATTRIBUTE_ERROR";
    
    /**
     * INSERT_QUESTION_SET_ERR
     */
    public static final String INSERT_QUESTION_SET_ERR = "INSERT_QUESTION_SET_ERR";
	
	/**
	 * GET_QUESTION_SET_ERR
	 */
	public static final String GET_QUESTION_SET_ERR = "GET_QUESTION_SET_ERR";
	
	/**
     * SAVE_QUESTION_SET_ERR
     */
    public static final String SAVE_QUESTION_SET_ERR = "SAVE_QUESTION_SET_ERR";
	
	/**
	 * SPECIFIC_QUESTIONS_IS_NULL_OR_NOT_ENOUGH
	 */
	public static final String SPECIFIC_QUESTIONS_IS_NULL_OR_NOT_ENOUGH = "QUESTIONSPECIFIC_QUESTIONS_IS_NULL_OR_NOT_ENOUGHS_IS_NOT_ENOUGH";
	
	/**
	 * EXPORT FAILED
	 */
	public static final String EXPORT_FAILED = "EXPORT_FAILED";
	
	/**
	 * EMAIL NOT FOUND
	 */
	public static final String EMAIL_NOT_FOUND = "EMAIL_NOT_FOUND";
	
	/**
	 * SEND EMAIL FAILED
	 */
	public static final String SEND_EMAIL_FAILED = "SEND_EMAIL_FAILED";
	/**
	 * NO DEFINE SET TO USE
	 */
	public static final String DEFINESET_NO_UESABLE = "DEFINESET_NO_UESABLE";
	
	/**
	 * CONVERT_PDF_ERROR
	 */
	public static final String CONVERT_PDF_ERROR = "CONVERT_PDF_ERROR";
	
	/**
     * GET_REVIEW_PROCESS_RECORD_ERR
     */
    public static final String GET_REVIEW_PROCESS_RECORD_ERR = "GET_REVIEW_PROCESS_RECORD_ERR";
    
    /**
     * GET_IQ_SINGLE_CHOICE_SCORE_ERR
     */
    public static final String GET_IQ_SINGLE_CHOICE_SCORE_ERR = "GET_IQ_SINGLE_CHOICE_SCORE_ERR";
    
    /**
     * GET_IQ_MULTIPLE_CHOICE_SCORE_ERR
     */
    public static final String GET_IQ_MULTIPLE_CHOICE_SCORE_ERR = "GET_IQ_MULTIPLE_CHOICE_SCORE_ERR";
    
    /**
     * GET_LOGICAL_SINGLE_CHOICE_SCORE_ERR
     */
    public static final String GET_LOGICAL_SINGLE_CHOICE_SCORE_ERR = "GET_LOGICAL_SINGLE_CHOICE_SCORE_ERR";
    
    /**
     * GET_LOGICAL_MULTIPLE_CHOICE_SCORE_ERR
     */
    public static final String GET_LOGICAL_MULTIPLE_CHOICE_SCORE_ERR = "GET_LOGICAL_MULTIPLE_CHOICE_SCORE_ERR";
    
    /**
     * GET_ENGLISH_SHORTANSWER_SCORE_ERR
     */
    public static final String GET_ENGLISH_SHORTANSWER_SCORE_ERR = "GET_ENGLISH_SHORTANSWER_SCORE_ERR";
    
    /**
     * GET_JAVA_PROGRAMMING_SCORE_ERR
     */
    public static final String GET_JAVA_PROGRAMMING_SCORE_ERR = "GET_JAVA_PROGRAMMING_SCORE_ERR";
    
    /**
     * GET_NET_PROGRAMMING_SCORE_ERR
     */
    public static final String GET_NET_PROGRAMMING_SCORE_ERR = "GET_NET_PROGRAMMING_SCORE_ERR";
    
    /**
     * GET_TECHNOLOGICAL_SINGLE_CHOICE_ERR
     */
    public static final String GET_TECHNOLOGICAL_SINGLE_CHOICE_ERR = "GET_TECHNOLOGICAL_SINGLE_CHOICE_ERR";
    
    /**
     * GET_TECHNOLOGICAL_MULTIPLE_CHOICE_ERR
     */
    public static final String GET_TECHNOLOGICAL_MULTIPLE_CHOICE_ERR = "GET_TECHNOLOGICAL_MULTIPLE_CHOICE_ERR";
    
    /**
     * GET_NAME_AND_TESTDATE_ERR
     */
    public static final String GET_NAME_AND_TESTDATE_ERR = "GET_NAME_AND_TESTDATE_ERR";

    /**
     * GET_USER_SECTIONS_SCORE_ERR
     */
    public static final String GET_USER_SECTIONS_SCORE_ERR = "GET_USER_SECTIONS_SCORE_ERR";
    
    /**
     * GET_INTERVIEW_INTERN_INFO_ERR
     */
    public static final String GET_INTERVIEW_INTERN_INFO_ERR = "GET_INTERVIEW_INTERN_INFO_ERR";
    
    /**
     * GET_INTERVIEW_SENIOR_INFO_ERR
     */
    public static final String GET_INTERVIEW_SENIOR_INFO_ERR = "GET_INTERVIEW_SENIOR_INFO_ERR";
    
    /**
     * INTERVIEW_CATEGORY__ERR
     */
    public static final String INTERVIEW_CATEGORY__ERR = "INTERVIEW_CATEGORY__ERR";
    
    /**
     * GET_LOGIN_USER_ERR
     */
    public static final String GET_LOGIN_USER_ERR = "GET_LOGIN_USER_ERR";
    
    /**
     * TASK_IS_NOT_EXIST
     */
    public static final String TASK_IS_NOT_EXIST = "TASK_IS_NOT_EXIST";
    
    /**
     * GET_APPLICANT_REVIEW_RECORD_ATTRIBUTE_INVALID
     */
    public static final String GET_APPLICANT_REVIEW_RECORD_ATTRIBUTE_INVALID = "GET_APPLICANT_REVIEW_RECORD_ATTRIBUTE_INVALID";
    
    /**
     * REVIEWING_MODULE_IS_NULL
     */
    public static final String REVIEWING_MODULE_IS_NULL = "REVIEWING_MODULE_IS_NULL";
    
    /**
     * ANSWER_USER_ID_IS_NULL
     */
    public static final String ANSWER_USER_ID_IS_NULL = "ANSWER_USER_ID_IS_NULL";
    
    /**
     * USER_SCORE_IS_NULL
     */
    public static final String USER_SCORE_IS_NULL = "USER_SCORE_IS_NULL";
    
}
