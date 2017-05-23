package com.maritime.services;

import com.maritime.models.Teacher;

public interface TeacherService {

	Teacher selectByPrimaryKey(Long tid);

    Teacher selectByAccount(Long tnumber);

    int updateForInfo(Teacher record);
}
