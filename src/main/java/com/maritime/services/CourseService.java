package com.maritime.services;

import com.maritime.models.Course;

import java.util.List;

public interface CourseService {

    List<Course> selectForTeacher(Long coteacher1);

    List<Course> selectForStudent(Long psid);

    List<Course> selectSelectiveCourse(String term);

    List<Course> selectSelectiveCourseFoStudent(Long sid,String term);
}
