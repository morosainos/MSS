package com.maritime.services.impl;

import com.maritime.dao.ScoreMapper;
import com.maritime.models.Score;
import com.maritime.services.ScoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("score")
public class ScoreServiceImpl extends BaseServiceImp implements ScoreService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(ScoreServiceImpl.class);

	@Autowired
	private ScoreMapper scoreMapper;


    @Override
    public List<Score> selectForFinalScore(Long sid) {
        return scoreMapper.selectForFinalScore(sid);
    }

    @Override
    public List<Score> selectForAllScore(Score score) {
        return scoreMapper.selectForAllScore(score);
    }

    @Override
    public List<Score> selectForTeacherPage(Long tid) {
        return scoreMapper.selectForTeacherPage(tid);
    }

    @Override
    public List<Score> selectForStudentScore(Score score) {
        return scoreMapper.selectForStudentScore(score);
    }

    @Override
    public int insert(Score record) {
        return scoreMapper.insert(record);
    }

    @Override
    public int updateByPrimaryKey(Score record) {
        return scoreMapper.updateByPrimaryKey(record);
    }
}
