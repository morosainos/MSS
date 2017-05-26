package com.maritime.services;

import com.maritime.models.Major;

import java.util.List;

public interface MajorService {

    List<Major> selectByAcademy(Integer macademy);
}
