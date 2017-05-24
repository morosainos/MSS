package com.maritime.services;

import com.maritime.models.Student;

import java.util.List;

public interface StudentService {

	Student selectByAccount(Long tnumber);

    Student selectByPrimaryKey(Long sid);

    int updateForInfo(Student record);

    List<Student> selectForAll();
}
