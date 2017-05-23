package com.maritime.models;

public class StudentCustom extends UserModel{

    private String stype;

    private String date;


    public String getStype() {
        return stype;
    }

    public void setStype(String stype) {
        this.stype = stype;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}