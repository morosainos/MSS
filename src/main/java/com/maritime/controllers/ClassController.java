package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.models.Class;
import com.maritime.services.ClassService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClassController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(ClassController.class);

    @Autowired
    private ClassService classService;

    @ResponseBody
    @RequestMapping(value = "/class/selectByMajor", method = RequestMethod.POST)
    public List<Class> selectByMajor(@RequestBody Integer mid) throws MSSException {
        return classService.selectByMajor(mid);
    }

}
