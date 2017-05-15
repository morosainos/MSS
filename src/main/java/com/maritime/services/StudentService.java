package com.maritime.services;

import com.maritime.models.Student;

public interface StudentService {

	Student selectByAccount(Long tnumber);

    Student selectByPrimaryKey(Integer sid);
}
