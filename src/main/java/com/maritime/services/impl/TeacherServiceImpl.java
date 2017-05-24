package com.maritime.services.impl;

import com.maritime.dao.TeacherMapper;
import com.maritime.models.Teacher;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("teacher")
public class TeacherServiceImpl extends BaseServiceImp implements TeacherService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(TeacherServiceImpl.class);

	@Autowired
	private TeacherMapper teacherMapper;

	@Override
	public Teacher selectByPrimaryKey(Long tid) {
		return teacherMapper.selectByPrimaryKey(tid);
	}

    @Override
    public Teacher selectByAccount(Long tnumber) {
        return teacherMapper.selectByAccount(tnumber);
    }

    @Override
    public int updateForInfo(Teacher record) {
        return teacherMapper.updateForInfo(record);
    }

    @Override
    public List<Teacher> selectForAll() {
        return teacherMapper.selectForAll();
    }

}
