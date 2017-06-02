package com.maritime.services;

import com.maritime.models.PointSet;

public interface PointSetService {

    PointSet selectBasicInfo(String major);

    PointSet selectForStudent(Long sid);

    PointSet selectForAllType(Long sid);

    PointSet selectForDegreeType(Long sid);
}
