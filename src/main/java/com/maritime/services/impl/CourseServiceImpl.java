package com.maritime.services.impl;

import com.maritime.dao.CourseMapper;
import com.maritime.models.Course;
import com.maritime.services.CourseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("course")
public class CourseServiceImpl extends BaseServiceImp implements CourseService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);

	@Autowired
	private CourseMapper courseMapper;


    @Override
    public List<Course> selectForTeacher(Long coteacher1) {
        return courseMapper.selectForTeacher(coteacher1);
    }

    @Override
    public List<Course> selectForStudent(Long psid) {
        return courseMapper.selectForStudent(psid);
    }

    @Override
    public List<Course> selectSelectiveCourse(String term) {
        return courseMapper.selectSelectiveCourse(term);
    }

    @Override
    public List<Course> selectSelectiveCourseFoStudent(Long sid, String term) {
        return courseMapper.selectSelectiveCourseFoStudent(sid,term);
    }

    @Override
    public List<Course> selectForAdmin() {
        return courseMapper.selectForAdmin();
    }

    @Override
    public List<Course> selectCourseByTermForTeacher(Map<String, Object> params) {
        return courseMapper.selectCourseByTermForTeacher(params);
    }
}
