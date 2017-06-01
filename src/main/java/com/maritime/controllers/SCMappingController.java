package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.SCMapping;
import com.maritime.services.SCMappingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class SCMappingController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(SCMappingController.class);

    @Autowired
    private SCMappingService scMappingService;
    
    @ResponseBody
    @RequestMapping(value = "/scmapping/selectAllCourse", method = RequestMethod.GET)
    public List<SCMapping> selectAllCourse() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            return scMappingService.selectAllCourseForTeacher(id);
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return scMappingService.selectAllCourse(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/scmapping/selectAllTerms", method = RequestMethod.GET)
    public List<SCMapping> selectAllTerms() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            return scMappingService.selectAllTermsForTeacher(id);
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return scMappingService.selectAllTermsForStudent(id);
        }
        return null;
    }

    @RequestMapping(value = "/scmapping/insert", method = RequestMethod.POST)
    public Integer selectForAll(@RequestBody List<SCMapping> maps) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        int insertNums = 0;
        if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            for(SCMapping s:maps){
                s.setPsid(id);
                s.setIsActive(true);
                s.setLastUpdateUser(type+id);
                s.setLastUpdateDt(new Date());
                insertNums +=scMappingService.insert(s);
            }
        }
        return insertNums;
    }

    @RequestMapping(value = "/scmapping/inactive", method = RequestMethod.GET)
    public Integer inactive(@RequestParam Integer[] mapIds) throws MSSException {
        return scMappingService.inactiveScmapping(mapIds);
    }

}
