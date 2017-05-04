package com.maritime.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BaseController {
	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(BaseController.class);
	
	/**
	 * HttpServlet
	 */
	@Autowired
    HttpServletRequest request;
	
	@Autowired
    HttpServletResponse response;

	/**
	 * handle exceptions
	 * 
	 * @param req
	 * @param ex
	 * @return view
	 */
//	@ExceptionHandler(Exception.class)
//	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//	@ResponseBody
//	public Map<String, Object> handleExceptions(HttpServletRequest req, Exception ex) {
//		Map<String, Object> view = new HashMap<String, Object>();
//		String errorMsg;
//		if (ex instanceof OTPException) {
//			errorMsg = ((OTPException) ex).getErrorMessage();
//		} else {
//			errorMsg = ex.getMessage();
//		}
//
//		logger.error(errorMsg, ex);
//
//		view.put("errorMessage", errorMsg != null ? errorMsg : OTPErrorConstants.UNKNOWN_ERROR);
//		return view;
//	}
//
//	/**
//	 *
//	 * @className: BaseController
//	 * @description:Database exception handler
//	 * @author Victor
//	 * @date 2017-1-6
//	 */
//	@ExceptionHandler(DataAccessException.class)
//	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//	@ResponseBody
//	public Map<String, Object> handleDBException(HttpServletRequest req, DataAccessException ex) {
//
//		Map<String, Object> view = new HashMap<String, Object>();
//		String errorMsg;
//
//		if (ex instanceof DataIntegrityViolationException) {
//			errorMsg = CommonErrorMsg.ADD_OR_UPDATE_FAILED;
//		} else if (ex instanceof TypeMismatchDataAccessException) {
//			errorMsg = CommonErrorMsg.MISMATCH_DATA;
//		} else {
//			errorMsg = CommonErrorMsg.UNKNOWN_DB_ERROR;
//		}
//
//		logger.error(errorMsg, ex);
//
//		view.put("errorMessage", errorMsg != null ? errorMsg : OTPErrorConstants.UNKNOWN_ERROR);
//		return view;
//	}
}
