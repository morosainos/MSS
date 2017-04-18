package com.maritime.common.constants;

/**
 * 
 * @className: CommonErrorMsg
 * @description:Error message to show in page
 * @author Victor
 * @date 2017-1-6
 */
public class CommonErrorMsg {
	/**
	 * Error message of database in insert or update fail 
	 * 	because of invalid data
	 */
	public static final String ADD_OR_UPDATE_FAILED = "Add or update failed,please check your input";
	
	/**
	 * Error message of database in insert or update fail 
	 * 	because of mismatch data
	 */
	public static final String MISMATCH_DATA = "Required data doesn't match,please check your input";
	
	/**
	 * Other unkonwn error of database
	 */
	public static final String UNKNOWN_DB_ERROR = "Unknow databse error! please contact administrator";
	
	
	public static final String INTEGER_CAST_ERROR = "Error in cast Integer or Integer array to List";
}
