package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.models.Academy;
import com.maritime.services.AcademyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AcademyController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(AcademyController.class);

    @Autowired
    private AcademyService academyService;

    @ResponseBody
    @RequestMapping(value = "/academy/selectAllAcademy", method = RequestMethod.GET)
    public List<Academy> selectAllAcademy() throws MSSException {
        return academyService.selectForAll();
    }

}
