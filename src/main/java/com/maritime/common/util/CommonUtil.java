package com.maritime.common.util;

import java.security.MessageDigest;

/**
 * Created by Moros on 2017/5/16.
 */
public class CommonUtil {

    public static String getMD5(String message) {
        String md5str = "";
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");

            byte[] input = message.getBytes();

            byte[] buff = md.digest(input);

            md5str = bytesToHex(buff);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return md5str;
    }
    /**
     * binary to hexadecimal
     * @param bytes
     * @return
     */
    public static String bytesToHex(byte[] bytes) {
        StringBuffer md5str = new StringBuffer();
        //change digit to hex to join md5.
        int digital;
        for (int i = 0; i < bytes.length; i++) {
            digital = bytes[i];

            if(digital < 0) {
                digital += 256;
            }
            if(digital < 16){
                md5str.append("0");
            }
            md5str.append(Integer.toHexString(digital));
        }
        return md5str.toString().toUpperCase();
    }
}
