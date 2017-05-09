package com.maritime.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

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

}
