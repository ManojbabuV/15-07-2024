 


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import Unauthorized from "./Unauthorized.js"; 
// import LeaveHistory from "./pages/Leavehis.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });
  
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       e.preventDefault();
//       sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
//       sessionStorage.setItem('userRole', role);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [isLoggedIn, role]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//           {isLoggedIn ? (   
//             <>  
//               {role === 'admin' && (   
//                 <>
//                   <Route path='/adminDash'  element={<AdminDashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path={`/Event/:id`} element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//               {role === 'employee' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Employeeonboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/profile' element={<Profile />} />
//                   <Route path={`/Event/:id`} element={<EventMap />} />
//                   <Route path='/sidebar' element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
//                   <Route path='/logout' element={<Logout onLogout={handleLogout} />} />
//                 </>
//               )}
//               {role === 'manager' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path={`/Event/:id`} element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

 
// // working code:
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./login.js";
import Sign from "./sign.js";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.js";
import LeaveRequests from "./pages/Leaveinfo";
import Attendance from "./pages/Attendance.js";
import Leave from "./pages/Leave.js";
import Profile from "./pages/Profile.js";
import EmployeeOnboard from "./pages/Employee.js";
import From from "./employee/Newemployee.js";
import Organization from "./pages/Organization.js";
import More from "./pages/more.js";
import AttendanceForm from "./pages/Attenform.js";
import EventMap from "./component/Event.js";
import EventForm from "./component/EventForm.js";
import Chat from "./component/gotoChat";
import TaskForm from "./pages/TaskForm.js";
import TimetaskSheet from "./pages/Timesheet.js";
import Logout from "./pages/logout.js";
import AdminDashboard from "./pages/adminDash.js";
import ProtectedRoute from "./Protected.js";
import Unauthorized from "./Unauthorized.js"; 
import LeaveHistory from "./pages/Leavehis.js"; 
import PendingLeaveRequests from "./pages/alert.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
  });
      const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  }); 
  const handleLogin = (role) => {
    sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
    sessionStorage.setItem('userRole', role);
    setIsLoggedIn(true);
    setUserRole(role);
  }; 
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole('');
  }; 
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      sessionStorage.setItem('userRole', role);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLoggedIn, role]); 
  return (
    <div>
        {/* <p>Connection Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          {isLoggedIn ? (   <>  
              {role === 'admin' && (   <>
                  <Route path='/adminDash'  element={<AdminDashboard />} />
                  <Route path='/attendance' element={<Attendance />} />
                  <Route path='/Attenform' element={<AttendanceForm />} />
                  <Route path='/Leaveinfo' element={<LeaveRequests />} />
                  <Route path='/leave' element={<Leave />} /> 
                  <Route path='/Leavehis/:id' element={<LeaveHistory />} />
                  <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
                  <Route path='/employeeTime' element={<TimetaskSheet />} />
                  <Route path='/add-task' element={<TaskForm />} />
                  <Route path='/Organization' element={<Organization />} />
                  <Route path='/more' element={<More />} />
                  <Route path='/Newemployee' element={<From />} />
                  <Route path='/gotoChat' element={<Chat />} />
                  <Route path='/EventForm' element={<EventForm />} />
                  <Route path={`/Event/:id`} element={<EventMap />} />
                  <Route path='/profile' element={<Profile />} />
                </>
              )}
              {role === 'employee' && (
                <>
                  <Route path= '/dashboard' element={<Dashboard />} />
                  <Route path='/gotoChat' element={<Chat />} />
                  <Route path='/attendance' element={<Attendance />} />
                  <Route path='/Attenform' element={<AttendanceForm />} />
                  <Route path='/leaveinfo' element={<LeaveRequests />} />
                  <Route path='/leave' element={<Leave />} />
                  <Route path='/Employeeonboard' element={<EmployeeOnboard />} />
                  <Route path='/employeeTime' element={<TimetaskSheet />} />
                  <Route path='/Organization' element={<Organization />} />
                  <Route path='/more' element={<More />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path={`/Event/:id`} element={<EventMap />} />
                  <Route path='/sidebar' element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
                  <Route path='/logout' element={<Logout onLogout={handleLogout} />} />
                </>
              )}
              {role === 'manager' && (
                <>  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/attendance' element={<Attendance />} />
                  <Route path='/Attenform' element={<AttendanceForm />} />
                  <Route path='/Leaveinfo' element={<LeaveRequests />} />
                  <Route path='/leave' element={<Leave />} />
                  <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
                  <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
                  <Route path='/employeeTime' element={<TimetaskSheet />} />
                  <Route path='/add-task' element={<TaskForm />} />
                  <Route path='/Organization' element={<Organization />} />
                  <Route path='/more' element={<More />} />
                  <Route path='/Newemployee' element={<From />} />
                  <Route path='/alert' element={<PendingLeaveRequests />} />
                  <Route path='/gotoChat' element={<Chat />} />
                  <Route path='/EventForm' element={<EventForm />} />
                  <Route path={`/Event/:id`} element={<EventMap />} />
                  <Route path='/profile' element={<Profile />} />
                </>
              )}
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js"; 
// import LeaveHistory from "./pages/Leavehis.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });
  
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   };  
  
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//       sessionStorage.removeItem('userRole');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);
//   const generateUniquePath = (base) => {
//     const uniqueId = crypto.randomUUID();
//     return `${base}/${uniqueId}`;
//   };
  
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//           {isLoggedIn ? (
//             <>  
//               {role === 'admin' && (
//                 <>
//                   <Route path='/adminDash' element={<AdminDashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path={`/Event/${generateUniquePath('Event')}`} element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//               {role === 'employee' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Employeeonboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/profile' element={<Profile />} />
//                   <Route path={`/Event/${generateUniquePath('Event')}`} element={<EventMap />} />
//                   <Route path='/sidebar' element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
//                   <Route path='/logout' element={<Logout onLogout={handleLogout} />} />
//                 </>
//               )}
//               {role === 'manager' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path={`/Event/${generateUniquePath('Event')}`} element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js"; 
// import LeaveHistory from "./pages/Leavehis.js";
// // import { useParams } from "react-router-dom";
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });
  
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   };  
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//       sessionStorage.removeItem('userRole');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);
 
//   const generateUniquePath = (base) => {
//     const uniqueId = crypto.randomUUID();
//     return `${base}/${uniqueId}`;
//   };

 


//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//           {isLoggedIn ? (
//             <>  
//               {role === 'admin' && (
//                 <>
//                   <Route path='/adminDash' element={<AdminDashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
             
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path='/Event/:id' element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//               {role === 'employee' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Employeeonboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/profile' element={<Profile />} />
//                   <Route path='/Event/:id' element={<EventMap />} />
//                   <Route path='/sidebar' element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
//                   <Route path='/logout' element={<Logout onLogout={handleLogout} />} />
//                 </>
//               )}
//               {role === 'manager' && (
//                 <>
//                   <Route path='/dashboard' element={<Dashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
//                   <Route path='/employeeOnboard' element={<EmployeeOnboard />} />
//                   <Route path='/employeeTime' element={<TimetaskSheet />} />
//                   <Route path='/add-task' element={<TaskForm />} />
//                   <Route path='/Organization' element={<Organization />} />
//                   <Route path='/more' element={<More />} />
//                   <Route path='/Newemployee' element={<From />} />
//                   <Route path='/gotoChat' element={<Chat />} />
//                   <Route path='/EventForm' element={<EventForm />} />
//                   <Route path='/Event/:id' element={<EventMap />} />
//                   <Route path='/profile' element={<Profile />} />
//                 </>
//               )}
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




//original code
// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js"; 
// import LeaveHistory from "./pages/Leavehis.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });

//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//       sessionStorage.removeItem('userRole');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   const generateUniquePath = (base) => {
//     const uniqueId = crypto.randomUUID();
//     console.log(uniqueId);
//     return `${base}/${uniqueId}`;
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//           {isLoggedIn ? (
//             <>  {role === 'admin' && (
//                 <>
//                   <Route path='/adminDash' element={<AdminDashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave'element={<Leave />} />
//                   <Route path='/Leavehis/:id' element={<LeaveHistory />} />
//                   <Route path="/employeeOnboard" element={<EmployeeOnboard />} />
//                   <Route path="/employeeTime" element={<TimetaskSheet />} />
//                   <Route path="/add-task" element={<TaskForm />} />
//                   <Route path="/Organization" element={<Organization />} />
//                   <Route path="/more" element={<More />} />
//                   <Route path="/Newemployee" element={<From />} />
//                   <Route path="/gotoChat" element={<Chat />} />
//                   <Route path="/EventForm" element={<EventForm />} />
//                   <Route path="/Event" element={<EventMap />} />
//                   <Route path="/profile" element={<Profile />} />
//                 </>
//               )}
//               {role === 'employee' && (
//                 <>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/gotoChat" element={<Chat />} />
//                   <Route path="/attendance" element={<Attendance />} />
//                   <Route path="/Attenform" element={<AttendanceForm />} />
//                   <Route path="/leaveinfo" element={<LeaveRequests />} />
//                   <Route path="/leave" element={<Leave />} />
//                   <Route path="/Employeeonboard" element={<EmployeeOnboard />} />
//                   <Route path="/employeeTime" element={<TimetaskSheet />} />
//                   <Route path="/Organization" element={<Organization />} />
//                   <Route path="/more" element={<More />} />
//                   <Route path="/profile" element={<Profile />} />
//                   <Route path={generateUniquePath("/Event")} element={<EventMap />} />
//                   <Route path="/sidebar" element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
//                   <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//                 </>
//               )}
//               {role === 'manager' && (
//                 <>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path='/attendance' element={<Attendance />} />
//                   <Route path='/Attenform' element={<AttendanceForm />} />
//                   <Route path='/Leaveinfo' element={<LeaveRequests />} />
//                   <Route path='/leave' element={<Leave />} />
//                   <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
//                   <Route path="/employeeOnboard" element={<EmployeeOnboard />} />
//                   <Route path="/employeeTime" element={<TimetaskSheet />} />
//                   <Route path="/add-task" element={<TaskForm />} />
//                   <Route path="/Organization" element={<Organization />} />
//                   <Route path="/more" element={<More />} />
//                   <Route path="/Newemployee" element={<From />} />
//                   <Route path="/gotoChat" element={<Chat />} />
//                   <Route path="/EventForm" element={<EventForm />} />
//                   <Route path={generateUniquePath("/Event")} element={<EventMap />} />
//                   <Route path="/profile" element={<Profile />} />
//                 </>
//               )}
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js"; 
// import LeaveHistory from "./pages/Leavehis.js";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });

//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   }); 
//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   }; 
//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   }; 
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//       sessionStorage.removeItem('userRole');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []); 
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//         {isLoggedIn ?(
//           <>
//           {(role === 'admin'&&
//           <>
//           <Route path='/adminDash' element={  <AdminDashboard />}/>
//             <Route path='/attendance' element={ <Attendance  />}/>
//             <Route path='/Attenform' element={<AttendanceForm />} />
//             <Route path='/Leaveinfo' element={< LeaveRequests/>} />
//             <Route path='/leave' element={<Leave />} />
//             <Route path='/Leavehis/:id' element={<LeaveHistory />} />
//             <Route path="/employeeOnboard" element={<EmployeeOnboard />} />
//             <Route path="/employeeTime" element={< TimetaskSheet />} />
//             <Route path="/add-task" element={<TaskForm />} />
//             <Route path="/Organization" element={ <Organization/>}/>
//             <Route path="/more" element={<More />} />
//             <Route path="/Newemployee" element={<From />} />
//             <Route path="/gotoChat" element={<Chat />} />
//             <Route path="/EventForm" element={<EventForm /> } />
//             <Route path="/Event" element={<EventMap/> } />
//             <Route path="/profile" element={<Profile />} />  
//             </>)} 
//           {(role === 'employee' && (
//   <>
//     <Route path="/dashboard" element={<Dashboard/>} />
//     <Route  path="/gotoChat" element={<Chat />} />
//     <Route path="/attendance" element={<Attendance />} />
//     <Route path="/Attenform" element={<AttendanceForm />} />
//     <Route path="/leaveinfo" element={<LeaveRequests />} />
//     <Route path="/leave" element={<Leave />} />
//     <Route path="/Employeeonboard" element={<EmployeeOnboard />} />
//     <Route path="/employeeTime" element={<TimetaskSheet />} />
//     <Route path="/Organization" element={<Organization />} />
//     <Route path="/more" element={<More />} />
//     <Route path="/profile" element={<Profile />} />
//     <Route path="/Event" element={<EventMap eventId={1} />} />
//     <Route path="/sidebar" element={<Sidebar isOpen={true} setIsOpen={() => {}} role={role} />} />
//     <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//   </>
// ))} 
// {(role === 'manager' &&
// <>
//     <Route path="/dashboard" element={<Dashboard/>} />
//     <Route path='/attendance' element={ <Attendance  />}/>
//     <Route path='/Attenform' element={<AttendanceForm />} />
//     <Route path='/Leaveinfo' element={< LeaveRequests/>} />
//     <Route path='/leave' element={<Leave />} />
//     <Route path='/Leavehis/:employee_id' element={<LeaveHistory />} />
//     <Route path="/employeeOnboard" element={<EmployeeOnboard />} />
//     <Route path="/employeeTime" element={< TimetaskSheet />} />
//     <Route path="/add-task" element={<TaskForm />} />
//     <Route path="/Organization" element={ <Organization/>}/>
//     <Route path="/more" element={<More />} />
//     <Route path="/Newemployee" element={<From />} />
//     <Route path="/gotoChat" element={<Chat />} />
//     <Route path="/EventForm" element={<EventForm /> } />
//     <Route path="/Event" element={<EventMap/> } />
//     <Route path="/profile" element={<Profile />} />
//     </>
// )}
//   </>  
//     ):( 
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// } 
// export default App;


// import React, { useEffect, useState } from "react";
// import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// // import Dashboard from "./pages/Dashboard.js";
// // import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// // import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// // import TimetaskSheet from "./pages/Timesheet.js";
// // import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/Dashpage.js"; 
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js";
// // import AdminEmployeeOnboard from "./pages/AdminEmployee.js"; 
// // import AdminTime from "./pages/AdminTime.js"; 
// import AdminLeaveInfo from "./pages/AdminLeaveinfo.js";
// import LeaveInfo from "./pages/Leaveinfo.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import Dashboard from "./pages/Dashboard.js"; 

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
//   });

//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   const handleLogin = (role) => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     sessionStorage.setItem('userRole', role);
//     setIsLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//       sessionStorage.removeItem('userRole');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />

//        {(isLoggedIn && 
//        <><Route path='/Dashboard' element={
//             <ProtectedRoute role="admin">
//               <Dashboard />
//             </ProtectedRoute>
//           } /> 
//             {(role==='admin'  && <>
//               <Route path="/Event" element={<EventMap eventId={1} />} /> 
//               <Route path="/gotoChat" element={<Chat />} /> 
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/Attenform" element={<AttendanceForm />} />  
//               <Route path="/leave" element={<Leave/>} />
//               <Route path="/Leaveinfo" element={<LeaveInfo />} />
//               <Route path="/Employee" element={<EmployeeOnboard />} />
//               <Route path="/Timesheet" element={<TimetaskSheet />} /> 
//               <Route path="/Organization" element={<Organization />} />
//               <Route path="/more" element={<More />} />  
//               <Route path="/adminDash" element={<AdminDashboard />} />
//               <Route path="/Newemployee" element={<From />} />
//               <Route path="/gotoChat" element={<Chat/>} />
//               <Route path="/EventForm" element={<EventForm/>} />
//               <Route path="/TaskForm" element={<TaskForm/>} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/sidebar" element={<Sidebar />} />
//               <Route path="/logout" element={<Logout onLogout={handleLogout} />} /> 
//         </>)} 
//              {(role==='employee'  &&
//              <>
//              <Route path='/Dashboard' element={
//             <ProtectedRoute role="admin">
//               <Dashboard />
//             </ProtectedRoute>}/>
//               <Route path="/Event" element={<EventMap eventId={1} />} /> 
//               <Route path="/gotoChat" element={<Chat />} /> 
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/Attenform" element={<AttendanceForm />} />  
//               <Route path="/leave" element={<Leave/>} />
//               <Route path="/Leaveinfo" element={<LeaveInfo />} />
//               <Route path="/Employee" element={<EmployeeOnboard />} />
//               <Route path="/Timesheet" element={<TimetaskSheet />} /> 
//               <Route path="/Organization" element={<Organization />} />
//               <Route path="/more" element={<More />} />     
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/sidebar" element={<Sidebar />} />
//               <Route path="/logout" element={<Logout onLogout={handleLogout} />} /> 
//           </> )}

//               {/* // <Route path="/dashboard" element={<Dashboard />} />
//               // <Route path="/Event" element={<EventMap eventId={1} />} /> 
//               // <Route path="/gotoChat" element={<Chat />} /> 
//               // <Route path="/attendance" element={<Attendance />} />
//               // <Route path="/Attenform" element={<AttendanceForm />} />  
//               // <Route path="/leave" element={<Leave />} />
//               // <Route path="/Leaveinfo" element={<Leaveinfo />} />
//               // <Route path="/Employee" element={<EmployeeOnboard />} />
//               // <Route path="/Timesheet" element={<TimetaskSheet />} /> 
//               // <Route path="/Organization" element={<Organization />} />
//               // <Route path="/more" element={<More />} />  
//               // <Route path="/adminDash" element={<AdminDashboard />} />
//               // <Route path="/gotoChat" element={<Chat/>} />
//               // <Route path="/profile" element={<Profile />} />
//               // <Route path="/sidebar" element={<Sidebar />} />
//               // <Route path="/logout" element={<Logout onLogout={handleLogout} />} />  */}
             
//               </>
//              )} 
//               {!isLoggedIn && (
//             <Route path="*" element={<Navigate to="/login" />} />
//               )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// } 
// export default App;
 




//jwt 

// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import './App.css'
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js"
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import From from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./Protected.js";
// import Unauthorized from "./Unauthorized.js"; // Add the Unauthorized component

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const storedValue = sessionStorage.getItem('isLoggedIn');
//     return storedValue !== null ? JSON.parse(storedValue) : false;
//   });

//   const handleLogin = () => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('userRole');
//     setIsLoggedIn(false);
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     const url = window.location.pathname;
//     if (url === "/" && !isLoggedIn) {
//       sessionStorage.setItem('isLoggedIn', JSON.stringify(false));
//       setIsLoggedIn(false);
//     }
//   }, [isLoggedIn]);

//   useEffect(() => {
//     const storedValue = sessionStorage.getItem('isLoggedIn');
//     const isLoggedInFromStorage = storedValue !== JSON.parse(storedValue) ? null : false;
//     if (!isLoggedInFromStorage && !isLoggedIn) {
//       sessionStorage.setItem('isLoggedIn', JSON.stringify(false));
//       setIsLoggedIn(false);
//     }
//   }, [isLoggedIn]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />  {/* Add Unauthorized route */}
//           <Route path='/adminDash' element={
//             <ProtectedRoute role="admin">
//               <AdminDashboard /> 
//             </ProtectedRoute>
            
//           } />
//           <Route path='/attendance' element={
//             <ProtectedRoute role="admin">
//               <Attendance /> 
//             </ProtectedRoute>
            
//           } />
//           <Route path='/Attenform' element={
//             <ProtectedRoute role="admin">
//               <AttendanceForm /> 
//             </ProtectedRoute>
            
//           } />
//           <Route path='/leaveinfo' element={
//             <ProtectedRoute role="admin">
//               <LeaveRequests /> 
//             </ProtectedRoute> 
//           } />
//           <Route path='/leave' element={
//             <ProtectedRoute role="admin">
//               <Leave /> 
//             </ProtectedRoute> 
//           } />
//                  <Route path="/Employee" element={   <ProtectedRoute role="admin"><EmployeeOnboard  />  </ProtectedRoute>} />
//               <Route path="/Timesheet" element={<ProtectedRoute role="admin"><TimetaskSheet /></ProtectedRoute>} />
//               <Route path="/add-task" element={<ProtectedRoute role="admin"><TaskForm /></ProtectedRoute> } />
//               <Route path="/Organization" element={<ProtectedRoute role="admin"><Organization /></ProtectedRoute>} />
//               <Route path="/more" element={<ProtectedRoute role="admin"><More /></ProtectedRoute>} />
//               <Route path="/Newemployee" element={<ProtectedRoute role="admin"><From /></ProtectedRoute>} />
//               <Route path="/profile" element={<ProtectedRoute role="admin"><Profile /></ProtectedRoute>} />
            
//           {isLoggedIn ? (
//             <>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/Event" element={<EventMap eventId={1} />} />
//               <Route path="/EventForm" element={<EventForm />} />
//               <Route path="/gotoChat" element={<Chat />} />
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/Attenform" element={<AttendanceForm />} />
//               <Route path="/leaveinfo" element={<LeaveRequests />} />
//               <Route path="/leave" element={<Leave />} />
//               <Route path="/Employee" element={<EmployeeOnboard />} />
//               <Route path="/Timesheet" element={<TimetaskSheet />} />
//               <Route path="/add-task" element={<TaskForm />} />
//               <Route path="/Organization" element={<Organization />} />
//               <Route path="/more" element={<More />} />
//               <Route path="/Newemployee" element={<From />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/sidebar" element={<Sidebar />} />
//               <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//             </>
//           ) : (
//             <>
//               <Route path="*" element={<Navigate to="/login" />} />
//             </>
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




//original code
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import './App.css';
// import Login from "./login.js";
// import Sign from "./sign.js";
// import Sidebar from "./components/Sidebar.jsx";
// import Dashboard from "./pages/Dashboard.js";
// import LeaveRequests from "./pages/Leaveinfo";
// import Attendance from "./pages/Attendance.js";
// import Leave from "./pages/Leave.js";
// import Profile from "./pages/Profile.js";
// import EmployeeOnboard from "./pages/Employee.js";
// import NewEmployee from "./employee/Newemployee.js";
// import Organization from "./pages/Organization.js";
// import More from "./pages/more.js";
// import AttendanceForm from "./pages/Attenform.js";
// import EventMap from "./component/Event.js";
// import EventForm from "./component/EventForm.js";
// import Chat from "./component/gotoChat";
// import TaskForm from "./pages/TaskForm.js";
// import TimetaskSheet from "./pages/Timesheet.js";
// import Logout from "./pages/logout.js";
// import AdminDashboard from "./pages/adminDash.js";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const storedValue = sessionStorage.getItem('isLoggedIn');
//     return storedValue !== null ? JSON.parse(storedValue) : false;
//   });

//   const handleLogin = () => {
//     sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('isLoggedIn');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     const url = window.location.pathname;
//     if (url === "/" && !isLoggedIn) {
//       sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
//       setIsLoggedIn(false);
//     }
//   }, [isLoggedIn]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           {isLoggedIn ? (
//             <>
//               <ProtectedRoute path="/dashboard" component={Dashboard} role="user" />
//               <ProtectedRoute path="/admindash" component={AdminDashboard} role="admin" />
//               <ProtectedRoute path="/Event" component={EventMap} role="user" />
//               <ProtectedRoute path="/EventForm" component={EventForm} role="user" />
//               <ProtectedRoute path="/gotoChat" component={Chat} role="user" />
//               <ProtectedRoute path="/attendance" component={Attendance} role="user" />
//               <ProtectedRoute path="/Attenform" component={AttendanceForm} role="user" />
//               <ProtectedRoute path="/leaveinfo" component={LeaveRequests} role="user" />
//               <ProtectedRoute path="/leave" component={Leave} role="user" />
//               <ProtectedRoute path="/Employee" component={EmployeeOnboard} role="user" />
//               <ProtectedRoute path="/Timesheet" component={TimetaskSheet} role="user" />
//               <ProtectedRoute path="/add-task" component={TaskForm} role="user" />
//               <ProtectedRoute path="/Organization" component={Organization} role="user" />
//               <ProtectedRoute path="/more" component={More} role="user" />
//               <ProtectedRoute path="/Newemployee" component={NewEmployee} role="user" />
//               <ProtectedRoute path="/profile" component={Profile} role="user" />
//               <ProtectedRoute path="/sidebar" component={Sidebar} role="user" />
//               <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/login" />} />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



 