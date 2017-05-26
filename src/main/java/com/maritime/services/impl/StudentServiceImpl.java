package com.maritime.services.impl;

import com.maritime.dao.StudentMapper;
import com.maritime.models.Student;
import com.maritime.services.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED, timeout = 30)
@Service("student")
public class StudentServiceImpl extends BaseServiceImp implements StudentService {

	/**
	 * LOGGER
	 */
	private static final Logger logger = LoggerFactory.getLogger(StudentServiceImpl.class);

	@Autowired
	private StudentMapper studentMapper;


    @Override
    public Student selectByAccount(Long snumber) {
        return studentMapper.selectByAccount(snumber);
    }

    @Override
    public Student selectByPrimaryKey(Long sid) {
        return studentMapper.selectByPrimaryKey(sid);
    }

    @Override
    public int updateForInfo(Student record) {
       return studentMapper.updateForInfo(record);
    }

    @Override
    public List<Student> selectForAll() {
        return studentMapper.selectForAll();
    }

    @Override
    public int insert(Student record) {
        return studentMapper.insert(record);
    }

    @Override
    public int deleteByPrimaryKey(Long sid) {
        return studentMapper.deleteByPrimaryKey(sid);
    }

    @Override
    public int inactiveStudent(Long[] sids) {
        return studentMapper.inactiveStudent(sids);
    }

    @Override
    public int updateByPrimaryKey(Student record) {
        return studentMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Student> selectForDuplicate(Student student) {
        return studentMapper.selectForDuplicate(student);
    }
}
