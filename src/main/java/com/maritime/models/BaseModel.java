package com.maritime.models;

/**
 * @author
 *
 */
public class BaseModel {

	private String state;
	
	public BaseModel() {

	}
	
	public BaseModel(String state) {
		super();
		this.state = state;
	}


	/**
	 * @return the state
	 */
	public String getState() {
		return state;
	}

	/**
	 * @param state
	 *            the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}

}
