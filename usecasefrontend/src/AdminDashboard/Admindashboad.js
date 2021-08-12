import './Admindashboard.css';

import React from 'react';

export default function Admindashboard(){

    return(
        <div>
   <link href="https://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>

    <nav class='menu'>
<a class="nav" href="./admin">
    <div class="icon">HOME</div>
<div class="icon">
    <i class="fa fa-sign-in"></i></div>
</a>
<a class="nav" href="./adminview">
  <div class="icon"><i class="fa fa-th-list"></i>
</div>
  <div class="icon">APPLICATIONS</div>
</a>
<a class="nav" href="./cibilreport">
  <div class="icon"><i class="fa fa-file-text-o"></i></div>
  <div class="icon">CIBIL SCORE</div>
</a>
<a class="nav" href="/appedit">
<div class="icon">APPROVE/REJECT</div>
<div class="icon"><i class="fa fa-check-square-o"></i></div>
</a>
<a class="nav" href="./carddetails">
  <div class="icon"><i class="fa fa-credit-card"></i></div>
  <div class="icon">CARD DETAILS</div>
</a>
<a class="nav" href="#">
  <div class="icon"><i class="fa fa-truck"></i></div>
  <div class="icon">DISPATCH CARDS</div>
</a>
</nav>

        </div>
    )

  
}