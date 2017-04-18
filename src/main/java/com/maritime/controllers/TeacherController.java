package com.maritime.controllers;

import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Moros on 2017/4/17.
 */
@RestController
public class TeacherController {
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    @Autowired
    private TeacherService teacherService;


    @RequestMapping(value="/testForMybatis")
    public String selectByPrimaryKey()
    {
        return teacherService.selectByPrimaryKey(2).getTname();
    }

    @RequestMapping(value="/test")
    public String test()
    {
        return "test ok";
    }

}
