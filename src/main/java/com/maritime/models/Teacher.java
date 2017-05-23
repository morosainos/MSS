package com.maritime.models;

public class Teacher extends UserModel{
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Long tid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tname
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String tname;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tsex
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String tsex;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tnumber
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Long tnumber;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tpassword
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String tpassword;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Boolean isActive;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.trole
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer trole;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.teacher.tdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String tdescription;

    private String role;

    private Integer tAcademy;

    private Integer tMajor;

    private Integer tClass;

    private String academy;

    private String major;

    private Integer teacherclass;

    private String tEmail;

    private String tPhone;

    private String tCertiID;

    private String tNation;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tid
     *
     * @return the value of maritime.teacher.tid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Long getTid() {
        return tid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tid
     *
     * @param tid the value for maritime.teacher.tid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTid(Long tid) {
        this.tid = tid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tname
     *
     * @return the value of maritime.teacher.tname
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getTname() {
        return tname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tname
     *
     * @param tname the value for maritime.teacher.tname
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTname(String tname) {
        this.tname = tname == null ? null : tname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tsex
     *
     * @return the value of maritime.teacher.tsex
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getTsex() {
        return tsex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tsex
     *
     * @param tsex the value for maritime.teacher.tsex
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTsex(String tsex) {
        this.tsex = tsex == null ? null : tsex.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tnumber
     *
     * @return the value of maritime.teacher.tnumber
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Long getTnumber() {
        return tnumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tnumber
     *
     * @param tnumber the value for maritime.teacher.tnumber
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTnumber(Long tnumber) {
        this.tnumber = tnumber;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tpassword
     *
     * @return the value of maritime.teacher.tpassword
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getTpassword() {
        return tpassword;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tpassword
     *
     * @param tpassword the value for maritime.teacher.tpassword
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTpassword(String tpassword) {
        this.tpassword = tpassword == null ? null : tpassword.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.is_active
     *
     * @return the value of maritime.teacher.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Boolean getIsActive() {
        return isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.is_active
     *
     * @param isActive the value for maritime.teacher.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.trole
     *
     * @return the value of maritime.teacher.trole
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getTrole() {
        return trole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.trole
     *
     * @param trole the value for maritime.teacher.trole
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTrole(Integer trole) {
        this.trole = trole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.teacher.tdescription
     *
     * @return the value of maritime.teacher.tdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getTdescription() {
        return tdescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.teacher.tdescription
     *
     * @param tdescription the value for maritime.teacher.tdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTdescription(String tdescription) {
        this.tdescription = tdescription == null ? null : tdescription.trim();
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Integer gettAcademy() {
        return tAcademy;
    }

    public void settAcademy(Integer tAcademy) {
        this.tAcademy = tAcademy;
    }

    public Integer gettMajor() {
        return tMajor;
    }

    public void settMajor(Integer tMajor) {
        this.tMajor = tMajor;
    }

    public Integer gettClass() {
        return tClass;
    }

    public void settClass(Integer tClass) {
        this.tClass = tClass;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Integer getTeacherclass() {
        return teacherclass;
    }

    public void setTeacherclass(Integer teacherclass) {
        this.teacherclass = teacherclass;
    }

    public String gettEmail() {
        return tEmail;
    }

    public void settEmail(String tEmail) {
        this.tEmail = tEmail;
    }

    public String gettPhone() {
        return tPhone;
    }

    public void settPhone(String tPhone) {
        this.tPhone = tPhone;
    }

    public String gettCertiID() {
        return tCertiID;
    }

    public void settCertiID(String tCertiID) {
        this.tCertiID = tCertiID;
    }

    public String gettNation() {
        return tNation;
    }

    public void settNation(String tNation) {
        this.tNation = tNation;
    }
}