package com.srm.userbackend.userbackend.Entity;

import java.util.Date;
import java.util.List;

import org.springframework.validation.ObjectError;

public class BankError {

    private String message;
    private String category;
    private String errCode;
    private String id;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "BankError [category=" + category + ", errCode=" + errCode + ", id=" + id + ", message=" + message + "]";
    }

    public String getErrCode() {
        return errCode;
    }

    public void setErrCode(String string) {
        this.errCode = string;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
