package com.maritime.services.impl;

import com.maritime.dao.ExaminationMapper;
import com.maritime.models.Examination;
import com.maritime.services.ExaminationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("examination")
public class ExaminationServiceImpl extends BaseServiceImp implements ExaminationService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(ExaminationServiceImpl.class);

	@Autowired
	private ExaminationMapper examinationMapper;


    @Override
    public List<Examination> selectForTeacher(Long eteacher1) {
        return examinationMapper.selectForTeacher(eteacher1);
    }

    @Override
    public List<Examination> selectForStudent(Long sid) {
        return examinationMapper.selectForStudent(sid);
    }

    @Override
    public List<Examination> selectForAll() {
        return examinationMapper.selectForAll();
    }

    @Override
    public int inactiveExam(Long[] eids) {
        return examinationMapper.inactiveExam(eids);
    }

    @Override
    public int updateByPrimaryKey(Examination record) {
        return examinationMapper.updateByPrimaryKey(record);
    }

    @Override
    public int insert(Examination record) {
        return examinationMapper.insert(record);
    }
}
