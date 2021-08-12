import {
  React,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

//https://www.bootdey.com/snippets/view/bs4-search-Bar#css

export default function CibilScore(){

    const [score, setScore] = useState([]);

    useEffect(() => {
        console.log("Executed after render method=======");
        axios.get("http://localhost:8083/api/getcibil").then(res => {
            console.log(res);
            setScore(res.data);
        }).catch(e => {
            console.error("ERR in Credentials json...");
            console.error(e);
        }).finally(() => {
            console.log("loaded");
        })
      }, [])

    return(


        <table class="table table-hover">
    <thead>
    <tr>
      
      <th scope="col">Id</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Pan number</th>
      <th scope="col">Cibil Score</th>
    </tr>
  </thead>
  <tbody>
  {
      score.map((x)=>{
          return(
              <>
              <tr>
    
      <td>{x.id}</td>
      <td>{x.customer}</td>
      <td>{x.panno}</td>
      <td>{x.cibilscore}</td>
    </tr>
    </>)
          })}
    
  </tbody>
</table>
    )
}