package com.maritime.models;

/**
 * Created by Moros on 2017/5/23.
 */
public class UserModel {

    Long account;

    String password;

    String message;

    String type;

    Long id;

    Boolean firstLog;

    String columnName1;

    String columnData1;

    private String name;

    private String sex;

    private Boolean isActive;

    private String academy;

    private String major;

    private String aclass;

    private String description;

    private String email;

    private String phone;

    private String certiID;

    private String nation;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getAccount() {
        return account;
    }

    public void setAccount(Long account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getFirstLog() {
        return firstLog;
    }

    public void setFirstLog(Boolean firstLog) {
        this.firstLog = firstLog;
    }


    public String getColumnName1() {
        return columnName1;
    }

    public void setColumnName1(String columnName1) {
        this.columnName1 = columnName1;
    }

    public String getColumnData1() {
        return columnData1;
    }

    public void setColumnData1(String columnData1) {
        this.columnData1 = columnData1;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
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

    public String getAclass() {
        return aclass;
    }

    public void setAclass(String sclass) {
        this.aclass = sclass;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCertiID() {
        return certiID;
    }

    public void setCertiID(String certiID) {
        this.certiID = certiID;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }
}
