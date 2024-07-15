import React, { useEffect, useState }  from 'react'
import './sign.css' 
import Axios from 'axios'

import Signlogo from './assets/company.png'

import {Link, useNavigate } from 'react-router-dom'

function Sign()  {
 
  const [emp_name, setCompanyname] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setEmployees] = useState("");
  const [emp_email, setBusinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emp_address, setCompanyAddress] = useState("");
  const [emp_designation, setcompanywebsite] = useState("");
  // const [Rolead, setRoleAd] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
 const navigate = useNavigate()
 
 const sign = async (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const mobileRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/; 
  if (!nameRegex.test(emp_name)) {
    window.alert("Please enter a valid Name.");
    return;
  }
  if (!mobileRegex.test(mobile)) {
    window.alert("Please enter a valid 10-digit mobile number.");
    return;
  }
  if (!nameRegex.test(department)) {
    window.alert("Please enter a valid Department Name.");
    return;
  }
  if (!emailRegex.test(emp_email)) {
    window.alert("Please enter a valid Email address.");
    return;
  }
  if (!passwordRegex.test(password)) {
    window.alert("Please enter a valid Password.");
    return;
  }
  if (!addressRegex.test(emp_address)) {
    window.alert("Please enter a valid Address.");
    return;
  }
  if (!nameRegex.test(emp_designation)) {
    window.alert("Please enter a valid Designation Name.");
    return;
  }

  try {
    const response = await Axios.post('http://localhost:3015/sign', {
      emp_name,
      mobile,
      department,
      emp_email,
      password,
      emp_address,
      emp_designation,
    });

    if (response.data.message === "An account with this email or mobile number already exists.") {
      window.alert("Your account has already been created.");
      return;
    } else {
      setRegisterStatus(response.data);
      window.alert("Account created successfully");
      navigate('/login');
    }
  } catch (error) {
    console.error('Error creating account:', error);
    alert("An error occurred, please try again later");
  }
};
  useEffect(() => { 
    document.body.style.backgroundColor = '#e6f1fc';
    document.body.style.width = '100%'; 
    document.body.style.minHeight = '100%'; 
   
    document.body.style.fontFamily='Inter , sans-serif';
  
    return () => {
        document.body.style.backgroundColor = '#e6f1fc';
    };
  }, []);
  return (
    <div className='tiger' style={{backgroundColor:"#e6f1fc"}}>  
      <div className='head'>
          <header>
           <img src={Signlogo} style={{marginTop:"20px",marginLeft:"29px"}} height="100px" width="400px"alt =""/>
           </header>
             </div>
  <div class="IJDIDEE" style={{backgroundColor:"#e6f1fc"}}> 
    <div className='tec2'>
    <form >
      <center><h2>SIGN UP NOW</h2></center>
      <p><span className='ciju'> Use the form below to create your account.</span> </p>
      <br></br>
      <label htmlFor='compnay_name'></label>
      <input type="text"  placeholder="Employee name" required  onChange={(e)=>{setCompanyname(e.target.value)}} autocomplete="off" classname="form__input" id="companyname" />
       <br></br> <br></br>
      <label htmlFor='mobile'></label>
      <input type="tel" placeholder="Contact Number "     autocomplete="off"  onChange={(e)=>{setMobile(e.target.value)}} required classname="form__input" id="mobile" />
      <br></br> <br></br>
      <label htmlFor='employees'></label>
     
      <input type="text" placeholder="Enter your Department"  onChange={(e)=>{setEmployees(e.target.value)}} autocomplete="off" required classname="form__input" id="employees" />
      <br></br>
      <br></br>
      <label htmlFor='company_email'></label>
      <input type="text"  
          placeholder="Employee Email" autocomplete="off"  onChange={(e)=>{setBusinessEmail(e.target.value)}}  required classname="form__input" id="businessemail" />
       <br></br> <br></br>
      <label htmlFor='Password'></label>
      <input type="text"
           placeholder="Password" required autocomplete="off"  onChange={(e)=>{setPassword(e.target.value)}}  classname="form__input" id="password" />
      <br></br> <br></br>
      <label htmlFor='company_address'></label>
      <input type="text"
          placeholder="Employee address" autocomplete="off"  onChange={(e)=>{setCompanyAddress(e.target.value)}}  required classname="form__input" id="address" />
       <br></br> <br></br>
      <label htmlFor='Enter your designation'></label>
      <input type="text" placeholder="Enter your designation"   autocomplete="off"  onChange={(e)=>{setcompanywebsite(e.target.value)}} required classname="form__input" id="companywebsite" />
      <br></br> <br></br>
  <input type="checkbox" required   id="flexCheckDefault" className='text'/>
  <label> I agree to these terms & conditions</label>
  <br></br>
       <Link to="/login"  className='b3'>Login</Link> <button type="button" onClick={sign} className='b4'> Sign Up </button>
       <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
        </form>
       </div>
   </div>
    <div style={{backgroundColor:"#e6f1fc",marginTop:"0px"}}>  
    </div>  
    </div>
  )
  }



 export default Sign










 
