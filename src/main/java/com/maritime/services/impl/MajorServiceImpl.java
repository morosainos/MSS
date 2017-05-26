package com.maritime.services.impl;

import com.maritime.dao.MajorMapper;
import com.maritime.models.Major;
import com.maritime.services.MajorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("major")
public class MajorServiceImpl extends BaseServiceImp implements MajorService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(MajorServiceImpl.class);

	@Autowired
	private MajorMapper majorMapper;


    @Override
    public List<Major> selectByAcademy(Integer macademy) {
        return majorMapper.selectByAcademy(macademy);
    }
}
