package com.srm.userbackend.userbackend.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "application")
public class ApplicationForm {

    @Id
    private int id;
    @Temporal(value = TemporalType.DATE)
    @Column(name = "CREATED_TIME")
    private Date dt = new Date(System.currentTimeMillis());

    @NotBlank(message = "Cardholder Name Required")
    private String cardholdername;
    private String income;
    private int age;
    private String gender;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCardholdername() {
        return cardholdername;
    }

    public void setCardholdername(String cardholdername) {
        this.cardholdername = cardholdername;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPannumber() {
        return pannumber;
    }

    public void setPannumber(String pannumber) {
        this.pannumber = pannumber;
    }

    public String getCtype() {
        return ctype;
    }

    public void setCtype(String ctype) {
        this.ctype = ctype;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "ApplicationForm [age=" + age + ", cardholdername=" + cardholdername + ", country=" + country
                + ", ctype=" + ctype + ", email=" + email + ", gender=" + gender + ", id=" + id + ", income=" + income
                + ", pannumber=" + pannumber + ", phone=" + phone + ", status=" + status + "]";
    }

    private String country;
    private String pannumber;
    private String ctype;
    private String email;
    private String phone;
    private String status;

}
