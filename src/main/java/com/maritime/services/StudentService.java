package com.maritime.services;

import com.maritime.models.Student;

import java.util.List;

public interface StudentService {

	Student selectByAccount(Long tnumber);

    Student selectByPrimaryKey(Long sid);

    int updateForInfo(Student record);

    List<Student> selectForAll();

    int insert(Student record);

    int deleteByPrimaryKey(Long sid);

    int inactiveStudent(Long[] sids);

    int updateByPrimaryKey(Student record);

    List<Student> selectForDuplicate(Student student);
}
