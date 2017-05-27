package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Score;
import com.maritime.services.ScoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ScoreController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(ScoreController.class);

    @Autowired
    private ScoreService scoreService;

    @ResponseBody
    @RequestMapping(value = "/score/selectForFinalScore", method = RequestMethod.GET)
    public List<Score> selectForFinalScore() throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        if(CommonConstants.USER_TYPE_TEACHER.equals(type))
        {
            return null;
        }else if(CommonConstants.USER_TYPE_STUDENT.equals(type)){
            return scoreService.selectForFinalScore(id);
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/score/selectForAllScore", method = RequestMethod.POST)
    public List<Score> selectForAllScore(@RequestBody Integer mapid) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        Score score = new Score();
        score.setSsid(id);
        score.setMapid(mapid);
        return scoreService.selectForAllScore(score);
    }

}
