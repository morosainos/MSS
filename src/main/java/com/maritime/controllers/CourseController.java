package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Course;
import com.maritime.services.CourseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            Integer role = (Integer) request.getSession().getAttribute("userRole");
            if(1 == role)
            {
                return courseService.selectForAdmin();
            }else{
                return courseService.selectForTeacher(id);
            }
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return courseService.selectForStudent(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/course/selectSelectiveCourse", method = RequestMethod.POST)
    public List<Course> selectSelectiveCourse(@RequestBody String term) throws MSSException {
        return courseService.selectSelectiveCourse(term);
    }

    @ResponseBody
    @RequestMapping(value = "/course/selectSelectiveCourseFoStudent", method = RequestMethod.POST)
    public List<Course> selectSelectiveCourseFoStudent(@RequestBody String term) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        return courseService.selectSelectiveCourseFoStudent(id,term);
    }

    @ResponseBody
    @RequestMapping(value = "/course/selectCourseByTermForTeacher", method = RequestMethod.GET)
    public List<Course> selectCourseByTermForTeacher(@RequestParam String[] term) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("tid", id);
        params.put("term", term);
        if(CommonConstants.USER_TYPE_TEACHER.equals(type)){
            Integer role = (Integer) request.getSession().getAttribute("userRole");
            if(1 == role)
            {
                return courseService.selectCourseByTermForAdmin(term);
            }else{
                return courseService.selectCourseByTermForTeacher(params);
            }
        }
        return null;
    }

}
