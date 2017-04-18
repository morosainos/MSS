package com.maritime.services.impl;

import com.maritime.dao.mappers.TeacherMapper;
import com.maritime.dao.mappers.TeacherModelMapper;
import com.maritime.models.TeacherModel;
import com.maritime.services.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @Description: implement of answer detail service
 */
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
	public TeacherModel selectByPrimaryKey(Integer tid) {
		System.out.println("---"+tid);
		return teacherMapper.selectByPrimaryKey(tid);
	}

}
