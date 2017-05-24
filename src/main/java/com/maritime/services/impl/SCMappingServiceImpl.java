package com.maritime.services.impl;

import com.maritime.dao.SCMappingMapper;
import com.maritime.dao.StudentMapper;
import com.maritime.models.SCMapping;
import com.maritime.models.Student;
import com.maritime.services.SCMappingService;
import com.maritime.services.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("scmapping")
public class SCMappingServiceImpl extends BaseServiceImp implements SCMappingService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(SCMappingServiceImpl.class);

	@Autowired
	private SCMappingMapper scMappingMapper;


    @Override
    public List<SCMapping> selectAllCourse(Long sid) {
        return scMappingMapper.selectAllCourse(sid);
    }
}
