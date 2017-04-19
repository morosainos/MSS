package com.maritime.dao;

import com.maritime.models.Examination;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ExaminationMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int deleteByPrimaryKey(Integer eid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int insert(Examination record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int insertSelective(Examination record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    Examination selectByPrimaryKey(Integer eid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int updateByPrimaryKeySelective(Examination record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.examination
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int updateByPrimaryKey(Examination record);
}