import './ApplyForm.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';

export default function ApplyForm() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const panRegExp = /([A-Z]){4}([0-9]){4}([A-Z]){2}$/
    const [cities,setCities] = useState([]);
    const[cards,setCards]=useState([]);
    
    const validationSchema = Yup.object({
        cardholdername : Yup.string().min(3, "*Names must have at least 3 characters")
        .max(50, "*Names can't be longer than 50 characters").required("*Provide Cardholder name"),
        annualincome: Yup.number().required("*annual income required"),
        email : Yup.string().email("INvalid Email").required("Pls Enter valid Email"),
        age:Yup.number().typeError("Enter a valid age").min(20," Minimum Age is 20").max(90,"Max age is 90"),
        phonenumber : Yup.string().matches(phoneRegExp, "*Phone number is not valid").required("*Phone number required"),
        aadharno:Yup.number().typeError("Enter Aadhar number"),
        occupation:Yup.string().required("*Specify your Occupation"),
        city:Yup.string().required("Please select city"),
        gender:Yup.string().required("Please select gender"),
        address:Yup.string().required("*Address required"),
        card:Yup.string().required("Please select card type"),
        panno:Yup.string() .matches(panRegExp, "*Pan Number is not valid").required("Pan number Mandatory"),
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
          cardholdername:'',
            annualincome:'',
            age:0,
            email:'',
            gender:'',
            occupation: '',
            address:'',
            phonenumber: '',
            city:'',
            cards:'',
            aadharno:0,
            panno:''
        },
        validationSchema,
       const reqOptios = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
          };

          fetch("http://localhost:8083/api/postform", reqOptios).then(res => res.json()).then((data) => {
         
          console.log(data);
            console.log("saved");  
        });
    }) 
    useEffect(()=>{
        console.log("Executed after render method=======");
        fetch("http://localhost:4001/cities").then(res => res.json()).then(data=>{
          console.log(data);
          setCities(data);
        }).catch(e=>{
          console.error("ERR in CITIES...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    },[])

    useEffect(()=>{
      console.log("Executed after render method=======");
      fetch("http://localhost:4005/cards").then(res => res.json()).then(data=>{
        console.log(data);
        setCards(data);
      }).catch(e=>{
        console.error("ERR in CITIES...");
        console.error(e);
      }).finally(()=>{
        console.log("I am in finally");
      })
  },[])
   
    return (
           <div>
               <div className="container-sm">
               <div class="col-sm-8">
               <div class="card">
               <div className="card-header"><h4><center>CREDITCARD APPLICATION FORM </center></h4></div>
               <div className="card-body">
               <form  onSubmit={handleSubmit} noValidate>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>CARDHOLDER NAME: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Cardholder Name" name="cardholdername" onChange={handleChange} value={values.cardholdername}/> 
                             <h3> {errors.cardholdername ? errors.cardholdername: null}</h3> 
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>ANNUAL INCOME: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                           <input  placeholder="Enter Annual Income" name="annualincome" onChange={handleChange} value={values.annualincome}/> 
                           <h3>{errors.annualincome ? errors.annualincome: null}</h3>
                           </div>
                    </div>

                    <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>CREDITCARD TYPE:  </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label"> </label> </div>
                           <div class="col-sm-3 form-group">
                           <select name="cards" onChange={handleChange} value={values.card}>
                             <option value="-1">select card type</option>
                             {cards.map((x) => {
                               return <option key={x.id} value={x.id}>{x.name}</option>
                             })}
                           </select>
                           <h3>{errors.cards? errors.cards: null} </h3>
                        </div>
                   </div>
                    <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Age: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Age" name="age" onChange={handleChange} value={values.age}/>
                               <h3>{errors.age ? errors.age : null}</h3>
                           </div>
                   </div>
                   
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>GENDER:  </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label"> </label> </div>
                           <div class="col-sm-3 form-group">
                           <select name="gender" onChange={handleChange} >
                             <option value="-1">select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                           
                           </select>
                           <h3>{errors.gender? errors.gender: null} </h3>
                        </div>
                   </div>
                   
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Email Id: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Email Id" name="email" onChange={handleChange} value={values.email}/>
                               <h3>{errors.email ? errors.email : null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Occupation: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Occupation" name="occupation" onChange={handleChange} value={values.occupation}/>
                               <h3>{errors.occupation ? errors.occupation: null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Address For Communication:</h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                           <input  placeholder="Enter Address" name="address" onChange={handleChange} value={values.address}/>
                           <h3>{errors.address? errors.address : null}</h3>
                           </div>
                   </div>   
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>AADHAR NUMBER: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                           <input  placeholder="Enter Aadhar Number" name="aadharno" onChange={handleChange} value={values.aadharno}/> 
                           <h3>{errors.aadharno ? errors.aadharno: null}</h3>
                           </div>
                    </div>
                    <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Pancard Number: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your pan number" name="panno" onChange={handleChange} value={values.pannum}/>
                               <h3>{errors.panno ? errors.panno : null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>City:  </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label"> </label> </div>
                           <div class="col-sm-3 form-group">
                           <select name="city" onChange={handleChange} value={values.city}>
                             <option value="-1">select city</option>
                             {cities.map((x) => {
                               return <option key={x.id} value={x.id}>{x.name}</option>
                             })}
                           </select>
                           <h3>{errors.city? errors.city: null} </h3>
                        </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5>Contact Number: </h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                               <input  placeholder="Enter your Contact number"name="phonenumber" onChange={handleChange} value={values.phonenumber}/>
                               <h3> {errors.phonenumber ? errors.phonenumber : null} </h3>
                           </div>
                   </div>
                   <div class="row">
                   <div class="col-sm-4 form-group">
                       <h5></h5>
                   </div>
                   <div class="col-sm-1 form-group">
                       <label class="control-label">:</label></div>
                           <div class="col-sm-3 form-group">
                              <Button variant="primary"  component="label" type="submit"> Apply
                             
                             </Button>
                           </div>
                     </div>
                  
                   
                    </form>
                </div>
            </div>                
        </div>
    </div>
   
    </div>
    )
}
                        
        
    