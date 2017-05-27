package com.maritime.services.impl;

import com.maritime.dao.ExaminationMapper;
import com.maritime.dao.ListDataMapper;
import com.maritime.models.Examination;
import com.maritime.models.ListData;
import com.maritime.services.ExaminationService;
import com.maritime.services.ListDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("listdata")
public class ListDataServiceImpl extends BaseServiceImp implements ListDataService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(ListDataServiceImpl.class);

	@Autowired
	private ListDataMapper listDataMapper;


    @Override
    public List<ListData> selectByListID(Integer ldlistid) {
        return listDataMapper.selectByListID(ldlistid);
    }
}
