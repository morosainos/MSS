package com.maritime.services;

import com.maritime.models.SCMapping;

import java.util.List;

public interface SCMappingService {

    List<SCMapping> selectAllCourse(Long sid);
}
