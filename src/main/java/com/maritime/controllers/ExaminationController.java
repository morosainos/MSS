package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Examination;
import com.maritime.services.ExaminationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ExaminationController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(ExaminationController.class);

    @Autowired
    private ExaminationService examinationService;

    @ResponseBody
    @RequestMapping(value = "/examination/selectAllExam", method = RequestMethod.GET)
    public List<Examination> selectAllCourse() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            Integer role = (Integer) request.getSession().getAttribute("userRole");
            if(1 == role)
            {
                return examinationService.selectForAll();
            }else{
                return examinationService.selectForTeacher(id);
            }
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return examinationService.selectForStudent(id);
        }
        return null;
    }

    @RequestMapping(value = "/examination/insert", method = RequestMethod.POST)
    public Integer selectForAll(@RequestBody Examination examination) throws MSSException {
        examination.setLastUpdateDt(new Date());
        examination.setLastUpdateUser((String) request.getSession().getAttribute("userType")+
                (Long) request.getSession().getAttribute("userID"));
        return examinationService.insert(examination);
    }

    @RequestMapping(value = "/examination/inactiveExam", method = RequestMethod.GET)
    public int inactiveExam(@RequestParam Long[] eids) {
        int deleteNums = 0;

        if (eids.length > 0) {
            deleteNums = examinationService.inactiveExam(eids);
        }

        return deleteNums;
    }

    @RequestMapping(value = "/examination/updateByPrimaryKey", method = RequestMethod.POST)
    public int updateByPrimaryKey(@RequestBody Examination examination) throws MSSException {
        return examinationService.updateByPrimaryKey(examination);
    }

}
