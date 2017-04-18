package com.maritime.services;

import com.maritime.models.TeacherModel;

/**
 * 
 * @ClassName: AnswerDetailService
 * @Description: answer detail service interface
 * @author Amanda
 * @date Dec 30
 */
public interface TeacherService {

	TeacherModel selectByPrimaryKey(Integer tid);
}
