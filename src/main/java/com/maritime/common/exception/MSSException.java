package com.maritime.common.exception;

public class MSSException extends Exception {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -8035102340096393771L;


	public MSSException(String errorCode) {
		super(errorCode);
		setErrorMessage(errorCode);
		setErrorCode(errorCode);
	}

	/**
	 * Support multiple errors
	 * 
	 * @param e
	 * @param errorCodeArray
	 */
	public MSSException(String[] errorCodeArray) {
		setErrorCodeArray(errorCodeArray);
	}

	/**
	 * Support only one type of error
	 * @param errorCode
	 * @param e
	 */
	public MSSException(String errorCode, Exception e) {
		if (null != e) {
			setErrorMessage(e.getMessage());
		}
		setErrorCode(errorCode);
	}

	/**
	 * Support multiple errors
	 * 
	 * @param e
	 * @param errorCodeArray
	 */
	public MSSException(Exception e, String[] errorCodeArray) {
		if (null != e) {
			setErrorMessage(e.getMessage());
		}
		setErrorCodeArray(errorCodeArray);
	}

	/**
	 * Store an array error codes to client
	 */
	private String[] errorCodeArray;

	/**
	 * Error Message
	 */
	private String errorMessage;

	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage() {
		return errorMessage;
	}

	/**
	 * @param errorMessage
	 *            the errorMessage to set
	 */
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/**
	 * @return
	 */
	public String[] getErrorCodeArray() {
		return errorCodeArray;
	}

	/**
	 * @param errorCode
	 */
	public void setErrorCode(String errorCode) {
		this.setErrorCodeArray(new String[] { errorCode });
	}

	/**
	 * @param errorCodeArray
	 */
	public void setErrorCodeArray(String[] errorCodeArray) {
		this.errorCodeArray = errorCodeArray;
	}

}
