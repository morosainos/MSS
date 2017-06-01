package com.maritime.services;

import com.maritime.models.Schedule;

import java.util.List;

public interface ScheduleService {

    List<Schedule> selectForStudent(Long sid, String term);

    List<Schedule> selectForTeacher(Long tid, String term);

    int updateRemainPeople(Integer sid, Integer number);
}
