package com.srm.userbackend.userbackend.Entity;

import javax.persistence.*;

@Entity
@Table(name = "cibilscore")
public class CibilScore {
    private String customer;

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getPanno() {
        return panno;
    }

    @Override
    public String toString() {
        return "CibilScore [cibilid=" + cibilid + ", cibilscore=" + cibilscore + ", customer=" + customer + ", panno="
                + panno + "]";
    }

    public void setPanno(String panno) {
        this.panno = panno;
    }

    public int getCibilscore() {
        return cibilscore;
    }

    public void setCibilscore(int cibilscore) {
        this.cibilscore = cibilscore;
    }

    @Id
    private int cibilid;

    public int getCibilid() {
        return cibilid;
    }

    public void setCibilid(int cibilid) {
        this.cibilid = cibilid;
    }

    private String panno;

    private int cibilscore;

}