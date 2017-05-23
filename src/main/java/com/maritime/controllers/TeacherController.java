package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.common.util.CommonUtil;
import com.maritime.models.Student;
import com.maritime.models.Teacher;
import com.maritime.models.UserModel;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Moros on 2017/4/17.
 */
@RestController
public class TeacherController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    @Autowired
    private TeacherService teacherService;


    @RequestMapping(value = "/teacher/updateForInfo", method = RequestMethod.POST)
    public int updateForInfo(@RequestBody UserModel user) throws MSSException {
        user.setPassword(CommonUtil.getMD5(user.getPassword()));
        Teacher teacher = new Teacher();
        teacher.setTid(user.getId());
        teacher.settEmail(user.getEmail());
        teacher.settPhone(user.getPhone());
        teacher.settCertiID(user.getCertiID());
        teacher.settNation(user.getNation());
        teacher.setTpassword(user.getPassword());
        return teacherService.updateForInfo(teacher);
    }

}
