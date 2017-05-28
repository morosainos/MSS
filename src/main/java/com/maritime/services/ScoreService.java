package com.maritime.services;

import com.maritime.models.Score;

import java.util.List;

public interface ScoreService {

    List<Score> selectForFinalScore(Long sid);

    List<Score> selectForAllScore(Score score);

    List<Score> selectForTeacherPage(Long tid);

    List<Score> selectForStudentScore(Score score);

    int insert(Score record);

    int updateByPrimaryKey(Score record);
}
