package com.maritime.services;

import com.maritime.models.Score;

import java.util.List;
import java.util.Map;

public interface ScoreService {

    List<Score> selectForFinalScore(Long sid);

    List<Score> selectForAllScore(Score score);

    List<Score> selectForTeacherPage(Long tid);

    List<Score> selectForStudentScore(Score score);

    int insert(Score record);

    int updateByPrimaryKey(Score record);

    List<Score> selectByExam(Integer eid);

    List<Score> selectByTermsForGraphics(Map<String, Object> params);
}
