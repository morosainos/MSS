package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Course;
import com.maritime.services.CourseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(CourseController.class);

    @Autowired
    private CourseService courseService;

    @ResponseBody
    @RequestMapping(value = "/course/selectCourseForUser", method = RequestMethod.GET)
    public List<Course> selectCourseForUser() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            return courseService.selectForTeacher(id);
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return courseService.selectForStudent(id);
        }
        return null;
    }

}
