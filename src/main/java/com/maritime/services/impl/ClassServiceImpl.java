package com.maritime.services.impl;

import com.maritime.dao.ClassMapper;
import com.maritime.models.Class;
import com.maritime.services.ClassService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("class")
public class ClassServiceImpl extends BaseServiceImp implements ClassService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(ClassServiceImpl.class);

	@Autowired
	private ClassMapper classMapper;


    @Override
    public List<Class> selectByMajor(Integer mid) {
        return classMapper.selectByMajor(mid);
    }
}
