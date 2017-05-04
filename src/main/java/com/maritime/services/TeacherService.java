package com.maritime.services;

import com.maritime.models.Teacher;

public interface TeacherService {

	Teacher selectByPrimaryKey(Integer tid);

    Teacher selectByAccount(Long tnumber);
}
