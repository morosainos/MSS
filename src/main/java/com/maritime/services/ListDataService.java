package com.maritime.services;

import com.maritime.models.ListData;

import java.util.List;

public interface ListDataService {

    List<ListData> selectByListID(Integer ldlistid);
}
