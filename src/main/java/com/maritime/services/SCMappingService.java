package com.maritime.services;

import com.maritime.models.SCMapping;

import java.util.List;

public interface SCMappingService {

    List<SCMapping> selectAllCourse(Long sid);

    List<SCMapping> selectAllCourseForTeacher(Long tid);

    List<SCMapping> selectAllTermsForStudent(Long sid);

    List<SCMapping> selectAllTermsForTeacher(Long tid);

    int insert(SCMapping record);

    int inactiveScmapping(Integer[] pids);

    List<SCMapping> selectAllTermsForAdmin();
}
