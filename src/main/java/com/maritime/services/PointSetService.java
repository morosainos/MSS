package com.maritime.services;

import com.maritime.models.PointSet;

import java.util.List;

public interface PointSetService {

    PointSet selectBasicInfo(String major);

    PointSet selectForStudent(Long sid);

    PointSet selectForAllType(Long sid);

    PointSet selectForDegreeType(Long sid);

    List<PointSet> selectForClassGraphic(String term, Integer cid);
}
