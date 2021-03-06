package com.maritime.models;

import java.util.Date;

public class Examination {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.eid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer eid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.ecid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer ecid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.ename
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String ename;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.etype
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer etype;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.eform
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer eform;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.empexam
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer empexam;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.etimes
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer etimes;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.eteacher1
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Long eteacher1;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.eteacher2
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Long eteacher2;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.start_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String startDt;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.total_time
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String totalTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.eterm
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String eterm;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Boolean isActive;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.edescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String edescription;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String lastUpdateUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.examination.last_update_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Date lastUpdateDt;

    private String ePosition;

    private Float eTotalScore;

    private Long cnumber;

    private String cname;

    private String type;

    private String form;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.eid
     *
     * @return the value of maritime.examination.eid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEid() {
        return eid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.eid
     *
     * @param eid the value for maritime.examination.eid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEid(Integer eid) {
        this.eid = eid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.ecid
     *
     * @return the value of maritime.examination.ecid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEcid() {
        return ecid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.ecid
     *
     * @param ecid the value for maritime.examination.ecid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEcid(Integer ecid) {
        this.ecid = ecid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.ename
     *
     * @return the value of maritime.examination.ename
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getEname() {
        return ename;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.ename
     *
     * @param ename the value for maritime.examination.ename
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEname(String ename) {
        this.ename = ename == null ? null : ename.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.etype
     *
     * @return the value of maritime.examination.etype
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEtype() {
        return etype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.etype
     *
     * @param etype the value for maritime.examination.etype
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEtype(Integer etype) {
        this.etype = etype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.eform
     *
     * @return the value of maritime.examination.eform
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEform() {
        return eform;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.eform
     *
     * @param eform the value for maritime.examination.eform
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEform(Integer eform) {
        this.eform = eform;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.empexam
     *
     * @return the value of maritime.examination.empexam
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEmpexam() {
        return empexam;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.empexam
     *
     * @param empexam the value for maritime.examination.empexam
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEmpexam(Integer empexam) {
        this.empexam = empexam;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.etimes
     *
     * @return the value of maritime.examination.etimes
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getEtimes() {
        return etimes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.etimes
     *
     * @param etimes the value for maritime.examination.etimes
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEtimes(Integer etimes) {
        this.etimes = etimes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.eteacher1
     *
     * @return the value of maritime.examination.eteacher1
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Long getEteacher1() {
        return eteacher1;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.eteacher1
     *
     * @param eteacher1 the value for maritime.examination.eteacher1
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEteacher1(Long eteacher1) {
        this.eteacher1 = eteacher1;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.eteacher2
     *
     * @return the value of maritime.examination.eteacher2
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Long getEteacher2() {
        return eteacher2;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.eteacher2
     *
     * @param eteacher2 the value for maritime.examination.eteacher2
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEteacher2(Long eteacher2) {
        this.eteacher2 = eteacher2;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.start_dt
     *
     * @return the value of maritime.examination.start_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getStartDt() {
        return startDt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.start_dt
     *
     * @param startDt the value for maritime.examination.start_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setStartDt(String startDt) {
        this.startDt = startDt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.total_time
     *
     * @return the value of maritime.examination.total_time
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getTotalTime() {
        return totalTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.total_time
     *
     * @param totalTime the value for maritime.examination.total_time
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setTotalTime(String totalTime) {
        this.totalTime = totalTime == null ? null : totalTime.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.eterm
     *
     * @return the value of maritime.examination.eterm
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getEterm() {
        return eterm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.eterm
     *
     * @param eterm the value for maritime.examination.eterm
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEterm(String eterm) {
        this.eterm = eterm == null ? null : eterm.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.is_active
     *
     * @return the value of maritime.examination.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Boolean getIsActive() {
        return isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.is_active
     *
     * @param isActive the value for maritime.examination.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.edescription
     *
     * @return the value of maritime.examination.edescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getEdescription() {
        return edescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.edescription
     *
     * @param edescription the value for maritime.examination.edescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setEdescription(String edescription) {
        this.edescription = edescription == null ? null : edescription.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.last_update_user
     *
     * @return the value of maritime.examination.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getLastUpdateUser() {
        return lastUpdateUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.last_update_user
     *
     * @param lastUpdateUser the value for maritime.examination.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setLastUpdateUser(String lastUpdateUser) {
        this.lastUpdateUser = lastUpdateUser == null ? null : lastUpdateUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.examination.last_update_dt
     *
     * @return the value of maritime.examination.last_update_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Date getLastUpdateDt() {
        return lastUpdateDt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.examination.last_update_dt
     *
     * @param lastUpdateDt the value for maritime.examination.last_update_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setLastUpdateDt(Date lastUpdateDt) {
        this.lastUpdateDt = lastUpdateDt;
    }

    public Long getCnumber() {
        return cnumber;
    }

    public void setCnumber(Long cnumber) {
        this.cnumber = cnumber;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getForm() {
        return form;
    }

    public void setForm(String form) {
        this.form = form;
    }

    public String getePosition() {
        return ePosition;
    }

    public void setePosition(String ePosition) {
        this.ePosition = ePosition;
    }

    public Float geteTotalScore() {
        return eTotalScore;
    }

    public void seteTotalScore(Float eTotalScore) {
        this.eTotalScore = eTotalScore;
    }
}