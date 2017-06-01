package com.maritime.services.impl;

import com.maritime.dao.AcademyMapper;
import com.maritime.dao.ScheduleMapper;
import com.maritime.models.Academy;
import com.maritime.models.Schedule;
import com.maritime.services.AcademyService;
import com.maritime.services.ScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("schedule")
public class ScheduleServiceImpl extends BaseServiceImp implements ScheduleService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(ScheduleServiceImpl.class);

	@Autowired
	private ScheduleMapper scheduleMapper;


    @Override
    public List<Schedule> selectForStudent(Long sid, String term) {
        return scheduleMapper.selectForStudent(sid,term);
    }

    @Override
    public List<Schedule> selectForTeacher(Long tid, String term) {
        return scheduleMapper.selectForTeacher(tid,term);
    }

    @Override
    public int updateRemainPeople(Integer sid, Integer number) {
        return scheduleMapper.updateRemainPeople(sid,number);
    }
}
