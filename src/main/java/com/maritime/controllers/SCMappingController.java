package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.models.SCMapping;
import com.maritime.services.SCMappingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SCMappingController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(SCMappingController.class);

    @Autowired
    private SCMappingService scMappingService;

    @ResponseBody
    @RequestMapping(value = "/scmapping/selectAllCourse", method = RequestMethod.GET)
    public List<SCMapping> selectAllCourse() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        return scMappingService.selectAllCourse(id);
    }

}
