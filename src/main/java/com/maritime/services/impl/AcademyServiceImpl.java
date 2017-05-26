package com.maritime.services.impl;

import com.maritime.dao.AcademyMapper;
import com.maritime.models.Academy;
import com.maritime.services.AcademyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("academy")
public class AcademyServiceImpl extends BaseServiceImp implements AcademyService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(AcademyServiceImpl.class);

	@Autowired
	private AcademyMapper academyMapper;


    @Override
    public List<Academy> selectForAll() {
        return academyMapper.selectForAll();
    }
}
