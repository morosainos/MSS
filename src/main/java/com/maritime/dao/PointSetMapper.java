package com.maritime.dao;

import com.maritime.models.PointSet;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PointSetMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int deleteByPrimaryKey(Integer psid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int insert(PointSet record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int insertSelective(PointSet record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    PointSet selectByPrimaryKey(Integer psid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int updateByPrimaryKeySelective(PointSet record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table maritime.pointset
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    int updateByPrimaryKey(PointSet record);

    PointSet selectBasicInfo(String major);

    PointSet selectForStudent(Long sid);

    PointSet selectForAllType(Long sid);

    PointSet selectForDegreeType(Long sid);

    List<PointSet> selectForClassGraphic(@Param("term")String term, @Param("cid")Integer cid);
}