package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.PointSet;
import com.maritime.services.PointSetService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PointSetController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(PointSetController.class);

    @Autowired
    private PointSetService pointSetService;

    @ResponseBody
    @RequestMapping(value = "/pointset/selectBasicInfo", method = RequestMethod.POST)
    public PointSet selectBasicInfo(@RequestBody String major) throws MSSException {
        return pointSetService.selectBasicInfo(major);
    }

    @ResponseBody
    @RequestMapping(value = "/pointset/selectForStudent", method = RequestMethod.GET)
    public PointSet selectForStudent() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return pointSetService.selectForStudent(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/pointset/selectForAllType", method = RequestMethod.GET)
    public PointSet selectForAllType() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return pointSetService.selectForAllType(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/pointset/selectForDegreeType", method = RequestMethod.GET)
    public PointSet selectForDegreeType() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return pointSetService.selectForDegreeType(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/pointset/selectForClassGraphic", method = RequestMethod.GET)
    public List<PointSet> selectForClassGraphic(@RequestParam String term,@RequestParam Integer cid) throws MSSException {
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type)){
            Integer role = (Integer) request.getSession().getAttribute("userRole");
            if(1 == role)
            {
                return pointSetService.selectForClassGraphic(term,cid);
            }else{
                return null;
            }
        }
        return null;
    }

}
