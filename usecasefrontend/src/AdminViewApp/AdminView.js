import './Adminview.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

export default function AdminView(){

    const [apply, setApply] = useState([]);

    useEffect(() => {
        console.log("Executed after render method=======");
        axios.get("http://localhost:8083/api/getform").then(res => {
            console.log(res);
            setApply(res.data);
        }).catch(e => {
            console.error("ERR in Credentials json...");
            console.error(e);
        }).finally(() => {
            console.log("loaded");
        })
      }, [])

    return(

        <div>
        <head>
	<meta charset="utf-8" />
	<title>Table Style</title>
	<meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; width=device-width;"/>
</head>

<body>
<div class="table-title">
<h3><center>CREDITCARD APPLICATIONS </center></h3>
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">AppId</th>
<th class="text-left">Cardholder Name</th>
<th class="text-left">Annual Income</th>
<th class="text-left">CardType</th>
<th class="text-left">Age</th>
<th class="text-left">Country</th>
<th class="text-left">Gender</th>
<th class="text-left">Email Id</th>
<th class="text-left">Pan number</th>
<th class="text-left">Contact Number</th>
</tr>
</thead>
<tbody class="table-hover">
{
    apply.map((x)=>{
        return (
            <>
            <tr>
             <td class="text-left">{x.id}</td>            
<td class="text-left">{x.cardholdername}</td>
<td class="text-left">{x.income}</td>
<td class="text-left">{x.ctype}</td>
<td class="text-left">{x.age}</td>
<td class="text-left">{x.country}</td>
<td class="text-left">{x.gender}</td>
<td class="text-left">{x.email}</td>
<td class="text-left">{x.pannumber}</td>
<td class="text-left">{x.phone}</td>


</tr>
</>)
          })}
</tbody>
</table>
 </body>
</div>
    )
}