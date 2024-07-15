//original code:
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Leave = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState('');
  const [leave_type, setLeaveType] = useState('');
  const [employee_id, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  const [start_date, setStart] = useState('');
  const [end_date, setEnd] = useState('');
  const [status, setStatus] = useState('');
  const [lev_reason, setLevReason] = useState('');
  const [lev_approve, setLevApprove] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const validateInput = (regex, value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!regex.test(value)) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const validateInput2 = (regex, value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!regex.test(value)) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const validateSelectInput = (value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!value) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const nameRegex = /^[a-zA-Z\s]+$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const validations = [
    { regex: nameRegex, value: leave_type, id: 'leave_type', errorMessage: 'Select your leave type' },
    { regex: dateRegex, value: start_date, id: 'start_date', errorMessage: 'Please enter a valid start date (YYYY-MM-DD)' },
    { regex: dateRegex, value: end_date, id: 'end_date', errorMessage: 'Please enter a valid end date (YYYY-MM-DD)' },
    { regex: nameRegex, value: lev_reason, id: 'lev_reason', errorMessage: 'Enter a leave reason' }
  ];

  const send = async (e) => {
    e.preventDefault();

    for (const { regex, value, id, errorMessage } of validations) {
      if (!validateInput(regex, value, id, errorMessage)) return;
    }
    if (!validateSelectInput(leave_type, 'leave_type', 'Select your leave type')) return;

    if (!validateInput(dateRegex, start_date, 'start_date', 'Please enter a valid start date (YYYY-MM-DD)')) return;
    if (!validateInput(dateRegex, end_date, 'end_date', 'Please enter a valid end date (YYYY-MM-DD)')) return;
    if (!validateInput(nameRegex, lev_reason, 'lev_reason', 'Enter a leave reason')) return;
    if (!validateInput2(nameRegex, lev_approve, 'lev_approve', 'Enter leave approver name')) return;

    try {
      const response = await Axios.post('http://localhost:3015/unland', {
        leave_type,
        employee_id,
        start_date,
        end_date,
        lev_reason,
        lev_approve,
      });

      if (response.data[0]) {
        window.alert('Account created successfully');
        navigate('/leaveinfo');
        return;
      } else {
        setStatus(response.data);
        window.alert('Your account has already been created.');
        return;
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('An error occurred, please try again later');
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return `${year}-${month}-${day}`;
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
        setEmployeeId(userinfo.employee_id); // Set employee_id state
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

  return (
    // <div>
    //   <h1>User Information</h1>
    //   {error && <p>{error}</p>}
    //   {userInfo && (
    //     <div>
    //       <p><strong>Name:</strong> {userInfo.employee_name}</p>
    //       <p><strong>Father's Name:</strong> {userInfo.father_name}</p>
    //       <p><strong>Employee ID:</strong> {userInfo.employee_id}</p>
    //     </div>
    //   )}
        <div>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <form className="leave-form" onSubmit={send}>
            <h2 style={{ marginLeft: '160px', color: '#6ca2ac' }}>Leave Form</h2>
            <div className="form-group">
              <label style={{ width: '90px' }} htmlFor="leave_type">Leave type</label>
              <select
                style={{ marginLeft: '60px' }}
                id="leave_type"
                required
                onChange={(e) => setLeaveType(e.target.value)}
                className="collect"
              >
                <option value="">Select leave</option>
                <option value="Sick leave">Sick leave</option>
                <option value="Casual leave">Casual leave</option>
                <option value="Paid leave">Paid leave</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{ marginLeft: '30px' }} htmlFor="employee_id">Employee ID</label>
              <input
                style={{ marginLeft: '50px' }}
                id="employee_id"
                type="text"
                value={employee_id}
                disabled
                className="collect"
              />
            </div>
            <div className="form-group">
              <label style={{ width: '100px', fontWeight: 'none' }} htmlFor="start_date">Leave start date</label>
              <input
                style={{ marginLeft: '50px' }}
                type="date"
                min={getCurrentDate()}
                id="start_date"
                onChange={(e) => setStart(e.target.value)}
                required
                className="collect"
              />
            </div>
            <div className="form-group">
              <label style={{ width: '90px' }} htmlFor="end_date">Leave end date</label>
              <input
                style={{ marginLeft: '60px' }}
                type="date"
                min={getCurrentDate()}
                id="end_date"
                onChange={(e) => setEnd(e.target.value)}
                required
                className="collect"
              />
            </div>
            <div className="form-group">
              <label style={{ width: '120px' }} htmlFor="lev_reason">Leave Reason</label>
              <input
                style={{ marginLeft: '30px' }}
                type="text"
                id="lev_reason"
                placeholder="Enter leave reason"
                required
                onChange={(e) => setLevReason(e.target.value)}
                className="collect"
              />
            </div>
            <div className="form-group">
              <label style={{ width: '140px' }} htmlFor="lev_approve">Leave Approved by</label>
              <select
                style={{ marginLeft: '10px' }}
                id="lev_approve"
                required
                onChange={(e) => setLevApprove(e.target.value)}
                className="collect"
              >
                <option value="">Select HR name</option>
                <option value="Balaji">Balaji</option>
                <option value="Rahul">Rahul</option>
              </select>
            </div>
            <button type="submit" style={{ marginLeft: '147px', marginTop: '20px' }} className="button-27">Submit</button>
          </form>
        </div>
      </div>
 
  );
};

export default Leave;



// import React, { useEffect, useReducer, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Leave() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [status, setStatus] = useState(""); 
  // const [leave_type, setLeaveType] = useState("");
  // const [employeeId, setEmployeeID] = useState("");
  // const [error, setError] = useState("");
  // const [start_date, setStart] = useState("");
  // const [end_date, setEnd] = useState("");
  // const [lev_reason, setLevReason] = useState("");
  // const [lev_approve, setLevApprove] = useState("");
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const navigate = useNavigate(); 
//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green'; 
//         return true;
//     }
// }; 
// // const [employeeId, setEmployeeId] = useState(null);
// // const [error, setError] = useState(null);

// const initialState = {
//   employeeId: null,
//   error: ''
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_EMPLOYEE_ID':
//       return { ...state, employeeId: action.payload };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };
// useEffect(() => {
//   const fetchEmployeeId = async () => {
//     const empEmail = localStorage.getItem('emp_email'); 
//     if (empEmail) {
//       try {
//         const response = await Axios.get('http://localhost:3015/getEmployeeId', {
//           params: { emp_email: empEmail }
//         }); 
//         if (response.data.employee_id) {
//           dispatch({ type: 'SET_EMPLOYEE_ID', payload: response.data.employee_id });
//         } else {
//           dispatch({ type: 'SET_ERROR', payload: 'Employee not found or email mismatch' });
//         }
//       } catch (error) {
//         console.error('Error fetching employee ID:', error);
//         dispatch({ type: 'SET_ERROR', payload: 'Error fetching employee ID. Please try again later.' });
//       }
//     } else {
//       dispatch({ type: 'SET_ERROR', payload: 'Employee email not found in local storage.' });
//     }
//   }; 
//   fetchEmployeeId();
// }, []);
// // useEffect(() => {
// //   const fetchEmployeeId = async () => {
// //     const empEmail = localStorage.getItem('emp_email'); 
// //     if (empEmail) {
// //       try {
// //         const response = await Axios.get('http://localhost:3015/getEmployeeId', {
// //           params: { emp_email: empEmail }
// //         }); 
// //         if (response.data.employee_id) {
// //           setEmployeeId(response.data.employee_id);
// //         } else {
// //           setError('Employee not found or email mismatch');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching employee ID:', error);
// //         setError('Error fetching employee ID. Please try again later.');
// //       }
// //     } else {
// //       setError('Employee email not found in local storage.');
// //     }
// //   }; 
// //   fetchEmployeeId();
// // }, []);
// const validateInput2 = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green'; 
//         return true;
//     }
// }; 
// const validateSelectInput = (value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!value) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green';
//         return true;
//     }
// };

// const nameRegex = /^[a-zA-Z\s]+$/;
// const employeeIdRegex = /^\d{4}$/; 
// const dateRegex = /^\d{4}-\d{2}-\d{2}$/;  
 
// const validations = [
//     { regex: nameRegex, value: leave_type, id: 'leave_type', errorMessage: 'Select your leave type' },
//     { regex: employeeIdRegex, value: employeeId, id: 'employee_id', errorMessage: 'Please enter a valid employee ID: it should be a 4-digit number' },
//     { regex: dateRegex, value: start_date, id: 'start_date', errorMessage: 'Please enter a valid start date (YYYY-MM-DD)' },
//     { regex: dateRegex, value: end_date, id: 'end_date', errorMessage: 'Please enter a valid end date (YYYY-MM-DD)' },
//     { regex: nameRegex, value: lev_reason, id: 'lev_reason', errorMessage: 'Enter a leave reason' }
// ];

// const send = async (e) => {
//     e.preventDefault();

//     for (const { regex, value, id, errorMessage } of validations) {
//         if (!validateInput(regex, value, id, errorMessage)) return;
//     } 
//     if (!validateSelectInput(leave_type, 'leave_type', 'Select your leave type')) return;
//     if (!validateInput(employeeIdRegex, employeeId, 'employee_id', 'Please enter a valid employee ID: it should be a 4-digit number')) return;
//     if (!validateInput(dateRegex, start_date, 'start_date', 'Please enter a valid start date (YYYY-MM-DD)')) return;
//     if (!validateInput(dateRegex, end_date, 'end_date', 'Please enter a valid end date (YYYY-MM-DD)')) return;
//     if (!validateInput(nameRegex, lev_reason, 'lev_reason', 'Enter a leave reason')) return;
//     if (!validateInput2(nameRegex, lev_approve, 'lev_approve', 'Enter leave approver name')) return; 
//     try {
//         const response = await Axios.post('http://localhost:3015/unland', {
//         // const response = await Axios.post('http://192.168.1.151:3015/unland', {
//             leave_type: leave_type,
//             employee_id: employeeId,
//             start_date: start_date,
//             end_date: end_date,
//             lev_reason: lev_reason,
//             lev_approve: lev_approve,
//         }); if(response.data[0]) {
//           window.alert("Account created successfully");
//             navigate('/leaveinfo');
//                 return;
//             } 
//              else {
//                 setStatus(response.data)
//                 window.alert("Your account has already been created."); 
//                 return; 
//           }
//         }
//              catch (error) {
//               console.error('Error creating account:', error);
//               alert("An error occurred, please try again later");
//             }
//           }; 
        //   useEffect(() => { 
        //     document.body.style.backgroundColor = 'white'; 
        //     return () => {
        //         document.body.style.backgroundColor = null;
        //     };
        // }, []);
        // const getCurrentDate = () => {
        //   const today = new Date();
        //   const year = today.getFullYear();
        //   let month = today.getMonth() + 1;
        //   let day = today.getDate();
        
        //   if (month < 10) {
        //     month = '0' + month;
        //   }
        //   if (day < 10) {
        //     day = '0' + day;
        //   } 
        //   return `${year}-${month}-${day}`;
        // }; 
//         useEffect(() => {
//           const fetchEmployeeId = async () => {
//             const empEmail = localStorage.getItem('emp_email'); 
//             if (empEmail) {
//               try {
//                 const response = await Axios.get('http://localhost:3015/getEmployeeId', {
//                   params: { emp_email: empEmail }
//                 }); 
//                 setEmployeeID(response.data.employee_id);  
//               } catch (error) {
//                 console.error('Error fetching employee ID:', error);
//                 setError('Error fetching employee ID. Please try again later.');
//               }
//             } else {
//               setError('Employee email not found in local storage.');
//             }
//           }; 
//           fetchEmployeeId();
//         }, []); 
     
//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form className="leave-form">
//         <h2  style={{marginLeft:"160px",color:"#6ca2ac"}}>Leave Form</h2>
//         {/* <label htmlFor="approver">Leave type by</label>
//           <input type="text" placeholder="Enter your leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" /> */}
// <div className='form-group'>
// <label style={{width:"90px"}} htmlFor="employee-id">Leave type</label>
// <div>
//       {error && <p>{error}</p>}
//       {employeeId ? <p>Employee ID: {employeeId}</p> : <p>Loading...</p>}
//     </div>
// <select  style={{marginLeft:"60px"}}id='leave_type' required onChange={(e) => setLeaveType(e.target.value)} className="collect">
//          <option   value="">Select leave</option>
//          <option   value="Sick leave">Sick leave</option>
//          <option   value='Casual leave'>Casual leave</option>
//          <option   value='Paid leave'>Paid leave</option>
//          </select> </div><div className='form-group'>
//           <label  style={{marginLeft:"30px"}}htmlFor="employee-id">Employee ID</label>
//           <input style={{marginLeft:"50px"}} id='employee_id' disabled value={employeeId} required type="text" placeholder="Enter your ID" className="collect" 
//           // onChange={(e) => setEmployeeID(e.target.value)}
//           />
//           </div><div className='form-group'>
//           <label  style={{width:"100px",fontWeight:"none"}}htmlFor="start-date">Leave start date</label>
//           <input style={{marginLeft:"50px"}} type="date" min={getCurrentDate()} id='start_date'  onChange={(e) => setStart(e.target.value)} required   className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"90px"}}htmlFor="end-date">Leave end date</label>
//           <input style={{marginLeft:"60px"}} type="date" min={getCurrentDate()} id ='end_date'onChange={(e) => setEnd(e.target.value)} required  className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"120px"}}htmlFor="leave-reason">Leave Reason</label>
//           <input style={{marginLeft:"30px"}} type="text" id='lev_reason' placeholder="Enter leave reason" required   onChange={(e) => setLevReason(e.target.value)}  className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"140px"}}htmlFor="approver">Leave Approved by</label>
//           <select style={{marginLeft:"10px"}} type="text" id='lev_approve' placeholder="Enter leave approver name"   required onChange={(e) => setLevApprove(e.target.value)}   className="collect" >
//             <option value="">Select HR name</option>
//             <option value="Balaji">Balaji</option>
//             <option value="Rahul">Rahul</option> 
//           </select>
//           </div> 
//           <button type="submit" onClick={send} style={{marginLeft:"147px",marginTop:"20px"}}className='button-27'>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// } 
// export default Leave;


 



















// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';

// function Leave() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [status, setStatus] = useState(""); 
//   const [leave_type, setLeaveType] = useState("");
//   const [employee_id, setEmployeeID] = useState("");
//   const [start_date, setStart] = useState("");
//   const [end_date, setEnd] = useState("");
//   const [lev_reason, setLevReason] = useState("");
//   const [lev_approve, setLevApprove] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const email = localStorage.getItem('emp_email');
//         if (!email) {
//           console.error('Email not found in localStorage');
//           return;
//         }
//         const response = await Axios.get(`http://localhost:3015/getEmployeeId?personal_email=${email}`);
//         setEmployeeID(response.data.employee_id);
//       } catch (error) {
//         console.error('Error fetching employee ID:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const validateSelectInput = (value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!value) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const nameRegex = /^[a-zA-Z\s]+$/;
//   const employeeIdRegex = /^\d{4}$/;
//   const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

//   const validations = [
//     { regex: nameRegex, value: leave_type, id: 'leave_type', errorMessage: 'Select your leave type' },
//     { regex: employeeIdRegex, value: employee_id, id: 'employee_id', errorMessage: 'Please enter a valid employee ID: it should be a 4-digit number' },
//     { regex: dateRegex, value: start_date, id: 'start_date', errorMessage: 'Please enter a valid start date (YYYY-MM-DD)' },
//     { regex: dateRegex, value: end_date, id: 'end_date', errorMessage: 'Please enter a valid end date (YYYY-MM-DD)' },
//     { regex: nameRegex, value: lev_reason, id: 'lev_reason', errorMessage: 'Enter a leave reason' }
//   ];

//   const send = async (e) => {
//     e.preventDefault();

//     for (const { regex, value, id, errorMessage } of validations) {
//       if (!validateInput(regex, value, id, errorMessage)) return;
//     }

//     if (!validateSelectInput(leave_type, 'leave_type', 'Select your leave type')) return;
//     if (!validateInput(employeeIdRegex, employee_id, 'employee_id', 'Please enter a valid employee ID: it should be a 4-digit number')) return;
//     if (!validateInput(dateRegex, start_date, 'start_date', 'Please enter a valid start date (YYYY-MM-DD)')) return;
//     if (!validateInput(dateRegex, end_date, 'end_date', 'Please enter a valid end date (YYYY-MM-DD)')) return;
//     if (!validateInput(nameRegex, lev_reason, 'lev_reason', 'Enter a leave reason')) return;
//     if (!validateInput(nameRegex, lev_approve, 'lev_approve', 'Enter leave approver name')) return;
//     try {
//       const response = await Axios.post('http://localhost:3015/unland', {
//         leave_type,
//         employee_id,
//         start_date,
//         end_date,
//         lev_reason,
//         lev_approve,
//       }); 
//       if (response.data[0]) {
//         window.alert("Leave request submitted successfully");
//         navigate('/leaveinfo');
//         return;
//       } else {
//         setStatus(response.data);
//         window.alert("Leave request already submitted.");
//         return;
//       }
//       } catch (error) {
//       console.error('Error submitting leave request:', error);
//       alert("An error occurred, please try again later");
//       }
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate(); 
//     if (month < 10) {
//       month = '0' + month;
//     }
//     if (day < 10) {
//       day = '0' + day;
//     }
//     return `${year}-${month}-${day}`;
//   }; 
//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form className="leave-form">
//           <h2 style={{ marginLeft: "160px", color: "#6ca2ac" }}>Leave Form</h2>
//           <div className='form-group'>
//             <label style={{ width: "90px" }} htmlFor="leave_type">Leave type</label>
//             <select style={{ marginLeft: "60px" }} id='leave_type' required onChange={(e) => setLeaveType(e.target.value)} className="collect">
//               <option value="">Select leave</option>
//               <option value="Sick leave">Sick leave</option>
//               <option value="Casual leave">Casual leave</option>
//               <option value="Paid leave">Paid leave</option>
//             </select>
//           </div>
//           <div className='form-group'>
//             <label style={{ marginLeft: "30px" }} htmlFor="employee_id">Employee ID</label>
//             <input style={{ marginLeft: "50px" }} id='employee_id' value={employee_id} required type="text" placeholder="Enter your ID" onChange={(e) => setEmployeeID(e.target.value)} className="collect" />
//           </div>
//           <div className='form-group'>
//             <label style={{ width: "100px", fontWeight: "none" }} htmlFor="start_date">Leave start date</label>
//             <input style={{ marginLeft: "50px" }} type="date" min={getCurrentDate()} id='start_date' onChange={(e) => setStart(e.target.value)} required className="collect" />
//           </div>
//           <div className='form-group'>
//             <label style={{ width: "90px" }} htmlFor="end_date">Leave end date</label>
//             <input style={{ marginLeft: "60px" }} type="date" min={getCurrentDate()} id='end_date' onChange={(e) => setEnd(e.target.value)} required className="collect" />
//           </div>
//           <div className='form-group'>
//             <label style={{ width: "90px" }} htmlFor="lev_reason">Leave reason</label>
//             <input style={{ marginLeft: "60px" }} type="text" id='lev_reason' value={lev_reason} onChange={(e) => setLevReason(e.target.value)} required placeholder="Enter your reason" className="collect" />
//           </div>
//           <div className='form-group'>
//             <label style={{ width: "90px" }} htmlFor="lev_approve">Leave approver</label>
//             <input style={{ marginLeft: "60px" }} type="text" id='lev_approve' value={lev_approve} onChange={(e) => setLevApprove(e.target.value)} required placeholder="Enter approver's name" className="collect" />
//           </div>
//           <button type="submit" className="submit-btn" onClick={send}>Submit</button>
//           {status && <p>{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Leave;


// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const UserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState(null);

//   const fetchUserInfo = async () => {
//     try {
//       const response = await Axios.get('http://localhost:3015/getEmployee', {
//         params: { emp_email: email },
//       });
//       setUserInfo(response.data.userinfo);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//       setError('Error fetching user info. Please try again later.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchUserInfo();
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter employee email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Fetch User Info</button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && (
//         <div>
//           <p><strong>Name:</strong> {userInfo.emp_name}</p>
//           <p><strong>Mobile:</strong> {userInfo.mobile}</p>
//           <p><strong>Department:</strong> {userInfo.department}</p>
//           <p><strong>Email:</strong> {userInfo.emp_email}</p>
//           <p><strong>Address:</strong> {userInfo.emp_address}</p>
//           <p><strong>Designation:</strong> {userInfo.emp_designation}</p>
//           <p><strong>Role:</strong> {userInfo.Rolead}</p>
//           <p><strong>Employee ID:</strong> {userInfo.employee_id}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;


// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const UserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('emp_email');
//     const storedUserInfo = localStorage.getItem('userInfo');

//     if (storedEmail && storedUserInfo) {
//       setEmail(storedEmail);
//       setUserInfo(JSON.parse(storedUserInfo));
//     }
//   }, []);

//   const fetchUserInfo = async(e) => {
    
//     try {
//       const response = await Axios.get('http://localhost:3015/getEmployeeId', {
//         params: { emp_email: email },
//       });

//       setUserInfo(response.data.userinfo);
//       setError(null);
 
//       localStorage.setItem('emp_email', email);
//       localStorage.setItem('userInfo', JSON.stringify(response.data.userinfo));
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//       setError('Error fetching user info. Please try again later.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchUserInfo();
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter employee email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Fetch User Info</button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && (
//         <div>
//           <p><strong>Name:</strong> {userInfo.emp_name}</p>
//           <p><strong>Mobile:</strong> {userInfo.mobile}</p>
//           <p><strong>Department:</strong> {userInfo.department}</p>
//           <p><strong>Email:</strong> {userInfo.emp_email}</p>
//           <p><strong>Address:</strong> {userInfo.emp_address}</p>
//           <p><strong>Designation:</strong> {userInfo.emp_designation}</p>
//           <p><strong>Role:</strong> {userInfo.Rolead}</p>
//           <p><strong>Employee ID:</strong> {userInfo.employee_id}</p>
//         </div>
//       )}
//     </div>
//   );
// }; 
// export default UserInfo;
 

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const UserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('emp_email');
//     const storedUserInfo = localStorage.getItem('userInfo');

//     if (storedEmail) {
//       setEmail(storedEmail);
//     }

//     if (storedUserInfo) {
//       setUserInfo(JSON.parse(storedUserInfo));
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await Axios.get(`http://localhost:3015/getEmp?emp_email=${email}`);

//       if (response.data.userinfo) {
//         const { userinfo } = response.data;
//         setUserInfo(userinfo);
//         localStorage.setItem('userInfo', JSON.stringify(userinfo));
//       } else {
//         setError('User not found');
//         setUserInfo(null);
//         localStorage.removeItem('userInfo');
//       }
//     } catch (error) {
//       setError('Error fetching user information');
//       setUserInfo(null);
//       localStorage.removeItem('userInfo');
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter employee email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Fetch User Info</button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && (
//         <div>
//           <p><strong>Name:</strong> {userInfo.emp_name}</p>
//           <p><strong>Mobile:</strong> {userInfo.mobile}</p>
//           <p><strong>Department:</strong> {userInfo.department}</p>
//           <p><strong>Email:</strong> {userInfo.emp_email}</p>
//           <p><strong>Address:</strong> {userInfo.emp_address}</p>
//           <p><strong>Designation:</strong> {userInfo.emp_designation}</p>
//           <p><strong>Role:</strong> {userInfo.role}</p> {/* Adjusted to match backend property name */}
//           <p><strong>Employee ID:</strong> {userInfo.emp_id}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;

 

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const UserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('emp_email');
//     const storedUserInfo = localStorage.getItem('userInfo');

//     if (storedEmail) {
//       setEmail(storedEmail);
//     }

//     if (storedUserInfo) {
//       setUserInfo(JSON.parse(storedUserInfo));
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await Axios.get(`http://localhost:3015/getEmp?emp_email=${email}`);

//       if (response.data.userinfo) {
//         const { userinfo } = response.data;
//         setUserInfo(userinfo);
//         localStorage.setItem('userInfo', JSON.stringify(userinfo));
//       } else {
//         setError('User not found');
//         setUserInfo(null);
//         localStorage.removeItem('userInfo');
//       }
//     } catch (error) {
//       setError('Error fetching user information');
//       setUserInfo(null);
//       localStorage.removeItem('userInfo');
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter employee email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Fetch User Info</button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && (
//         <div>
//           <p><strong>Name:</strong> {userInfo.employee_name}</p>
//           <p><strong>Mobile:</strong> {userInfo.father_name}</p>
//           <p><strong>Department:</strong> {userInfo.employee_id}</p>
//           <p><strong>Email:</strong> {userInfo.emp_email}</p>
//           <p><strong>Address:</strong> {userInfo.emp_address}</p>
//           <p><strong>Designation:</strong> {userInfo.emp_designation}</p>
//           <p><strong>Role:</strong> {userInfo.role}</p> {/* Adjusted to match backend property name */}
//           <p><strong>Employee ID:</strong> {userInfo.emp_id}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserInfo;




// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// const Leave = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [email, setEmail] = useState('');   
//   const [leave_type, setLeaveType] = useState("");
//   const [employee_id, setEmployeeId] = useState("");
//   const [error, setError] = useState("");
//   const [start_date, setStart] = useState("");
//   const [end_date, setEnd] = useState("");
//   const [status, setStatus] = useState(""); 
//   const [lev_reason, setLevReason] = useState("");
//   const [lev_approve, setLevApprove] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate(); 
//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green'; 
//         return true;
//     }
// }; 
// const validateInput2 = (regex, value, id, errorMessage) => {
//   const inputField = document.getElementById(id);
//   if (!regex.test(value)) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//   } else {
//       inputField.style.border = '1px solid green'; 
//       return true;
//   }
// }; 
// const validateSelectInput = (value, id, errorMessage) => {
//   const inputField = document.getElementById(id);
//   if (!value) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//   } else {
//       inputField.style.border = '1px solid green';
//       return true;
//   }
// };

// const nameRegex = /^[a-zA-Z\s]+$/; 
// const dateRegex = /^\d{4}-\d{2}-\d{2}$/;  
// const validations = [
//   { regex: nameRegex, value: leave_type, id: 'leave_type', errorMessage: 'Select your leave type' },
  
//   { regex: dateRegex, value: start_date, id: 'start_date', errorMessage: 'Please enter a valid start date (YYYY-MM-DD)' },
//   { regex: dateRegex, value: end_date, id: 'end_date', errorMessage: 'Please enter a valid end date (YYYY-MM-DD)' },
//   { regex: nameRegex, value: lev_reason, id: 'lev_reason', errorMessage: 'Enter a leave reason' }
// ];
// const send = async (e) => {
//   e.preventDefault();

//   for (const { regex, value, id, errorMessage } of validations) {
//       if (!validateInput(regex, value, id, errorMessage)) return;
//   } 
//   if (!validateSelectInput(leave_type, 'leave_type', 'Select your leave type')) return;
   
//   if (!validateInput(dateRegex, start_date, 'start_date', 'Please enter a valid start date (YYYY-MM-DD)')) return;
//   if (!validateInput(dateRegex, end_date, 'end_date', 'Please enter a valid end date (YYYY-MM-DD)')) return;
//   if (!validateInput(nameRegex, lev_reason, 'lev_reason', 'Enter a leave reason')) return;
//   if (!validateInput2(nameRegex, lev_approve, 'lev_approve', 'Enter leave approver name')) return; 
//   try {
//       const response = await Axios.post('http://localhost:3015/unland', {
//       // const response = await Axios.post('http://192.168.1.151:3015/unland', {
//           leave_type: leave_type,
//           employee_id: employee_id,
//           start_date: start_date,
//           end_date: end_date,
//           lev_reason: lev_reason,
//           lev_approve: lev_approve,
//       }); if(response.data[0]) {
//         window.alert("Account created successfully");
//           navigate('/leaveinfo');
//               return;
//           } 
//            else {
//               setStatus(response.data)
//               window.alert("Your account has already been created."); 
//               return; 
//         }
//       }
//            catch (error) {
//             console.error('Error creating account:', error);
//             alert("An error occurred, please try again later");
//           }
//         };
//         useEffect(() => { 
//           document.body.style.backgroundColor = 'white'; 
//           return () => {
//               document.body.style.backgroundColor = null;
//           };
//       }, []);
//       const getCurrentDate = () => {
//         const today = new Date();
//         const year = today.getFullYear();
//         let month = today.getMonth() + 1;
//         let day = today.getDate();
      
//         if (month < 10) {
//           month = '0' + month;
//         }
//         if (day < 10) {
//           day = '0' + day;
//         } 
//         return `${year}-${month}-${day}`;
//       }; 
//   useEffect(() => {
//     const storedEmail = localStorage.getItem('emp_email');

//     if (storedEmail) {
//       setEmail(storedEmail);
//       fetchUserInfo(storedEmail);
//     }
//   }, []);

//   const fetchUserInfo = async (empEmail) => {
//     try {
//       const response = await Axios.get(`http://localhost:3015/getEmp?emp_email=${empEmail}`);

//       if (response.data.userinfo) {
//         const { userinfo } = response.data;
//         setUserInfo(userinfo);
//         localStorage.setItem('userInfo', JSON.stringify(userinfo));
//         setError(null);
//       } else {
//         setError('User not found');
//         setUserInfo(null);
//         localStorage.removeItem('userInfo');
//       }
//     } catch (error) {
//       setError('Error fetching user information');
//       setUserInfo(null);
//       localStorage.removeItem('userInfo');
//       console.error('Error:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>User Information</h1>
//       {error && <p>{error}</p>}
//       {userInfo && (
//         <div>
//           <p><strong>Name:</strong> {userInfo.employee_name}</p>
//           <p><strong>Father's Name:</strong> {userInfo.father_name}</p>
//           <p><strong>Employee ID:</strong> {userInfo.employee_id}</p>
//           <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form className="leave-form">
//         <h2  style={{marginLeft:"160px",color:"#6ca2ac"}}>Leave Form</h2>
//         {/* <label htmlFor="approver">Leave type by</label>
//           <input type="text" placeholder="Enter your leave approver name"   required onChange={(e) => setLevApprove(e.target.value)} id="approver" className="collect" /> */}
// <div className='form-group'>
// <label style={{width:"90px"}} htmlFor="employee-id">Leave type</label>
 
// <select  style={{marginLeft:"60px"}}id='leave_type' required onChange={(e) => setLeaveType(e.target.value)} className="collect">
//          <option   value="">Select leave</option>
//          <option   value="Sick leave">Sick leave</option>
//          <option   value='Casual leave'>Casual leave</option>
//          <option   value='Paid leave'>Paid leave</option>
//          </select> </div><div className='form-group'>
//           <label  style={{marginLeft:"30px"}}htmlFor="employee-id">Employee ID</label>
//           <input style={{marginLeft:"50px"}} id='employee_id' disabled value={userInfo.employee_id}   type="text" placeholder="Enter your ID" className="collect" 
//           onChange={(e) => setEmployeeId(e.target.value)}
//           />
//           </div><div className='form-group'>
//           <label  style={{width:"100px",fontWeight:"none"}}htmlFor="start-date">Leave start date</label>
//           <input style={{marginLeft:"50px"}} type="date" min={getCurrentDate()} id='start_date'  onChange={(e) => setStart(e.target.value)} required   className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"90px"}}htmlFor="end-date">Leave end date</label>
//           <input style={{marginLeft:"60px"}} type="date" min={getCurrentDate()} id ='end_date'onChange={(e) => setEnd(e.target.value)} required  className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"120px"}}htmlFor="leave-reason">Leave Reason</label>
//           <input style={{marginLeft:"30px"}} type="text" id='lev_reason' placeholder="Enter leave reason" required   onChange={(e) => setLevReason(e.target.value)}  className="collect" />
//           </div><div className='form-group'>
//           <label  style={{width:"140px"}}htmlFor="approver">Leave Approved by</label>
//           <select style={{marginLeft:"10px"}} type="text" id='lev_approve' placeholder="Enter leave approver name"   required onChange={(e) => setLevApprove(e.target.value)}   className="collect" >
//             <option value="">Select HR name</option>
//             <option value="Balaji">Balaji</option>
//             <option value="Rahul">Rahul</option> 
//           </select>
//           </div> 
//           <button type="submit" onClick={send} style={{marginLeft:"147px",marginTop:"20px"}}className='button-27'>Submit</button>
//         </form>
//       </div>
//     </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Leave;






  // import React, { useState, useEffect } from 'react';
  // import Axios from 'axios';
  // import Sidebar from '../components/Sidebar';
  // import { useNavigate } from 'react-router-dom';

  // const Leave = () => {
  //   const [userInfo, setUserInfo] = useState(null);
  //   const [email, setEmail] = useState('');
  //   const [leave_type, setLeaveType] = useState('');
  //   const [employee_id, setEmployeeId] = useState('');
  //   const [error, setError] = useState('');
  //   const [start_date, setStart] = useState('');
  //   const [end_date, setEnd] = useState('');
  //   const [status, setStatus] = useState('');
  //   const [lev_reason, setLevReason] = useState('');
  //   const [lev_approve, setLevApprove] = useState('');
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //   const navigate = useNavigate();

  //   const validateInput = (regex, value, id, errorMessage) => {
  //     const inputField = document.getElementById(id);
  //     if (!regex.test(value)) {
  //       inputField.style.border = '1px solid red';
  //       alert(errorMessage);
  //       inputField.focus();
  //       return false;
  //     } else {
  //       inputField.style.border = '1px solid green';
  //       return true;
  //     }
  //   };

  //   const validateInput2 = (regex, value, id, errorMessage) => {
  //     const inputField = document.getElementById(id);
  //     if (!regex.test(value)) {
  //       inputField.style.border = '1px solid red';
  //       alert(errorMessage);
  //       inputField.focus();
  //       return false;
  //     } else {
  //       inputField.style.border = '1px solid green';
  //       return true;
  //     }
  //   };

  //   const validateSelectInput = (value, id, errorMessage) => {
  //     const inputField = document.getElementById(id);
  //     if (!value) {
  //       inputField.style.border = '1px solid red';
  //       alert(errorMessage);
  //       inputField.focus();
  //       return false;
  //     } else {
  //       inputField.style.border = '1px solid green';
  //       return true;
  //     }
  //   };

  //   const nameRegex = /^[a-zA-Z\s]+$/;
  //   const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  //   const validations = [
  //     { regex: nameRegex, value: leave_type, id: 'leave_type', errorMessage: 'Select your leave type' },
  //     { regex: dateRegex, value: start_date, id: 'start_date', errorMessage: 'Please enter a valid start date (YYYY-MM-DD)' },
  //     { regex: dateRegex, value: end_date, id: 'end_date', errorMessage: 'Please enter a valid end date (YYYY-MM-DD)' },
  //     { regex: nameRegex, value: lev_reason, id: 'lev_reason', errorMessage: 'Enter a leave reason' }
  //   ];

  //   const send = async (e) => {
  //     e.preventDefault();

  //     for (const { regex, value, id, errorMessage } of validations) {
  //       if (!validateInput(regex, value, id, errorMessage)) return;
  //     }
  //     if (!validateSelectInput(leave_type, 'leave_type', 'Select your leave type')) return;

  //     if (!validateInput(dateRegex, start_date, 'start_date', 'Please enter a valid start date (YYYY-MM-DD)')) return;
  //     if (!validateInput(dateRegex, end_date, 'end_date', 'Please enter a valid end date (YYYY-MM-DD)')) return;
  //     if (!validateInput(nameRegex, lev_reason, 'lev_reason', 'Enter a leave reason')) return;
  //     if (!validateInput2(nameRegex, lev_approve, 'lev_approve', 'Enter leave approver name')) return;

  //     try {
  //       const response = await Axios.post('http://localhost:3015/unland', {
  //         leave_type,
  //         employee_id,
  //         start_date,
  //         end_date,
  //         lev_reason,
  //         lev_approve,
  //       });

  //       if (response.data[0]) {
  //         window.alert('Account created successfully');
  //         navigate('/leaveinfo');
  //         return;
  //       } else {
  //         setStatus(response.data);
  //         window.alert('Your account has already been created.');
  //         return;
  //       }
  //     } catch (error) {
  //       console.error('Error creating account:', error);
  //       alert('An error occurred, please try again later');
  //     }
  //   };

  //   useEffect(() => {
  //     document.body.style.backgroundColor = 'white';
  //     return () => {
  //       document.body.style.backgroundColor = null;
  //     };
  //   }, []);

  //   const getCurrentDate = () => {
  //     const today = new Date();
  //     const year = today.getFullYear();
  //     let month = today.getMonth() + 1;
  //     let day = today.getDate();

  //     if (month < 10) {
  //       month = '0' + month;
  //     }
  //     if (day < 10) {
  //       day = '0' + day;
  //     }
  //     return `${year}-${month}-${day}`;
  //   };

  //   useEffect(() => {
  //     const storedEmail = localStorage.getItem('emp_email');

  //     if (storedEmail) {
  //       setEmail(storedEmail);
  //       fetchUserInfo(storedEmail);
  //     }
  //   }, []);

  //   const fetchUserInfo = async (empEmail) => {
  //     try {
  //       const response = await Axios.get(`http://localhost:3015/getEmp?emp_email=${empEmail}`);

  //       if (response.data.userinfo) {
  //         const { userinfo } = response.data;
  //         setUserInfo(userinfo);
  //         setEmployeeId(userinfo.employee_id); // Set employee_id state
  //         localStorage.setItem('userInfo', JSON.stringify(userinfo));
  //         setError(null);
  //       } else {
  //         setError('User not found');
  //         setUserInfo(null);
  //         localStorage.removeItem('userInfo');
  //       }
  //     } catch (error) {
  //       setError('Error fetching user information');
  //       setUserInfo(null);
  //       localStorage.removeItem('userInfo');
  //       console.error('Error:', error.message);
  //     }
  //   };

  //   return (
  //     <div>
  //       <h1>User Information</h1>
  //       {error && <p>{error}</p>}
  //       {userInfo && (
  //         <div>
  //           <p><strong>Name:</strong> {userInfo.employee_name}</p>
  //           <p><strong>Father's Name:</strong> {userInfo.father_name}</p>
  //           <p><strong>Employee ID:</strong> {userInfo.employee_id}</p>
  //         </div>
  //       )}
  //       <div>
  //         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
  //         <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
  //           <form className="leave-form" onSubmit={send}>
  //             <h2 style={{ marginLeft: '160px', color: '#6ca2ac' }}>Leave Form</h2>
  //             <div className="form-group">
  //               <label style={{ width: '90px' }} htmlFor="leave_type">Leave type</label>
  //               <select
  //                 style={{ marginLeft: '60px' }}
  //                 id="leave_type"
  //                 required
  //                 onChange={(e) => setLeaveType(e.target.value)}
  //                 className="collect"
  //               >
  //                 <option value="">Select leave</option>
  //                 <option value="Sick leave">Sick leave</option>
  //                 <option value="Casual leave">Casual leave</option>
  //                 <option value="Paid leave">Paid leave</option>
  //               </select>
  //             </div>
  //             <div className="form-group">
  //               <label style={{ marginLeft: '30px' }} htmlFor="employee_id">Employee ID</label>
  //               <input
  //                 style={{ marginLeft: '50px' }}
  //                 id="employee_id"
  //                 type="text"
  //                 value={employee_id}
  //                 disabled
  //                 className="collect"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label style={{ width: '100px', fontWeight: 'none' }} htmlFor="start_date">Leave start date</label>
  //               <input
  //                 style={{ marginLeft: '50px' }}
  //                 type="date"
  //                 min={getCurrentDate()}
  //                 id="start_date"
  //                 onChange={(e) => setStart(e.target.value)}
  //                 required
  //                 className="collect"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label style={{ width: '90px' }} htmlFor="end_date">Leave end date</label>
  //               <input
  //                 style={{ marginLeft: '60px' }}
  //                 type="date"
  //                 min={getCurrentDate()}
  //                 id="end_date"
  //                 onChange={(e) => setEnd(e.target.value)}
  //                 required
  //                 className="collect"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label style={{ width: '120px' }} htmlFor="lev_reason">Leave Reason</label>
  //               <input
  //                 style={{ marginLeft: '30px' }}
  //                 type="text"
  //                 id="lev_reason"
  //                 placeholder="Enter leave reason"
                  
  //                 onChange={(e) => setLevReason(e.target.value)}
  //                 className="collect"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label style={{ width: '140px' }} htmlFor="lev_approve">Leave Approved by</label>
  //               <select
  //                 style={{ marginLeft: '10px' }}
  //                 id="lev_approve"
  //                 required
  //                 onChange={(e) => setLevApprove(e.target.value)}
  //                 className="collect"
  //               >
  //                 <option value="">Select HR name</option>
  //                 <option value="Balaji">Balaji</option>
  //                 <option value="Rahul">Rahul</option>
  //               </select>
  //             </div>
  //             <button type="submit" style={{ marginLeft: '147px', marginTop: '20px' }} className="button-27">Submit</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Leave;
  


 