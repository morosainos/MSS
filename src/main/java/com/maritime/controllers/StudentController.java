package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.common.util.CommonUtil;
import com.maritime.models.Student;
import com.maritime.models.UserModel;
import com.maritime.services.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Moros on 2017/4/17.
 */
@RestController
public class StudentController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/student/updateForInfo", method = RequestMethod.POST)
    public int updateForInfo(@RequestBody UserModel user) throws MSSException {
        user.setPassword(CommonUtil.getMD5(user.getPassword()));
        Student student = new Student();
        student.setSid(user.getId());
        student.setsEmail(user.getEmail());
        student.setsPhone(user.getPhone());
        student.setsCertiID(user.getCertiID());
        student.setsNation(user.getNation());
        student.setSpassword(user.getPassword());
        return studentService.updateForInfo(student);
    }

    @ResponseBody
    @RequestMapping(value = "/student/selectForAll", method = RequestMethod.GET)
    public List<Student> selectForAll() throws MSSException {
        return studentService.selectForAll();
    }
}
