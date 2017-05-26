package com.maritime.services;

import com.maritime.models.Teacher;

import java.util.List;

public interface TeacherService {

	Teacher selectByPrimaryKey(Long tid);

    Teacher selectByAccount(Long tnumber);

    int updateForInfo(Teacher record);

    List<Teacher> selectForAll();

    int inactiveTeacher(Long[] tids);

    List<Teacher> selectForDuplicate(Teacher teacher);

    int updateByPrimaryKey(Teacher record);

    int insert(Teacher record);
}
