package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.constants.CommonErrorMsg;
import com.maritime.common.exception.MSSException;
import com.maritime.common.util.CommonUtil;
import com.maritime.common.util.ModelUtil;
import com.maritime.models.*;
import com.maritime.services.StudentService;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.ServletException;

/**
 * Created by Moros on 2017/4/17.
 */
@RestController
public class UserController extends BaseController {
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView pointToUserLogin() {

        return new ModelAndView(new RedirectView("/entrance/home/login.html"));
    }

    @ResponseBody
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public UserModel login(@RequestBody UserModel user) throws MSSException {
        Student student = null;
        Teacher teacher = null;
        try {
            student = studentService.selectByAccount(user.getAccount());
            teacher = teacherService.selectByAccount(user.getAccount());
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        if (student != null) {
            //MD5 crypt
            if (student.getSpassword().equals(CommonUtil.getMD5(user.getPassword()))) {
                request.getSession().setAttribute("userType", CommonConstants.USER_TYPE_STUDENT);
                request.getSession().setAttribute("userID", student.getSid());
                request.getSession().setAttribute("firstLogIn", true);
                return student;
            } else {
                user.setMessage(CommonErrorMsg.USER_EXISIT_BUT_WRONG_PASSWORD);
            }
        } else if (teacher != null) {
            //MD5 crypt
            if (teacher.getTpassword().equals(CommonUtil.getMD5(user.getPassword()))) {
                request.getSession().setAttribute("userType", CommonConstants.USER_TYPE_TEACHER);
                request.getSession().setAttribute("userID", teacher.getTid());
                request.getSession().setAttribute("firstLogIn", true);
                return teacher;
            } else {
                user.setMessage(CommonErrorMsg.USER_EXISIT_BUT_WRONG_PASSWORD);
            }
        } else {
            user.setMessage(CommonErrorMsg.USER_NOT_EXIST);
        }
        return user;
    }

    @ResponseBody
    @RequestMapping(value = "/user/getSession", method = RequestMethod.GET)
    public UserModel getSession() {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        Boolean firstLogin = (Boolean) request.getSession().getAttribute("firstLogIn");
        if (null != id && null != type) {
            Student student = null;
            Teacher teacher = null;
            try {
                if (CommonConstants.USER_TYPE_TEACHER.equals(type)) {
                    teacher = teacherService.selectByPrimaryKey(id);
                    TeacherCustom teacherCustom = ModelUtil.copyTeacher(teacher);
                    if(firstLogin)
                    {
                        teacherCustom.setFirstLog(true);
                        request.getSession().setAttribute("firstLogIn", false);
                    }
                    else
                    {
                        teacherCustom.setFirstLog(false);
                    }
                    return teacherCustom;
                } else if (CommonConstants.USER_TYPE_STUDENT.equals(type)) {
                    student = studentService.selectByPrimaryKey(id);
                    StudentCustom studentCustom = ModelUtil.copyStudent(student);
                    if(firstLogin)
                    {
                        studentCustom.setFirstLog(true);
                        request.getSession().setAttribute("firstLogIn", false);
                    }
                    else
                    {
                        studentCustom.setFirstLog(false);
                    }
                    return studentCustom;
                }
            } catch (Exception e) {
                logger.error(e.getMessage());
            }
        }
        return null;
    }

    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    public Boolean pointToUserLogout() {
        request.getSession().removeAttribute("userID");
        request.getSession().removeAttribute("userType");
        request.getSession().removeAttribute("firstLogIn");
        try {
            request.logout();
        } catch (ServletException e) {
            e.printStackTrace();
        }
        return true;
    }
}
