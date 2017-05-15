package com.maritime.common.util;

import com.maritime.common.constants.CommonConstants;
import com.maritime.models.Student;
import com.maritime.models.StudentCustom;
import com.maritime.models.Teacher;
import com.maritime.models.TeacherCustom;

/**
 * Created by Moros on 2017/5/15.
 */
public class ModelUtil {
    public static TeacherCustom copyTeacher(Teacher teacher){
        TeacherCustom teacherCustom = new TeacherCustom();
        teacherCustom.setType(CommonConstants.USER_TYPE_TEACHER);
        teacherCustom.setDescription(teacher.getTdescription());
        teacherCustom.setId(teacher.getTid());
        teacherCustom.setIsActive(teacher.getIsActive());
        teacherCustom.setName(teacher.getTname());
        teacherCustom.setNumber(teacher.getTnumber());
        teacherCustom.setPassword(teacher.getTpassword());
        teacherCustom.setRole(teacher.getTrole());
        teacherCustom.setSex(teacher.getTsex());
        return teacherCustom;
    }

    public static StudentCustom copyStudent(Student student){
        StudentCustom studentCustom = new StudentCustom();
        studentCustom.setName(student.getSname());
        studentCustom.setDescription(student.getSdescription());
        studentCustom.setSex(student.getSsex());
        studentCustom.setPassword(student.getPassword());
        studentCustom.setNumber(student.getSnumber());
        studentCustom.setAcademy(student.getSacademy());
        studentCustom.setDate(student.getSdate());
        studentCustom.setId(student.getSid());
        studentCustom.setIsActive(student.getIsActive());
        studentCustom.setMajor(student.getSmajor());
        studentCustom.setSclass(student.getSclass());
        studentCustom.setStype(student.getStype());
        studentCustom.setType(CommonConstants.USER_TYPE_STUDENT);
        return studentCustom;
    }
}
