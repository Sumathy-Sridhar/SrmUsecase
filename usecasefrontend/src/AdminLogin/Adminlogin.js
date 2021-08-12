import './Adminlogin.css';

import React from 'react';

import { useHistory } from 'react-router';

export default function Adminlogin(){

  const history=useHistory()
 const handleSubmit=()=>{
   history.push('./admindash');
 }
    return(

<div>

<head>
  <meta charset="utf-8"/>
    <title>Login</title>
 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"/>
</head>
   <h2><center>ADMIN LOGIN</center>  </h2>
    <div id="login">
      <form name='form-login'>
        <span class="fontawesome-user"></span>
          <input type="text" id="user" placeholder="Username"/>
       
        <span class="fontawesome-lock"></span>
          <input type="password" id="pass" placeholder="Password"/>
        
        <input type="submit" onClick={handleSubmit} value="Login"/>

</form>
</div>
  </div>
    )
}