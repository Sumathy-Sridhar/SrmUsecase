import React, { useState } from 'react';

import axios from 'axios';
import { Formik } from 'formik';
import {
  Button,
  Form,
} from 'react-bootstrap';
import styled from 'styled-components';
import * as Yup from 'yup';

const CONTAINER = styled.div`
    background: #F7F9FA;
    height: auto;
    width: 90%;
    margin: 5em auto;
    color: snow;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  
    @media screen and (min-width:550px) {
      
      h1 {
        color: #DC143C;
        padding-top: .5em;
      }
    }
  
    label {
      color: #24B9B6;
      font-size: 1.2em;
      font-weight: 400;
    }
  
    h1 {
      
      color: #24B9B6;
      padding-top: .5em;
    }
  
    .form-group {
      margin-bottom: 2.5em;
    }
  
    .error {
      border: 2px solid #FF6565;
    }
  
    .error-message {
      color: #FF6565;
      padding: .5em .2em;
      height: 1em;
      position: absolute;
      font-size: .8em;
    }
  `;
  
  const MYFORM = styled(Form)`
    width: 90%;
    text-align: left;
    padding-top: 2em;
    padding-bottom: 2em;
  
    @media(min-width: 786px) {
      width: 50%;
    }
  `;
  
  const BUTTON = styled(Button)`
    background: #1863AB;
    border: none;
    font-size: 1.2em;
    font-weight: 400;
  
    &:hover {
      background: #1D3461;
    }
  `;
  
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  
  const panRegExp = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
  
  
  const validationSchema = Yup.object().shape({
    cardholdername: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
    email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
    phonenumber: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
    age: Yup.number()
    .min(18, "You must be at least 18 years")
    .max(60, "You must be at most 60 years")
    .required("*Age required"),
    gender: Yup.string()
    .required("*Gender is required"),
    country: Yup.string()
    .required("*Country is required"),
    pannumber: Yup.string()
    .matches(panRegExp, "*Pan Number is not valid")
    .required("*Pan Card Number is required"),
    annualincome: Yup.number()
    .required("*Income required"),
    cardtype: Yup.string()
    .required("*Card Type required")
    
  });
  export default function Applycc() {
  
    const[cards,setCards]=useState([]);
    const [user, setUser] = useState({});
  
   
      return (
          <CONTAINER>
        
        <center><h1>CREDITCARD APPLICATION </h1></center>
        <Formik
          initialValues={{ 
            cardholdername:"", annualincome:"" ,cardtype:"",email:"", phonenumber:"",age:"",country:"",pannumber:""}}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            

              setSubmitting(true);
            setTimeout(() => {
                const OnChange= (e) =>{
        setUser((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
        console.log(user);
    }

                const onSubmit=()=>{
        // sessionStorage.setItem('sign',true)
        axios.post("http://localhost:8083/api/postform",user).then(
            (res) =>{
                console.log(res);
                
            }
        ).catch((err)=>{console.log("err")})
    }
          alert(JSON.stringify(values, null, 2));
  
              // alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 500);
          }}
        >
          
        {( {values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting }) => (
          <MYFORM onSubmit={handleSubmit} className="mx-auto">
            {console.log(values)}
            <Form.Group controlId="formName">
              <Form.Label>Cardholder Name :</Form.Label>
              <Form.Control
                type="text"
                name="cardholdername"
                placeholder="Enter cardholdername"
                onChange={handleChange}
                onBlur={handleBlur}
                
                value={values.cardholdername}
                
                className={touched.cardholdername && errors.cardholdername ? "error" : null}
                />
                
                {touched.cardholdername && errors.cardholdername ? (
                  <div className="error-message">{errors.cardholdername}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="formIncome">
              <Form.Label>Annual Income: </Form.Label>
              <Form.Control
                type="text"
                name="annualincome"
                placeholder="Enter Annual Income"
                onChange={handleChange}
                onBlur={handleBlur}
                
                value={values.annualincome}
                
                className={touched.annualincome && errors.annualincome ? "error" : null}
                />
                {touched.annualincome && errors.annualincome ? (
                  <div className="error-message">{errors.annualincome}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="forcardtype">
              <Form.Label>CreditCard Type :</Form.Label>
              <Form.Control 
              type="text"
                name="cardtype"
                placeholder="Enter cardtype"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardtype}
                className={touched.cardtype && errors.cardtype ? "error" : null}
                />
                {touched.cardtype && errors.cardtype ? (
                  <div className="error-message">{errors.cardtype}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age :</Form.Label>
              <Form.Control
                type="text"
                name="age"
                placeholder="Enter Age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                className={touched.age && errors.age ? "error" : null}
                />
                {touched.age && errors.age ? (
                  <div className="error-message">{errors.age}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "error" : null}
              />
              {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="formPhonenumber">
              <Form.Label>CONTACT NUMBER :</Form.Label>
              <Form.Control
                type="text"
                name="phonenumber"
                placeholder="phonenumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phonenumber}
                className={touched.phonenumber && errors.phonenumber ? "error" : null}
                />
                {touched.phonenumber && errors.phonenumber ? (
                  <div className="error-message">{errors.phonenumber}</div>
                ): null}
            </Form.Group>
       <Form.Group controlId="formCountry">
              <Form.Label>Country :</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                className={touched.country && errors.country ? "error" : null}
                />
                {touched.country && errors.country ? (
                  <div className="error-message">{errors.country}</div>
                ): null}
            </Form.Group>
            <Form.Group controlId="formPannumber">
              <Form.Label>Pan Card Number :</Form.Label>
              <Form.Control
                type="text"
                name="pannumber"
                placeholder="Pan Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pannumber}
                className={touched.pannumber && errors.pannumber ? "error" : null}
                />
                {touched.pannumber && errors.pannumber ? (
                  <div className="error-message">{errors.pannumber}</div>
                ): null}
            </Form.Group>
            
            <BUTTON variant="primary" type="submit"  onSubmit={handleSubmit} disabled={isSubmitting}>
              Submit
            </BUTTON>
          </MYFORM>
        )}
        </Formik>
      </CONTAINER>
      )
  }
  
  