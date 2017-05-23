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
        teacherCustom.setAccount(teacher.getTnumber());
        //teacherCustom.setPassword(teacher.getTpassword());
        teacherCustom.setRole(teacher.getRole());
        teacherCustom.setSex(teacher.getTsex());
        teacherCustom.setAcademy(teacher.getAcademy());
        teacherCustom.setMajor(teacher.getMajor());
        teacherCustom.setSclass(teacher.getTeacherclass());
        teacherCustom.setColumnData1(teacher.getRole());
        teacherCustom.setColumnName1("角色");
        teacherCustom.setEmail(teacher.gettEmail());
        teacherCustom.setPhone(teacher.gettPhone());
        teacherCustom.setCertiID(teacher.gettCertiID());
        teacherCustom.setNation(teacher.gettNation());
        return teacherCustom;
    }

    public static StudentCustom copyStudent(Student student){
        StudentCustom studentCustom = new StudentCustom();
        studentCustom.setName(student.getSname());
        studentCustom.setDescription(student.getSdescription());
        studentCustom.setSex(student.getSsex());
        //studentCustom.setPassword(student.getSpassword());
        studentCustom.setAccount(student.getSnumber());
        studentCustom.setAcademy(student.getAcademy());
        studentCustom.setDate(student.getSdate());
        studentCustom.setId(student.getSid());
        studentCustom.setIsActive(student.getIsActive());
        studentCustom.setMajor(student.getMajor());
        studentCustom.setSclass(student.getStudentclass());
        studentCustom.setStype(student.getStudenttype());
        studentCustom.setType(CommonConstants.USER_TYPE_STUDENT);
        studentCustom.setColumnData1(student.getSdate());
        studentCustom.setColumnName1("入学时间");
        studentCustom.setEmail(student.getsEmail());
        studentCustom.setPhone(student.getsPhone());
        studentCustom.setCertiID(student.getsCertiID());
        studentCustom.setNation(student.getsNation());
        return studentCustom;
    }
}
