package com.maritime.services;

import com.maritime.models.Score;

import java.util.List;

public interface ScoreService {

    List<Score> selectForFinalScore(Long sid);

    List<Score> selectForAllScore(Score score);
}
