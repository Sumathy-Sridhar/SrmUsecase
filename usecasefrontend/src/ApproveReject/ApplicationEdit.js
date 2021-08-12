import './ApproveReject';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Edit() {
    const[userid,Setuserid]=useState([]);
    const [res, setResult] = useState([]);
    const [res1, setRes] = useState([]);
    useEffect(() => {
        console.log("Executed after render method=======");
        axios.get("http://localhost:8083/api/getform").then(res => {
            console.log(res);
            setResult(res.data);
        }).catch(e => {
            console.error("ERR in country.json...");
            console.error(e);
        }).finally(() => {
            console.log("loaded");
        })
    }, [res1])

    // const getById=()=>{
    //     axios.get("http://localhost:8083/api/getform/${id}",userid).then(res=>{
    //         Setuserid(res);
    //     }
    //     )
    // }
    return (
        <div>
        
            <div class="table-wrapper">
            
                <table class="fl-table">
                    <thead>
                        <tr>
                           <th> AppId</th>
                            <th> Cardholdername</th>
                            <th> Cardtype</th>
                            <th> Income</th>
                            <th> Pannumber</th>
                            <th> Gender</th>
                            <th> Country</th>
                            <th> email </th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((x) => {
                            return (
                                <>
                                    <tr>
                                    <td> {x.id}</td>
                                        <td> {x.cardholdername}</td>
                                        <td> {x.ctype}</td>
                                        <td> {x.income}</td>
                                        <td> {x.pannumber}</td>
                                        <td> {x.gender}</td>
                                        <td> {x.country}</td>
                                        <td> {x.email}</td>
                                        <td> {x.phone}</td>
                                        <td><Link  className="btn btn-secondary"    to="/appedit/appreject">Approve/Reject</Link></td>

                                    </tr>
                                
                                </>)
                                       
                        })}
                    </tbody>
                </table>
            </div>
            {/* <ApproveReject display={userid}/>   onClick={getById}*/ }
        </div>
    )
}