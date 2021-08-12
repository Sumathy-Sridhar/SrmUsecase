import './Status.css';

import {
  React,
  useState,
} from 'react';

import axios from 'axios';

export default function Statusui(){

 const[pan,Setpan]=useState([]);
  const handleonSubmit = () => {

    axios.get('http://localhost:8083/api/getform', pan)
      .then((result) => {
       
      console.log(result);
      });
  }
    return(
       <div>
    <div class="flexbox">
  <div class="search">
    <h1>CHECK YOUR APPLICATION STATUS HERE.. </h1>
    <h3>Enter your Pannumber</h3>
    <div>
      <input type="text" name="panno" placeholder=""  required/>
     
    </div>
  </div>
</div>

        </div>
        
    )
}
