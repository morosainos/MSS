package com.maritime.dao.mappers;

import com.maritime.models.TeacherModel;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TeacherMapper {

    TeacherModel selectByPrimaryKey(Integer tid);
}