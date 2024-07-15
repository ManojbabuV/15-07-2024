// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './styles.css'
// import 'react-datetime/css/react-datetime.css';

// function AttendanceForm() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [employee_id, setEmployeeID] = useState("");
//   const [employee, setEmployee] = useState("");
//   const [checki, setChecki] = useState('');
//   const [checko, setChecko] = useState('');
//   const [atten_status, setStatus] = useState('');
//   const navigate = useNavigate();

//   const isValidDateTime = (dateTimeStr) => {
//     const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):([0-5]\d)$/;
//     if (!dateTimeRegex.test(dateTimeStr)) {
//       return false;
//     }

//     const date = new Date(dateTimeStr);
//     const today = new Date();
 
//     if (
//       date.getFullYear() !== today.getFullYear() ||
//       date.getMonth() !== today.getMonth() ||
//       date.getDate() !== today.getDate()
//     ) {
//       return false;
//     } 
//     return true;
//   };

//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//       inputField.style.border = '1px solid red';
//       inputField.focus();
//       alert(errorMessage);
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const send = async (e) => {
//     e.preventDefault();

//     if (!validateInput(/^[0-9]{4}$/, employee_id, 'employee-id', 'Please enter a valid 4-digit employee ID')) return;
//     if (!validateInput(/^[a-zA-Z\s]+$/, employee, 'employee-position', 'Please select your employee position')) return;
//     if (!isValidDateTime(checki,'checki','"Enter a valid check-in date and time (today only)')) return; 
//     if (!isValidDateTime(checko,'checko','Enter a valid check-out date and time (today only)')) return
//     if (!validateInput(/^[a-zA-Z\s]+$/, atten_status, 'atten_status', 'Please select your employee position')) return;

//     const formData = {
//       employee_id,
//       employee,
//       checki,
//       checko,
//       atten_status,
//     };

//     try {
//       // const response = await Axios.post('http://192.168.1.151:3015/attend', formData);
//        const response = await Axios.post('http://localhost:3015/attend', formData);
//       if (response.data[0]) {
//         window.alert("Attendance recorded successfully");
//         navigate('/attendance');
//       } else {
//         window.alert("Failed to record attendance. Please try again.");
//       }
//     } catch (error) {
//       console.error('Error recording attendance:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
    
//         <form style={{marginTop:"80px"}}className="leave-form">
//         <h2 style={{marginLeft:"113px", color:"#6ca2ac"}}>Attendance Form</h2>
//         <div className='form-group'>   <label style={{ marginLeft: "20px",fontWeight:"0px" }} htmlFor="employee-id">Employee ID</label>
//           <input required type="text" placeholder="Enter your ID" style={{marginLeft:"20px",marginTop:"20px"}}onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />
//         </div><div className='form-group'>  
//           <label style={{ marginLeft: "20px" ,height:"30px",width:"110px"}} htmlFor="employee-position">Employee Position</label>
//           <select style={{ marginLeft: "11px" }}required onChange={(e) => setEmployee(e.target.value)} className="collect" id="employee-position">
//             <option value="">Select Position</option>
//             <option value="Office employee">Office Employee</option>
//             <option value="Onsite employee">Onsite Employee</option>
//           </select>   </div><div className='form-group'> 
//           <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-in-time">Check IN</label>
//           <input
//             type="datetime-local"
//             id='checki'
//             style={{ marginLeft: "48px" }}
          
//             className='collect'
//             onChange={(e) => setChecki(e.target.value)}
//           />   </div><div className='form-group'> 
//           <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-out-time">Checkout</label>
//           <input
//             type="datetime-local"
//             className='collect'
         
//             style={{ marginLeft: "41px" }}
//             id='checko'
//             onChange={(e) => setChecko(e.target.value)}
//           />   </div> 
//           <div className='form-group'> 
//           <label style={{ marginLeft: "20px", color: "black",width:"80px" }} htmlFor="check-out-time">Attendance status</label>
//         <select className='collect'
            
//             style={{ marginLeft: "43px" }}
//             id='atten_status' 
//             onChange={(e) => setStatus(e.target.value)}>
//           <option value="">Select status</option>
//           <option value="Present">Present</option>
//           <option value="Absent">Absent</option>
//           <option value="Leave">excuse</option>
//         </select>
//           {/* <input
//             type="text"
//             className='collect'
//             value={checko}
//             style={{ marginLeft: "40px" }}
//             id='atten_status' 
//             onChange={(e) => setStatus(e.target.value)}/> */}
//              </div>
//           <button type="submit" onClick={send} className="button-27" style={{ marginLeft: "155px", marginTop: "20px" }}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AttendanceForm;






// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './styles.css';

// function AttendanceForm() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [employee_id, setEmployeeID] = useState("");
//   const [employee, setEmployee] = useState("");
//   const [checki, setChecki] = useState('');
//   const [checko, setChecko] = useState('');
//   const [atten_status, setStatus] = useState('');
//   const navigate = useNavigate();

//   const isValidDateTime = (dateTimeStr) => {
//     const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):([0-5]\d)$/;
//     if (!dateTimeRegex.test(dateTimeStr)) {
//       return false;
//     }
  
//     const date = new Date(dateTimeStr);
//     const today = new Date();
  
//     if (
//       date.getFullYear() !== today.getFullYear() ||
//       date.getMonth() !== today.getMonth() ||
//       date.getDate() !== today.getDate()
//     ) {
//       return false;
//     }
//     return true;
//   };

//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//       inputField.style.border = '1px solid red';
//       inputField.focus();
//       alert(errorMessage);
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const send = async (e) => {
//     e.preventDefault();

//     if (!validateInput(/^\d{4}$/, employee_id, 'employee-id', 'Please enter a valid 4-digit employee ID')) return;
//     if (!validateInput(/^[a-zA-Z\s]+$/, employee, 'employee-position', 'Please select your employee position')) return;
//     if (!isValidDateTime(checki)) return;
//     if (!isValidDateTime(checko)) return;
//     if (!validateInput(/^[a-zA-Z\s]+$/, atten_status, 'atten_status', 'Please select attendance status')) return;
//     const formData = {
//       employee_id,
//       employee,
//       checki,
//       checko,
//       atten_status,
//     };

//     try {
//       const response = await Axios.post('http://localhost:3015/attend', formData);
//       if (response.data[0]) {
//         window.alert("Attendance recorded successfully");
//         navigate('/attendance');
//       } else {
//         window.alert("Failed to record attendance. Please try again.");
//       }
//     } catch (error) {
//       console.error('Error recording attendance:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleAttendanceStatusChange = (e) => {
//     const { value } = e.target;
//     setStatus(value);

//     // Set check-in and check-out times if Absent is selected
//     if (value === 'Absent') {
//       const now = new Date();
//       const isoString = now.toISOString().slice(0, 16);
//       setChecki(isoString);
//       setChecko(isoString);
//     } else {
//       setChecki('');
//       setChecko('');
//     }
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form style={{ marginTop: "80px" }} className="leave-form">
//           <h2 style={{ marginLeft: "113px", color: "#6ca2ac" }}>Attendance Form</h2>
//           <div className='form-group'>
//             <label style={{ marginLeft: "20px", fontWeight: "0px" }} htmlFor="employee-id">Employee ID</label>
//             <input required type="text" placeholder="Enter your ID" style={{ marginLeft: "20px", marginTop: "20px" }} onChange={(e) => setEmployeeID(e.target.value)} id="employee-id" className="collect" />
//           </div>
//           <div className='form-group'>
//             <label style={{ marginLeft: "20px", height: "30px", width: "110px" }} htmlFor="employee-position">Employee Position</label>
//             <select style={{ marginLeft: "11px" }} required onChange={(e) => setEmployee(e.target.value)} className="collect" id="employee-position">
//               <option value="">Select Position</option>
//               <option value="Office employee">Office Employee</option>
//               <option value="Onsite employee">Onsite Employee</option>
//             </select>
//           </div>
//           <div className='form-group'>
//             <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-in-time">Check IN</label>
//             <input
//               type="datetime-local"
//               id='checki'
//               style={{ marginLeft: "48px" }}
//               className='collect'
//               value={checki}
//               onChange={(e) => setChecki(e.target.value)}
//               disabled={atten_status === 'Absent'}  
//             />
//           </div>
//           <div className='form-group'>
//             <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-out-time">Checkout</label>
//             <input
//               type="datetime-local"
//               className='collect'
//               style={{ marginLeft: "41px" }}
//               id='checko'
//               value={checko}
//               onChange={(e) => setChecko(e.target.value)}
//               disabled={atten_status === 'Absent'}  
//             />
//           </div>
//           <div className='form-group'>
//             <label style={{ marginLeft: "20px", color: "black", width: "80px" }} htmlFor="check-out-time">Attendance status</label>
//             <select className='collect'
//               style={{ marginLeft: "43px" }}
//               id='atten_status'
//               onChange={handleAttendanceStatusChange}>
//               <option value="">Select status</option>
//               <option value="Present">Present</option>
//               <option value="Absent">Absent</option>
//               <option value="Leave">Excuse</option>
//             </select>
//           </div>
//           <button type="submit" onClick={send} className="button-27" style={{ marginLeft: "155px", marginTop: "20px" }}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AttendanceForm;




import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function AttendanceForm() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employee_id, setEmployeeId] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [employee, setEmployee] = useState('');
  const [checki, setChecki] = useState('');
  const [checko, setChecko] = useState('');
  const [error, setError] = useState('');
  const [atten_status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const isValidDateTime = (dateTimeStr) => {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):([0-5]\d)$/;
    if (!dateTimeRegex.test(dateTimeStr)) {
      return false;
    }

    const date = new Date(dateTimeStr);
    const today = new Date();

    if (
      date.getFullYear() !== today.getFullYear() ||
      date.getMonth() !== today.getMonth() ||
      date.getDate() !== today.getDate()
    ) {
      return false;
    }
    return true;
  };

  const validateInput = (regex, value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!regex.test(value)) {
      inputField.style.border = '1px solid red';
      inputField.focus();
      alert(errorMessage);
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const send = async (e) => {
    e.preventDefault();

    if (!validateInput(/^\d{4}$/, employee_id, 'employee-id', 'Please enter a valid 4-digit employee ID')) return;
    if (!validateInput(/^[a-zA-Z\s]+$/, employee, 'employee-position', 'Please select your employee position')) return;
    if (!isValidDateTime(checki)) return;
    if (!isValidDateTime(checko)) return;
    if (!validateInput(/^[a-zA-Z\s]+$/, atten_status, 'atten_status', 'Please select attendance status')) return;

    const formData = {
      employee_id,
      employee,
      checki,
      checko,
      atten_status,
    };

    try {
      const response = await Axios.post('http://localhost:3015/attend', formData);
      if (response.data[0]) {
        window.alert("Attendance recorded successfully");
        navigate('/attendance');
      } else {
        window.alert("Failed to record attendance. Please try again.");
      }
    } catch (error) {
      console.error('Error recording attendance:', error);
      alert("An error occurred, please try again later");
    }
  };

  const handleAttendanceStatusChange = (e) => {
    const { value } = e.target;
    setStatus(value);

    // Set check-in and check-out times if Absent is selected
    if (value === 'Absent') {
      const now = new Date();
      const isoString = now.toISOString().slice(0, 16);
      setChecki(isoString);
      setChecko(isoString);
    } else {
      setChecki('');
      setChecko('');
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('emp_email');
    if (storedEmail) {
      setEmail(storedEmail);
      fetchUserInfo(storedEmail);
    }
  }, []);

  const fetchUserInfo = async (empEmail) => {
    try {
      const response = await Axios.get(`http://localhost:3015/getEmp?emp_email=${empEmail}`);
      if (response.data.userinfo) {
        const { userinfo } = response.data;
        setUserInfo(userinfo);
        setEmployeeId(userinfo.employee_id);
        localStorage.setItem('userInfo', JSON.stringify(userinfo));
        setError(null);
      } else {
        setError('User not found');
        setUserInfo(null);
        localStorage.removeItem('userInfo');
      }
    } catch (error) {
      setError('Error fetching user information');
      setUserInfo(null);
      localStorage.removeItem('userInfo');
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form style={{ marginTop: "80px" }} className="leave-form" onSubmit={send}>
          <h2 style={{ marginLeft: "113px", color: "#6ca2ac" }}>Attendance Form</h2>
          <div className='form-group'>
            <label style={{ marginLeft: "20px", fontWeight: "0px" }} htmlFor="employee-id">Employee ID</label>
            <input required type="text" placeholder="Enter your ID" value={employee_id} style={{ marginLeft: "20px", marginTop: "20px" }} id="employee-id" className="collect" readOnly />
          </div>
          <div className='form-group'>
            <label style={{ marginLeft: "20px", height: "30px", width: "110px" }} htmlFor="employee-position">Employee Position</label>
            <select style={{ marginLeft: "11px" }} onChange={(e) => setEmployee(e.target.value)} className="collect" id="employee-position">
              <option value="">Select Position</option>
              <option value="Office employee">Office Employee</option>
              <option value="Onsite employee">Onsite Employee</option>
            </select>
          </div>
          <div className='form-group'>
            <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-in-time">Check IN</label>
            <input
              type="datetime-local"
              id='checki'
              style={{ marginLeft: "48px" }}
              className='collect'
              value={checki}
              onChange={(e) => setChecki(e.target.value)}
              disabled={atten_status === 'Absent'} // Disable if status is Absent
            />
          </div>
          <div className='form-group'>
            <label style={{ marginLeft: "20px", color: "black" }} htmlFor="check-out-time">Checkout</label>
            <input
              type="datetime-local"
              className='collect'
              style={{ marginLeft: "41px" }}
              id='checko'
              value={checko}
              onChange={(e) => setChecko(e.target.value)}
              disabled={atten_status === 'Absent'}  
            />
          </div>
          <div className='form-group'>
            <label style={{ marginLeft: "20px", color: "black", width: "80px" }} htmlFor="check-out-time">Attendance status</label>
            <select className='collect'
              style={{ marginLeft: "43px" }}
              id='atten_status'
              onChange={handleAttendanceStatusChange}>
              <option value="">Select status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Leave">Excuse</option>
            </select>
          </div>
          <button type="submit" className="button-27" style={{ marginLeft: "155px", marginTop: "20px" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AttendanceForm;
