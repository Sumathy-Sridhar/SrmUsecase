package com.srm.userbackend.userbackend.Entity;

import javax.persistence.*;

@Entity
@Table(name = "carddetails")
public class CardDetails {

    private String name;

    private String expiry;
    @Id
    private String number;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private ApplicationForm apform;

    public ApplicationForm getApform() {
        return apform;
    }

    public void setApform(ApplicationForm apform) {
        this.apform = apform;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "CardDetails [apform=" + apform + ", cvc=" + cvc + ", expiry=" + expiry + ", name=" + name + ", number="
                + number + "]";
    }

    public String getExpiry() {
        return expiry;
    }

    public void setExpiry(String expiry) {
        this.expiry = expiry;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

    private String cvc;

}
