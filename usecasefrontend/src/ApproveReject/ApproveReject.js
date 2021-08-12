import './ApproveReject.css';

import React, { useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function ApproveReject(props) 
{
    let history = useHistory();
    // const { id } = useParams();
    
    const [user, setUser] = useState({
  id:0,cardholdername:"", email:"", phone:"",age:"",gender:"",country:"",pannumber:"",income:"",ctype:"",status:''
      });
      const { id,cardholdername, email, phone,age,gender,country,pannumber,income,ctype,status} = user;
      const onInputChange = e => 
      {
        setUser({ 
            ...user,
             [e.target.name]: e.target.value 
            });
            loadUser();
      };

    
      const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8083/api/update/${id}`, user);
        console.log(user);
        history.push("/");
        alert("Updated Successfully");
      };
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8083/api/getform/${id}`);
        setUser(result.data);
        
      };
    return (
        <div><br></br>
            <div className="container-md ">
            <div className="col-sm-8">
            <div className="card text-center">
            <div className="card-header"><h4>CREDITCARD CUSTOMER DETAILS</h4></div>
            <div className="card-body">
            <form onSubmit={e => onSubmit(e)}  >
            
            <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>appid</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="id" onChange={e => onInputChange(e)} value={id} placeholder="id" />   
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>cardholdername</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="cardholdername" onChange={e => onInputChange(e)} value={cardholdername} placeholder="cardholdername" />   
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>CREDITCARD TYPE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="ctype" onChange={e => onInputChange(e)} value={ctype} placeholder="CardType" />                   
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>AGE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="age" onChange={e => onInputChange(e)} value={age} placeholder="age" />                             
                        </div>
                </div>
               
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Email ID</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="email" onChange={e => onInputChange(e)} value={email} placeholder="EmailID"/> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Phone Number</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="phone" onChange={e => onInputChange(e)} value={phone} placeholder="Mobile No" />     
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Income</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="income" onChange={e => onInputChange(e)} value={income} placeholder="Income" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Pannumber</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="pannumber" onChange={e => onInputChange(e)} value={pannumber} placeholder="pannumber" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Gender</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="gender" onChange={e => onInputChange(e)} value={gender} placeholder="gender" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Country</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="country" onChange={e => onInputChange(e)} value={country} placeholder="country" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Approval Status</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="status" onChange={e => onInputChange(e)} value={status} placeholder="country" /> 
                           
                        </div>
                </div>
                
                
                    <button className="btn btn-success" >Update Approval Status</button>
            </form>
            </div>
           
            </div>
            
            </div>
        </div>
        </div>
    )
}