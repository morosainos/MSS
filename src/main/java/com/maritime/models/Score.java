package com.maritime.models;

import java.util.Date;

public class Score {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.sid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer sid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.seid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Integer seid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.ssid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Long ssid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.score
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String score;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.point
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Float point;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Boolean isActive;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.sdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String sdescription;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private String lastUpdateUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column maritime.score.last_update_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    private Date lastUpdateDt;

    private Long cnumber;

    private String cname;

    private Float cpoint;

    private String term;

    private String aname;

    private String ccategory;

    private String ctype;

    private String examtype;

    private String ename;

    private Float totalscore;

    private String finalscore;

    private Float finalpoint;

    private String tname;

    private Integer chour;

    private Integer mapid;

    private String eform;

    private Integer eid;

    private Long stid;

    private String sname;

    private Long snumber;

    private String saname;

    private String smname;

    private String sclass;

    private Long tid;

    private Integer totalp;

    private Integer greatp;

    private Integer goodp;

    private Integer okp;

    private Integer snpassp;

    private Integer bnpassp;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.sid
     *
     * @return the value of maritime.score.sid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getSid() {
        return sid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.sid
     *
     * @param sid the value for maritime.score.sid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setSid(Integer sid) {
        this.sid = sid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.seid
     *
     * @return the value of maritime.score.seid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Integer getSeid() {
        return seid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.seid
     *
     * @param seid the value for maritime.score.seid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setSeid(Integer seid) {
        this.seid = seid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.ssid
     *
     * @return the value of maritime.score.ssid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Long getSsid() {
        return ssid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.ssid
     *
     * @param ssid the value for maritime.score.ssid
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setSsid(Long ssid) {
        this.ssid = ssid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.score
     *
     * @return the value of maritime.score.score
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getScore() {
        return score;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.score
     *
     * @param score the value for maritime.score.score
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setScore(String score) {
        this.score = score == null ? null : score.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.point
     *
     * @return the value of maritime.score.point
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Float getPoint() {
        return point;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.point
     *
     * @param point the value for maritime.score.point
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setPoint(Float point) {
        this.point = point;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.is_active
     *
     * @return the value of maritime.score.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Boolean getIsActive() {
        return isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.is_active
     *
     * @param isActive the value for maritime.score.is_active
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.sdescription
     *
     * @return the value of maritime.score.sdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getSdescription() {
        return sdescription;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.sdescription
     *
     * @param sdescription the value for maritime.score.sdescription
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setSdescription(String sdescription) {
        this.sdescription = sdescription == null ? null : sdescription.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.last_update_user
     *
     * @return the value of maritime.score.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public String getLastUpdateUser() {
        return lastUpdateUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.last_update_user
     *
     * @param lastUpdateUser the value for maritime.score.last_update_user
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public void setLastUpdateUser(String lastUpdateUser) {
        this.lastUpdateUser = lastUpdateUser == null ? null : lastUpdateUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column maritime.score.last_update_dt
     *
     * @return the value of maritime.score.last_update_dt
     *
     * @mbggenerated Wed Apr 19 22:55:14 CST 2017
     */
    public Date getLastUpdateDt() {
        return lastUpdateDt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column maritime.score.last_update_dt
     *
     * @param lastUpdateDt the value for maritime.score.last_update_dt
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

    public Float getCpoint() {
        return cpoint;
    }

    public void setCpoint(Float cpoint) {
        this.cpoint = cpoint;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getAname() {
        return aname;
    }

    public void setAname(String aname) {
        this.aname = aname;
    }

    public String getCcategory() {
        return ccategory;
    }

    public void setCcategory(String ccategory) {
        this.ccategory = ccategory;
    }

    public String getCtype() {
        return ctype;
    }

    public void setCtype(String ctype) {
        this.ctype = ctype;
    }

    public String getExamtype() {
        return examtype;
    }

    public void setExamtype(String examtype) {
        this.examtype = examtype;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public Float getTotalscore() {
        return totalscore;
    }

    public void setTotalscore(Float totalscore) {
        this.totalscore = totalscore;
    }

    public String getFinalscore() {
        return finalscore;
    }

    public void setFinalscore(String finalscore) {
        this.finalscore = finalscore;
    }

    public Float getFinalpoint() {
        return finalpoint;
    }

    public void setFinalpoint(Float finalpoint) {
        this.finalpoint = finalpoint;
    }

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public Integer getChour() {
        return chour;
    }

    public void setChour(Integer chour) {
        this.chour = chour;
    }

    public Integer getMapid() {
        return mapid;
    }

    public void setMapid(Integer mapid) {
        this.mapid = mapid;
    }

    public String getEform() {
        return eform;
    }

    public void setEform(String eform) {
        this.eform = eform;
    }

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public Long getStid() {
        return stid;
    }

    public void setStid(Long stid) {
        this.stid = stid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public Long getSnumber() {
        return snumber;
    }

    public void setSnumber(Long snumber) {
        this.snumber = snumber;
    }

    public String getSaname() {
        return saname;
    }

    public void setSaname(String saname) {
        this.saname = saname;
    }

    public String getSmname() {
        return smname;
    }

    public void setSmname(String smname) {
        this.smname = smname;
    }

    public String getSclass() {
        return sclass;
    }

    public void setSclass(String sclass) {
        this.sclass = sclass;
    }

    public Long getTid() {
        return tid;
    }

    public void setTid(Long tid) {
        this.tid = tid;
    }

    public Integer getTotalp() {
        return totalp;
    }

    public void setTotalp(Integer totalp) {
        this.totalp = totalp;
    }

    public Integer getGreatp() {
        return greatp;
    }

    public void setGreatp(Integer greatp) {
        this.greatp = greatp;
    }

    public Integer getGoodp() {
        return goodp;
    }

    public void setGoodp(Integer goodp) {
        this.goodp = goodp;
    }

    public Integer getOkp() {
        return okp;
    }

    public void setOkp(Integer okp) {
        this.okp = okp;
    }

    public Integer getSnpassp() {
        return snpassp;
    }

    public void setSnpassp(Integer snpassp) {
        this.snpassp = snpassp;
    }

    public Integer getBnpassp() {
        return bnpassp;
    }

    public void setBnpassp(Integer bnpassp) {
        this.bnpassp = bnpassp;
    }
}