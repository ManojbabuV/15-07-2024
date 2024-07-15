 




// import React, { useState, useEffect } from 'react';
// import './styles.css';
// import Sidebar from '../components/Sidebar';
// import plus from '../assets/plus.png';
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
// import './attendance.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import ProtectedRoute from '../Protected';
// const Attendance = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [employees, setEmployees] = useState([]); 
//   const navigate = useNavigate(); 
//   const [error, setError] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [count, setTotalCount] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [onsiteCount, setOnsiteCount] = useState(0);
//   const [onsitee, setOnsitee] = useState([]);
//   const [new_status, setNewStatus] = useState('');
//   const [newrowId, setEditRowId] = useState(null);
//   const [absendCount, setAbsendCount] = useState(0);
//   const [leave, setLeave] = useState([]);
//   const [presentCount, setPresentCount] = useState(0);
//   // const [sending, setPresent] = useState([]);
//   const [sending, setSending] = useState([]);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await Axios.get('http://localhost:3015/getting');
//         // const response = await Axios.get('http://192.168.1.151:3015/getting');
//         setEmployees(response.data.attendance);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);
//   const handleSave = async (id) => {
//     try {
//       await Axios.put(`http://localhost:3015/atupdate/${id}`, {
//         newStatus: new_status,
//       });
//       setEmployees((prevEmployees) =>
//         prevEmployees.map((employee) =>
//           employee.id === id ? { ...employee, atten_status: new_status } : employee
//         )
//       );
//       setEditRowId(null);
//       setNewStatus('');
//       alert('Status updated successfully');
//     } catch (error) {
//       console.error('Error updating status:', error);
//       alert('An error occurred, please try again later');
//     }
//   };
//   const handleEdit = (id, status) => {
//     setEditRowId(id);
//     setNewStatus(status);
//   };
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//   useEffect(() => {
//     async function fetchCount() {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/onsite');
//         const response = await Axios.get('http://localhost:3015/onsite');
//         setOnsiteCount(response.data.onsiteCount);
//         setOnsitee(response.data.onsitee);
//         console.log("onsitee data fetching successfully");  
//       } catch (error) {
//         setError("An error occurred while fetching total count.");
//         console.error("Error fetching total count:", error);
//       }
//     }
//     fetchCount();
//   }, []);
//   useEffect(() => {
//     async function fetchTotal() {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/present');
//         const response = await Axios.get('http://localhost:3015/present');
//         setPresentCount(response.data.presentCount); 
//         setSending(response.data.sending);  
//         console.log("Total employee count data fetched successfully");
//       } catch (error) {
//         setError("An error occurred while fetching total count.");
//         console.error("Error fetching total count:", error);
//       }
//     }
//     fetchTotal();
//   }, []);

//   useEffect(() => {
//     async function fetchTotal() {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/absent');
//         const response = await Axios.get('http://localhost:3015/absent');
//         setAbsendCount(response.data.absentCount); 
//         setLeave(response.data.leave);  
//         console.log("Total employee count data fetched successfully");
//       } catch (error) {
//         setError("An error occurred while fetching total count.");
//         console.error("Error fetching total count:", error);
//       }
//     }
//     fetchTotal();
//   }, []);
 
//     useEffect(() => { 
//         document.body.style.backgroundColor = 'white'; 
//         return () => {
//             document.body.style.backgroundColor = null;
//         };
//     }, []);
//     useEffect(() => {
//       async function fetchTotal() {
//         try {
//           // const response = await Axios.get('http://192.168.1.151:3015/count');
//           const response = await Axios.get('http://localhost:3015/count');
//           setTotalCount(response.data.count); 
//           setComments(response.data.comments);  
//           console.log("Total employee count data fetched successfully");
//         } catch (error) {
//           setError("An error occurred while fetching total count.");
//           console.error("Error fetching total count:", error);
//         }
//       }
//       fetchTotal();
//     }, []);
//   const Leave = () => {
//     navigate('/attenform');
//   };
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   const calculateWorkingHours = (checki, checko) => { 
//     const checkiDate = new Date(checki);
//     const checkoDate = new Date(checko); 
//     const differenceInMs = checkoDate - checkiDate; 
//     const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
//     const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60)); 
//     return `${hours} hours ${minutes} minutes`;
//   };
//   return (
//     <div className="app">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <div className="leave-requests">
//           <h2 className="test">Attendance</h2>
//           <div className="leave-summary">
//             <div className="summary-card">
//               <h3>{count}</h3>
//              <p>Office Employee</p>
//                </div>
//               <div className="summary-card2">
//               <h3>{onsitee.map((add) => (
//               <div key={add.id}> 
//              <h3>{add.onsiteCount}</h3>
//             </div>
//              ))}  </h3> <p>Onsite Employee</p>
//             </div>
//             <div className="summary-card3">
//               <h3>{leave.map((add) => (
//               <div key={add.id}> 
//               <h3>{add.absentCount}</h3>
//                </div>
//               ))}</h3>
//               <p>Total absent</p>
//                </div>
//              <div className="summary-card4">
//                <h3>  {sending.map((design)=>(
//               <p key={design.id}>
//               <h3>{design.presentCount}</h3>
//               </p>
//             ))}
//           </h3> 
//            <p>Total present</p>
//             </div>
//           </div>
//           <div className="set">
//           <h1  className='test'>Attendance details</h1>
//             {/* <div className="attendance-section">
//               <div className="clock-in-out">
//                 <div className="clock">
//                   <p>Time: {currentTime.toLocaleTimeString()}</p>
//                   <p>{currentTime.toDateString()}</p>
              
//               </div> 
//            </div>   </div>*/}
            
//             <button type="button" onClick={Leave} className='button-27' style={{  alignItems:"center",display:"flex",width:"125px",marginTop:"0px"}}>
//               <img src={plus} alt="Apply Leave" height="20px" width="20px" style={{ marginLeft: "0px" }} />
//               Attendance
//             </button>
//           </div>
//           {error && <p>{error}</p>}
//           <table>
//             <thead>
//               <tr>
                
//                 <th>Employee ID</th>
//                 <th>Employee position</th>
//                 <th>Check IN</th>
//                 <th>Check Out</th>
//                 <th>Working Hours</th>
//                 <th>Attendance status </th>
//                 <td>Action</td> 
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.employee_id}</td>
//                   <td>{employee.employee}</td>
//                   <td>{employee.checki}</td>
//                   <td>{employee.checko}</td> 
//                   <td>{calculateWorkingHours(employee.checki,employee.checko)}</td>
      
//            <td>
//         {newrowId === employee.id ? (
//           <select className='collect' value={new_status} pnChange={(e)=>setNewStatus(e.target.value)}style={{width:"120px"}} >
//           <option>Present</option>
//           <option>absent</option>
//           <option>excuse</option> 
//           </select> 
//         ) : (
//           employee.atten_status
//         )}
//       </td>
//       <td>
//             {newrowId === employee.id ? (
//               <button style={{ width: "30px" }} className="button-27" onClick={() => handleSave(employee.id)}>
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <i className="fas fa-save"></i>
//                 </div>
//               </button>
//             ) : (
//               <button style={{ width: "30px" }} className="button-27" onClick={() => handleEdit(employee.id, employee.atten_status)}>
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <i className="fas fa-edit"></i>
//                 </div>
//               </button>
//             )}</td>
//             {/* <ProtectedRoute>{(role === "manager"&&
//             <td> </td>)}</ProtectedRoute>       */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Attendance;












import React, { useState, useEffect } from 'react';
import './styles.css';
import Sidebar from '../components/Sidebar';
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './attendance.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProtectedRoute from '../Protected';

const Attendance = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employees, setEmployees] = useState([]); 
  const navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [count, setTotalCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [onsiteCount, setOnsiteCount] = useState(0);
  const [onsitee, setOnsitee] = useState([]);
  const [new_status, setNewStatus] = useState('');
  const [newrowId, setEditRowId] = useState(null);
  const [absendCount, setAbsendCount] = useState(0);
  const [absent, setLeave] = useState([]);
  const [presentCount, setPresentCount] = useState(0);
  const [sending, setSending] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await Axios.get('http://localhost:3015/getting');
        setEmployees(response.data.attendance);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []);

  const handleSave = async (id) => {
    try {
      await Axios.put(`http://localhost:3015/atupdate/${id}`, {
        new_status: new_status,
      });
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === id ? { ...employee, atten_status: new_status } : employee
        )
      );
      setEditRowId(null);
      setNewStatus('');
      alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('An error occurred, please try again later');
    }
  };

  const handleEdit = (id, status) => {
    setEditRowId(id);
    setNewStatus(status);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await Axios.get('http://localhost:3015/onsite');
        setOnsiteCount(response.data.onsiteCount);
        setOnsitee(response.data.onsitee);
        console.log("onsitee data fetching successfully");  
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        const response = await Axios.get('http://localhost:3015/present');
        setPresentCount(response.data.presentCount); 
        setSending(response.data.sending);  
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        const response = await Axios.get('http://localhost:3015/absent');
        setAbsendCount(response.data.absentCount); 
        setLeave(response.data.absent);  
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);
 
  useEffect(() => { 
    document.body.style.backgroundColor = 'white'; 
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        const response = await Axios.get('http://localhost:3015/count');
        setTotalCount(response.data.count); 
        setComments(response.data.comments);  
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);

  const Leave = () => {
    navigate('/attenform');
  };

  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });

  const calculateWorkingHours = (checki, checko) => { 
    const checkiDate = new Date(checki);
    const checkoDate = new Date(checko); 
    const differenceInMs = checkoDate - checkiDate; 
    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60)); 
    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="leave-requests">
          <h2 className="test">Attendance</h2>
          <div className="leave-summary">
            <div className="summary-card">
              <h3>{count}</h3>
              <p>Office Employee</p>
            </div>
            <div className="summary-card2">
              <h3>{onsitee.map((add) => (
                <div key={add.id}> 
                  <h3>{add.onsiteCount}</h3>
                </div>
              ))}</h3>
              <p>Onsite Employee</p>
            </div>
            <div className="summary-card3">
              <h3>{absent.map((add) => (
                <div key={add.id}> 
                  <h3>{add.absentCount}</h3>
                </div>
              ))}</h3>
              <p>Total absent</p>
            </div>
            <div className="summary-card4">
              <h3>{sending.map((design) => (
                <p key={design.id}>
                  <h3>{design.presentCount}</h3>
                </p>
              ))}</h3>
              <p>Total present</p>
            </div>
          </div>
          <div className="set">
            <h1 className='test'>Attendance details</h1>
            <button type="button" onClick={Leave} className='button-27' style={{ alignItems: "center", display: "flex", width: "125px", marginTop: "0px" }}>
              <img src={plus} alt="Apply Leave" height="20px" width="20px" style={{ marginLeft: "0px" }} />
              Attendance
            </button>
          </div>
          {error && <p>{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee position</th>
                <th>Check IN</th>
                <th>Check Out</th>
                <th>Working Hours</th>
                <th>Attendance status</th>
                <ProtectedRoute>{(role === 'admin' &&        <th>Action</th>    )}</ProtectedRoute> 
                <ProtectedRoute>{(role === 'manager'&&        <th>Action</th>    )}</ProtectedRoute> 
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.employee}</td>
                  <td>{employee.checki}</td>
                  <td>{employee.checko}</td>
                  <td>{calculateWorkingHours(employee.checki, employee.checko)}</td>
                  <td>
                    {newrowId === employee.id ? (
                      <select className='collect' value={new_status} onChange={(e) => setNewStatus(e.target.value)} style={{ width: "120px" }}>
                        <option value="">Select</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Excuse">Excuse</option>
                      </select>
                    ) : (
                      employee.atten_status
                    )}
                  </td>
                <ProtectedRoute>{(role === 'admin'&&
                   <td>         {newrowId === employee.id ? (
                    <button style={{ width: "30px" }} className="button-27" onClick={() => handleSave(employee.id)}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i className="fas fa-save"></i>
                      </div>
                    </button>
                  ) : (
                    <button style={{ width: "30px" }} className="button-27" onClick={() => handleEdit(employee.id, employee.atten_status)}>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i className="fas fa-edit"></i>
                      </div>
                    </button>
                  )}
                </td>
                )}</ProtectedRoute>  
                <ProtectedRoute>{(role === 'manager'&&                <td>         {newrowId === employee.id ? (
                      <button style={{ width: "30px" }} className="button-27" onClick={() => handleSave(employee.id)}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <i className="fas fa-save"></i>
                        </div>
                      </button>
                    ) : (
                      <button style={{ width: "30px" }} className="button-27" onClick={() => handleEdit(employee.id, employee.atten_status)}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <i className="fas fa-edit"></i>
                        </div>
                      </button>
                    )}
                  </td>
                )}</ProtectedRoute>  

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
