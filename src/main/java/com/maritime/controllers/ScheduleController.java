package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Schedule;
import com.maritime.services.ScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScheduleController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(ScheduleController.class);

    @Autowired
    private ScheduleService scheduleService;

    @ResponseBody
    @RequestMapping(value = "/schedule/selectByTerm", method = RequestMethod.POST)
    public List<Schedule> selectAllAcademy(@RequestBody String term) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            return scheduleService.selectForTeacher(id,term);
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return scheduleService.selectForStudent(id, term);
        }
        return null;
    }

    @RequestMapping(value = "/schedule/addRemainPeople", method = RequestMethod.GET)
    public int addRemainPeople(@RequestParam Integer[] scheIds) {
        int updateNums = 0;
        for(Integer sid : scheIds){
            updateNums += scheduleService.updateRemainPeople(sid,1);
        }
        return updateNums;
    }

    @RequestMapping(value = "/schedule/minusRemainPeople", method = RequestMethod.GET)
    public int minusRemainPeople(@RequestParam Integer[] scheIds) {
        int updateNums = 0;
        for(Integer sid : scheIds){
            updateNums += scheduleService.updateRemainPeople(sid,-1);
        }
        return updateNums;
    }

}
