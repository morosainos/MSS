package com.maritime.services.impl;

import com.maritime.dao.PointSetMapper;
import com.maritime.models.PointSet;
import com.maritime.services.PointSetService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("pointset")
public class PointSetServiceImpl extends BaseServiceImp implements PointSetService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(PointSetServiceImpl.class);

	@Autowired
	private PointSetMapper pointSetMapper;


    @Override
    public PointSet selectBasicInfo(String major) {
        return pointSetMapper.selectBasicInfo(major);
    }

    @Override
    public PointSet selectForStudent(Long sid) {
        return pointSetMapper.selectForStudent(sid);
    }

    @Override
    public PointSet selectForAllType(Long sid) {
        return pointSetMapper.selectForAllType(sid);
    }

    @Override
    public PointSet selectForDegreeType(Long sid) {
        return pointSetMapper.selectForDegreeType(sid);
    }

    @Override
    public List<PointSet> selectForClassGraphic(String term, Integer cid) {
        return pointSetMapper.selectForClassGraphic(term,cid);
    }
}
