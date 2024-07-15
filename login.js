// import React, { useState } from 'react';
// import './login.css';
// import Signlogo from './assets/company.png';
// import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// function Login({ onLogin }) {
//   const [emp_email, setBusinessEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emp_email)) {
//       window.alert("Please enter a valid Email Address.");
//       return;
//     }

//     const minPasswordLength = 8;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
//     if (!passwordRegex.test(password) || password.length < minPasswordLength) {
//       window.alert("Please enter a valid password (at least 8 characters long, with uppercase, lowercase, number, and special character).");
//       return;
//     }

//     try {
//       const response = await Axios.post("http://localhost:3015/login", {
//         emp_email: emp_email,
//         password: password
//       });

//       if (response.data.token) {
//         const { token, role } = response.data;
//         localStorage.setItem('token', token);
//         localStorage.setItem('emp_email', emp_email);
//         sessionStorage.setItem('userRole', role);

//         switch (role) {
//           case 'admin':
//             onLogin('admin');
//             navigate('/adminDash');
//             break;
//           case 'employee':
//           case 'manager':
//             onLogin(role);
//             navigate('/dashboard');
//             break;
//           default:
//             break;
//         }

//         window.alert("Account logged in successfully");
//       } else {
//         setMessage(response.data.message || 'Login failed.');
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'An error occurred.');
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div style={{ body: "#f9f9f9" }}>
//       <div className="lion" style={{ backgroundColor: "#e6f1fc" }}>
//         <header className='imageadd'>
//           <img src={Signlogo} height="100px" width="400px" alt="" />
//         </header>
//         <div className="cta-form"></div>
//         <div className='tec'>
//           <form className='frame' onSubmit={login}>
//             <center><h2>LOGIN IN NOW</h2></center>
//             <p><span className='ciju'> Use the form below to create your account.</span></p>
//             <br></br>
//             <input type="email" placeholder="Enter Email" autoComplete="off" onChange={(e) => setBusinessEmail(e.target.value)} className="input" id="businessemail" />
//             <br></br>
//             <input type="password" placeholder="Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} className="input" id="password" />
//             <br></br>

//             <Link className='b1' to="/sign">Signup</Link>
//             <button type="submit" className='b2'>Login</button>
//           </form>
//         </div>
//         <br></br>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState, useEffect } from 'react';
import './login.css';
import Signlogo from './assets/company.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { generateRandomString } from './pages/utils';

function Login({ onLogin }) {
  const [emp_email, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Rolead, setRoleAd] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation
  
  // useEffect(() => {
  //   const randomString = generateRandomString();
  //   if (!location.pathname.includes(randomString)) {
  //     navigate(`${location.pathname}-${randomString}`);
  //   }
  // }, []);
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function (_event) {
      window.history.pushState(null, '', window.location.href);
    }; 
    window.onbeforeunload = function () {
      return "Are you sure you want to leave?";
    };
  }, []);
 

  const login = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emp_email)) {
      window.alert("Please enter a valid Email Address.");
      return;
    }   
    const minPasswordLength = 8;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password) || password.length < minPasswordLength) {
      window.alert("Please enter a valid password.");
      return;
    } 
  
    // const roleRegex = /^(admin|employee|manager)$/;
    // if (!roleRegex.test(Rolead)) {
    //   window.alert("Please select a valid role.");
    //   return;
    // }
    
    try {
      const response = await Axios.post("http://localhost:3015/server", {
        emp_email: emp_email,
        password: password,
        Rolead: Rolead
      }); 
      if (response.data.message) {
        setToken(response.data.token);
        window.alert("Account logged in successfully"); 
        localStorage.setItem('emp_email', emp_email);  
        if (Rolead === 'admin') {
          onLogin('admin');
          navigate('/adminDash');
        } else if (Rolead === 'employee') {
          onLogin('employee');
          navigate('/dashboard');
        } else if (Rolead === 'manager') {
          onLogin('manager');
          // navigate(`/dashboard/\${generateRandomString}`);
          navigate('/dashboard')
        }
        sessionStorage.setItem('userRole', Rolead);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
      alert("Unauthorized username or password");
      navigate('/adminDash')
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#e6f1fc';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'none';
    document.body.style.fontFamily = 'Inter, sans-serif';
    return () => {
      document.body.style.backgroundColor = '#e6f1fc';
    };
  }, []);

  return (
    <div style={{ body: "#f9f9f9" }}>
      <div className="lion" style={{ backgroundColor: "#e6f1fc" }}>
        <header className='imageadd'>
          <img src={Signlogo} height="100px" width="400px" alt="" />
        </header>
        <div className="cta-form"></div>
        <div className='tec'>
          <form className='frame' onSubmit={login}>
            <center><h2>LOGIN IN NOW</h2></center>
            <p><span className='ciju'> Use the form below to create your account.</span></p>
            <br></br>
            <input type="email"  
            placeholder="Enter Email" autocomplete="off"   onChange={(e)=>{setBusinessEmail(e.target.value)}}  classname="input" id="businessemail" />
        <br></br> 
        <input type="password"
             placeholder="Password"   autocomplete="off" onChange={(e)=>{setPassword(e.target.value)}} classname="input" id="password" />
         <br></br> 
         <select  
             placeholder="Password"  style={{marginBottom:"30px",height:"50px",width:"400px",borderColor:"#e6f1fc",backgroundColor:"#b5d3d7",borderRadius:"10px"}} autocomplete="off" value={Rolead}onChange={(e)=>{setRoleAd(e.target.value)}} classname="input"  id="role" >
                  <option value="">select</option>  
                  <option value="admin">admin</option>        
                  <option value="employee">employee</option>    
                  <option value="manager">manager</option>      
             </select> 
            <Link className='b1' to="/sign">Signup</Link>
            <button type="submit"  className='b2'>Login</button>
          </form>
        </div>
        <br></br>
      </div>
    </div>
  );
} 

export default Login;

//original
// import React, { useState, useEffect } from 'react';
// import './login.css';
// import Signlogo from './assets/company.png';
// import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// function Login({onLogin}) {
//   const [emp_email, setBusinessEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [Rolead, setRoleAd] = useState('');
//   const [message, setMessage] = useState('');
//   const [token, setToken] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.history.pushState(null, '', window.location.href);
//     window.onpopstate = function (_event) {
//       window.history.pushState(null, '', window.location.href);
//     };

//     window.onbeforeunload = function () {
//       return "Are you sure you want to leave?";
//     };
//   }, []);

//   const login = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emp_email)) {
//       window.alert("Please enter a valid Email Address.");
//       return;
//     }
//     const minPasswordLength = 8;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
//     if (!passwordRegex.test(password) || password.length < minPasswordLength) {
//       window.alert("Please enter a valid password.");
//       return;
//     } 
    
//       try {
//         const response = await Axios.post("http://localhost:3015/server", {
//           emp_email: emp_email,
//           password: password,
//           Rolead: Rolead
//         }); 
//         if (response.data.message) {
//           setToken(response.data.token);
//           window.alert("Account logged in successfully"); 
//           if (Rolead === 'admin') {
//             onLogin('admin');
//             navigate('/adminDash');
//           } else if (Rolead === 'employee') {
//             onLogin('employee');
//             navigate('/dashboard');
//           }   
//            else if (Rolead === 'manager') {
//             onLogin('manager');
//             navigate('/dashboard');
//           }    
//           sessionStorage.setItem('userRole', Rolead);
//         }
//       } catch (error) {
//         setMessage(error.response?.data?.message || 'An error occurred.');
//         alert("Unauthorized username or password");
//         console.error("Error during login:", error);
//       }
//     }; 
//   useEffect(() => {
//     document.body.style.backgroundColor = '#e6f1fc';
//     document.body.style.width = '100%';
//     document.body.style.height = '100%';
//     document.body.style.overflow = 'none';
//     document.body.style.fontFamily = 'Inter, sans-serif';
//     return () => {
//       document.body.style.backgroundColor = '#e6f1fc';
//     };
//   }, []);
//   return (
// <div style={{ body: "#f9f9f9" }}>
//          <div className="lion" style={{ backgroundColor: "#e6f1fc" }}>
//         <header className='imageadd'>
//           <img src={Signlogo} height="100px" width="400px" alt="" />
//         </header>
//         <div class="cta-form"></div>
//         <div className='tec'>
//           <form className='frame' onSubmit={login}>
//             <center><h2>LOGIN IN NOW</h2></center>
//             <p><span className='ciju'> Use the form below to create your account.</span></p>
//             <br></br>
//             <input type="text"  
//             placeholder="Business Email" autocomplete="off" required onChange={(e)=>{setBusinessEmail(e.target.value)}}  classname="input" id="businessemail" />
//         <br></br> 
//         <input type="text"
//              placeholder="Password" required autocomplete="off" onChange={(e)=>{setPassword(e.target.value)}} classname="input" id="password" />
//          <br></br> 
//           <select  
//              placeholder="Password"  style={{marginBottom:"30px",height:"50px",width:"400px",borderColor:"#e6f1fc",backgroundColor:"#b5d3d7",borderRadius:"10px"}} autocomplete="off" value={Rolead}onChange={(e)=>{setRoleAd(e.target.value)}} classname="input"  id="role" >
//                   <option value="">select</option>  
//                   <option value="admin">admin</option>        
//                   <option value="employee">employee</option>    
//                   <option value="manager">manager</option>      
//              </select> 
//                <Link className='b1' to="/sign">Signup</Link>
//             <button type="submit" className='b2'>Login</button>
//           </form>
//         </div>
//         <br></br>
//       </div>
//     </div>
//   );
// } 
// export default Login;
 



// import React, { useState, useEffect } from 'react';
// import './login.css';
// import Signlogo from './assets/company.png';
// import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// function Login({ onLogin }) {
//   const [emp_email, setBusinessEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [Rolead, setRoleAd] = useState('');
//   const [token, setToken] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.history.pushState(null, '', window.location.href);
//     window.onpopstate = () => {
//       window.history.pushState(null, '', window.location.href);
//     };

//     window.onbeforeunload = () => {
//       return "Are you sure you want to leave?";
//     };
//   }, []);

//   const login = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emp_email)) {
//       window.alert("Please enter a valid Email Address.");
//       return;
//     }
//     const minPasswordLength = 8;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
//     if (!passwordRegex.test(password) || password.length < minPasswordLength) {
//       window.alert("Please enter a valid password.");
//       return;
//     }

//     try {
//       const response = await Axios.post("http://localhost:3015/server", {
//         emp_email,
//         password,
//         Rolead,
//       });

//       if (response.data.message === "Login successful") {
//         setToken(response.data.token);
//         window.alert("Account logged in successfully");
//         sessionStorage.setItem('userRole', Rolead);
//         localStorage.setItem('token', response.data.token);

//         if (Rolead === 'admin') {
//           onLogin('admin');
//           navigate('/adminDash');
//         } else if (Rolead === 'employee') {
//           onLogin('employee');
//           navigate('/dashboard');
//         } else if (Rolead === 'manager') {
//           onLogin('manager');
//           navigate('/dashboard');
//         }
//       } else {
//         setMessage(response.data.message);
//         alert(response.data.message || "Unauthorized username or password");
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'An error occurred.');
//       alert("Unauthorized username or password");
//       console.error("Error during login:", error);
//     }
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = '#e6f1fc';
//     document.body.style.width = '100%';
//     document.body.style.height = '100%';
//     document.body.style.overflow = 'none';
//     document.body.style.fontFamily = 'Inter, sans-serif';
//     return () => {
//       document.body.style.backgroundColor = '#e6f1fc';
//     };
//   }, []);

//   return (
//     <div style={{ body: "#f9f9f9" }}>
//       <div className="lion" style={{ backgroundColor: "#e6f1fc" }}>
//         <header className='imageadd'>
//           <img src={Signlogo} height="100px" width="400px" alt="" />
//         </header>
//         <div class="cta-form"></div>
//         <div className='tec'>
//           <form className='frame' onSubmit={login}>
//             <center><h2>LOGIN NOW</h2></center>
//             <p><span className='ciju'> Use the form below to log into your account.</span></p>
//             <br></br>
//             <input type="text"
//               placeholder="Business Email" autoComplete="off" required onChange={(e) => setBusinessEmail(e.target.value)} className="input" id="businessemail" />
//             <br></br>
//             <input type="password"
//               placeholder="Password" required autoComplete="off" onChange={(e) => setPassword(e.target.value)} className="input" id="password" />
//             <br></br>
//             <select
//               placeholder="Role" style={{ marginBottom: "30px", height: "50px", width: "400px", borderColor: "#e6f1fc", backgroundColor: "#b5d3d7", borderRadius: "10px" }}
//               autoComplete="off" value={Rolead} onChange={(e) => setRoleAd(e.target.value)} className="input" id="role">
//               <option value="">select</option>
//               <option value="admin">admin</option>
//               <option value="employee">employee</option>
//               <option value="manager">manager</option>
//             </select>
//             <Link className='b1' to="/sign">Signup</Link>
//             <button type="submit" className='b2'>Login</button>
//           </form>
//           {message && <div className="error-message">{message}</div>}
//         </div>
//         <br></br>
//       </div>
//     </div>
//   );
// }
// export default Login;