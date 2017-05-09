package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.constants.CommonErrorMsg;
import com.maritime.common.exception.MSSException;
import com.maritime.models.BaseModel;
import com.maritime.models.Student;
import com.maritime.models.Teacher;
import com.maritime.services.StudentService;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Created by Moros on 2017/4/17.
 */
@RestController
public class UserController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/admin/login", method = RequestMethod.GET)
    public ModelAndView pointToUserLogin() {

        return new ModelAndView(new RedirectView("/production/login/login.html"));
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public BaseModel login(@RequestBody BaseModel user) throws MSSException{
        Student student = null;
        Teacher teacher = null;
        try {
            student = studentService.selectByAccount(user.getAccount());
            teacher = teacherService.selectByAccount(user.getAccount());
        }catch (Exception e)
        {
            logger.error(e.getMessage());
        }
        if (student != null) {
            if (student.getSpassword().equals(user.getPassword()))
            {
                request.getSession().setAttribute("userType",CommonConstants.USER_TYPE_STUDENT);
                request.getSession().setAttribute("userID",student.getSid());
                return student;
            }
            else {
                user.setMessage(CommonErrorMsg.USER_EXISIT_BUT_WRONG_PASSWORD);
            }
        } else if (teacher != null) {
            if (teacher.getTpassword().equals(user.getPassword()))
            {
                request.getSession().setAttribute("userType", CommonConstants.USER_TYPE_TEACHER);
                request.getSession().setAttribute("userID", teacher.getTid());
                return teacher;
            }
            else {
                user.setMessage(CommonErrorMsg.USER_EXISIT_BUT_WRONG_PASSWORD);
            }
        } else {
            user.setMessage(CommonErrorMsg.USER_NOT_EXIST);
        }
        return user;
    }

}
