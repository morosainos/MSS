package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Score;
import com.maritime.services.ScoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            return scoreService.selectForTeacherPage(id);
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

    @ResponseBody
    @RequestMapping(value = "/score/selectForStudentScore", method = RequestMethod.POST)
    public List<Score> selectForStudentScore(@RequestBody Integer eid) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        Score score = new Score();
        score.setTid(id);
        score.setEid(eid);
        return scoreService.selectForStudentScore(score);
    }

    @RequestMapping(value = "/score/insert", method = RequestMethod.POST)
    public int selectForStudentScore(@RequestBody List<Score> scores) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        int insertNums = 0;
        for(Score s:scores){
            if(null != s.getEid()){
                s.setSeid(s.getEid());
            }
            s.setIsActive(true);
            s.setLastUpdateUser(type+id);
            s.setLastUpdateDt(new Date());
            scoreService.insert(s);
            insertNums++;
        }
        return insertNums;
    }

    @RequestMapping(value = "/score/updateByPrimaryKey", method = RequestMethod.POST)
    public int updateByPrimaryKey(@RequestBody List<Score> scores) throws MSSException {
        Long id = (Long) request.getSession().getAttribute("userID");
        String type = (String) request.getSession().getAttribute("userType");
        int updateNums = 0;
        for(Score s:scores){
            s.setIsActive(true);
            s.setLastUpdateUser(type+id);
            s.setLastUpdateDt(new Date());
            scoreService.updateByPrimaryKey(s);
            updateNums++;
        }
        return updateNums;
    }

    @ResponseBody
    @RequestMapping(value = "/score/selectByExam", method = RequestMethod.POST)
    public List<Score> selectByExam(@RequestBody Integer eid) throws MSSException {
        return scoreService.selectByExam(eid);
    }

    @ResponseBody
    @RequestMapping(value = "/score/selectByTermsForGraphics", method = RequestMethod.GET)
    public List<Score> selectByTermsForGraphics(@RequestParam Integer cid,@RequestParam String[] term) throws MSSException {
        String type = (String) request.getSession().getAttribute("userType");
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("cid", cid);
        params.put("term", term);
        if(CommonConstants.USER_TYPE_TEACHER.equals(type)){
            return scoreService.selectByTermsForGraphics(params);
        }
        return null;
    }
}
