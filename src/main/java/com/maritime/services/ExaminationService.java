package com.maritime.services;

import com.maritime.models.Examination;

import java.util.List;

public interface ExaminationService {

    List<Examination> selectForTeacher(Long eteacher1);

    List<Examination> selectForStudent(Long sid);

    List<Examination> selectForAll();

    int inactiveExam(Long[] eids);

    int updateByPrimaryKey(Examination record);

    int insert(Examination record);
}
