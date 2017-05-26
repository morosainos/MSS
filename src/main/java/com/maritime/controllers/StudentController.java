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


    @RequestMapping(value = "/student/insert", method = RequestMethod.POST)
    public Integer selectForAll(@RequestBody Student student) throws MSSException {
        student.setSid((long)0);
        if(null != studentService.selectForDuplicate(student) && studentService.selectForDuplicate(student).size()>0)
        {
            return -1;
        }
        student.setSpassword(CommonUtil.getMD5(student.getSpassword()));
        return studentService.insert(student);
    }

    @RequestMapping(value = "/student/inactiveStudent", method = RequestMethod.GET)
    public int inactiveStudent(@RequestParam Long[] stuIds) {
        int deleteNums = 0;

        if (stuIds.length > 0) {
            deleteNums = studentService.inactiveStudent(stuIds);
        }

        return deleteNums;
    }

    @RequestMapping(value = "/student/updateByPrimaryKey", method = RequestMethod.POST)
    public int updateByPrimaryKey(@RequestBody Student student) throws MSSException {
        if(null != studentService.selectForDuplicate(student) && studentService.selectForDuplicate(student).size()>0)
        {
            return -1;
        }
        student.setSpassword(CommonUtil.getMD5(student.getSpassword()));
        return studentService.updateByPrimaryKey(student);
    }
}
