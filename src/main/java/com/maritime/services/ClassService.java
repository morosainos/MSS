package com.maritime.services;

import java.util.List;

public interface ClassService {

    List<com.maritime.models.Class> selectByMajor(Integer mid);
}
