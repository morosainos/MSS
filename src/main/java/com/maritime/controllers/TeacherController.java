package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.common.util.CommonUtil;
import com.maritime.models.Teacher;
import com.maritime.models.UserModel;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @ResponseBody
    @RequestMapping(value = "/teacher/selectForAll", method = RequestMethod.GET)
    public List<Teacher> selectForAll() throws MSSException {
        return teacherService.selectForAll();
    }

    @RequestMapping(value = "/teacher/insert", method = RequestMethod.POST)
    public Integer selectForAll(@RequestBody Teacher teacher) throws MSSException {
        teacher.setTid((long)0);
        if(null != teacherService.selectForDuplicate(teacher) && teacherService.selectForDuplicate(teacher).size()>0)
        {
            return -1;
        }
        teacher.setTpassword(CommonUtil.getMD5(teacher.getTpassword()));
        return teacherService.insert(teacher);
    }

    @RequestMapping(value = "/teacher/inactiveTeacher", method = RequestMethod.GET)
    public int inactiveTeacher(@RequestParam Long[] teaIds) {
        int deleteNums = 0;

        if (teaIds.length > 0) {
            deleteNums = teacherService.inactiveTeacher(teaIds);
        }

        return deleteNums;
    }

    @RequestMapping(value = "/teacher/updateByPrimaryKey", method = RequestMethod.POST)
    public int updateByPrimaryKey(@RequestBody Teacher teacher) throws MSSException {
        if(null != teacherService.selectForDuplicate(teacher) && teacherService.selectForDuplicate(teacher).size()>0)
        {
            return -1;
        }
        teacher.setTpassword(CommonUtil.getMD5(teacher.getTpassword()));
        return teacherService.updateByPrimaryKey(teacher);
    }
}
