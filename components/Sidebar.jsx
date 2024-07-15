//   import './sidebar.css';
// import logo from '../assets/backj.png';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Dash from "../assets/dash.png";
// import Leav from "../assets/leav.png";
// import More from "../assets/more.png";
// import Onboard from "../assets/onboard.png";
// import Prof from "../assets/prof.png";
// import Team from "../assets/team.png";
// import Logout from "../assets/logout.png";
// import Time from "../assets/time.png";
// import Atten from "../assets/atten.png";
// import { FaBars } from 'react-icons/fa';

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const navigate = useNavigate();
//   const sidebarRef = useRef(null);

//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleLinkClick = (path) => {
//     setIsOpen(false);
//     navigate(path);
//   };

//   const handleMouseEnter = () => {
//     if (!isOpen) {
//       setIsOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isOpen) {
//       setIsOpen(false);
//     }
//   };

//   const menuItem = [
//     { path: "/dashboard", icon: Dash, name: "Dashboard" },
//     { path: '/attendance', icon: Atten, name: 'Attendance' },
//     { path: "/leaveinfo", name: "Leave Info", icon: Leav },
//     { path: "/3crackc95b4b4f2bf7568ba4a62386176af46a0", name: "Employee onboard", icon: Onboard },
//     { path: "/1u18ef6c4shop3c680e02f54typezo6c1436a601b", name: "Timesheet", icon: Time },
//     { path: "/a1npm275c0102d17dfe94a3sendkd37b4c3729f8", name: "Organization", icon: Team },
//     { path: "/c5dff9e8e6b12a4133adobe68c3f10i3462c60", name: "Profile", icon: Prof },
//     { path: "/e14btorrentaf7723d721342576d6cec96a01c0247", name: "More", icon: More },
//     { path: "/loadwxjs82", name: "Logout", icon: Logout },
//   ];

//   return (
//     <div
//       className={`sidebar ${isOpen ? 'open' : 'closed'}`}
//       ref={sidebarRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <FaBars className="toggle-button" onClick={toggle}></FaBars>
//       <div className='header'>
//         <img className='logo' src={logo} alt='Logo' height="40px" width="50px" style={{marginLeft:isOpen?"0px":"0px",height: isOpen?" 50px":"30px",width:isOpen?"60px":"40px"}} />
//         <h1 className='company' style={{ display: isOpen ? "block" : "none" }}>STACKPOS GROUP</h1>
//       </div>
//       {menuItem.map((item, index) => (
//         <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
//           <img src={item.icon} alt={item.name} className="icon" />
//           <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// } 
// export default Sidebar;



  


 



























// import './sidebar.css';
// import logo from '../assets/backj.png';
// import {  useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Dash from "../assets/dash.png";
// import Leav from "../assets/leav.png";
// import More from "../assets/more.png";
// import Onboard from "../assets/onboard.png";
// import Prof from "../assets/prof.png";
// import Team from "../assets/team.png";
// import Logout from "../assets/logout.png";
// import Time from "../assets/time.png";
// import Atten from "../assets/atten.png";
// import { FaBars } from 'react-icons/fa';

// function Sidebar({ isOpen, setIsOpen }) {
//   const navigate = useNavigate();
//   const sidebarRef = useRef(null);

//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [setIsOpen]);

//   const handleLinkClick = (path) => {
//     setIsOpen(false);
//     navigate(path);
//   };

//   const handleMouseEnter = () => {
//     if (!isOpen) {
//       setIsOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isOpen) {
//       setIsOpen(false);
//     }
//   };

//   const menuItem = [
//     { path: "/dashboard"||"/adminDash", icon: Dash, name: "Dashboard" ,role:"admin"||"employee"},
//     { path: '/attendance', icon: Atten, name: 'Attendance',role:"admin"||"employee" },
//     { path: "/leaveinfo"||"/AdminLeaveinfo", name: "Leave Info", icon: Leav,role:"admin"||"employee" },
//     { path: "/employee"||"/Adminonboard", name: "Employee onboard", icon: Onboard,role:"admin" ||"employee"},
//     { path: "/Timesheet"||"Admintime", name: "Timesheet", icon: Time ,role:"admin"||"employee"},
//     { path: "/Organization", name: "Organization", icon: Team ,role:"admin"||"employee"},
//     { path: "/profile"||"profiled", name: "Profile", icon: Prof,role:"admin"||"employee" },
//     { path: "/more", name: "More", icon: More,role:"admin" ||"employee"},
//     { path: "/login", name: "Logout", icon: Logout,position:'footer',role:"admin"||"employee"},
//   ]; 
//   return (
//     <div 
//       className={`sidebar ${isOpen ? 'open' : 'closed'}`}
//       ref={sidebarRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >

//       <FaBars className="toggle-button" onClick={toggle}></FaBars>
//       <div className='header'>
//         <img className='logo' src={logo} alt='Logo' height="50px" width="60px" />
//         <h1 className='company' style={{ display: isOpen ? "block" : "none" }}>STACKPOS GROUP</h1>
//       </div>
//       {menuItem.map((item, index) =>(
//         <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
//           <img src={item.icon} alt={item.name} className="icon" />
//           <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//         </div>
//       ))} 
//     </div>
//   );
// }
// export default Sidebar;




// original code: 
// import './sidebar.css';
// import logo from '../assets/backj.png';
// import { useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Dash from "../assets/dash.png";
// import Leav from "../assets/leav.png";
// import More from "../assets/more.png";
// import Onboard from "../assets/onboard.png";
// import Prof from "../assets/prof.png";
// import Team from "../assets/team.png";
// import Logout from "../assets/logout.png";
// import Time from "../assets/time.png";
// import Atten from "../assets/atten.png";
// import { FaBars } from 'react-icons/fa';

// function Sidebar({ isOpen, setIsOpen, role }) {
//   const navigate = useNavigate();
//   const sidebarRef = useRef(null);

//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [setIsOpen]);

//   const handleLinkClick = (path) => {
//     setIsOpen(false);
//     navigate(path);
//   };

//   const handleMouseEnter = () => {
//     if (!isOpen) {
//       setIsOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isOpen) {
//       setIsOpen(false);
//     }
//   };

//   const menuItem = [
//     { path: role === 'admin' && "/adminDash" ||role === 'employee' && "/adminDash", icon: Dash, name: "Dashboard" },
//     { path: '/attendance', icon: Atten, name: 'Attendance' },
//     { path: role === 'admin' ? "/AdminLeaveinfo" : "/leaveinfo", name: "Leave Info", icon: Leav },
//     { path: role === 'admin' ? "/Adminonboard" : "/employee", name: "Employee onboard", icon: Onboard },
//     { path: role === 'admin' ? "/Admintime" : "/Timesheet", name:"Timesheet", icon: Time },
//     { path: "/Organization", name: "Organization", icon: Team },
//     { path: "/profile", name:"Profile", icon: Prof },
//     { path: "/more", name: "More", icon: More },
//     { path: "/login", name: "Logout", icon: Logout, position: 'footer' },
//   ];

//   return (
//     <div 
//       className={`sidebar ${isOpen ? 'open' : 'closed'}`}
//       ref={sidebarRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <FaBars className="toggle-button" onClick={toggle}></FaBars>
//       <div className='header'>
//         <img className='logo' src={logo} alt='Logo' height="50px" width="60px" />
//         <h1 className='company' style={{ display: isOpen ? "block" : "none" }}>STACKPOS GROUP</h1>
//       </div>
//       {menuItem.map((item, index) => (
//         <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
//           <img src={item.icon} alt={item.name} className="icon" />
//           <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;



import './sidebar.css';
import logo from '../assets/backj.png';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dash from "../assets/dash.png";
import Leav from "../assets/leav.png";
import More from "../assets/more.png";
import Onboard from "../assets/onboard.png";
import Prof from "../assets/prof.png";
import Team from "../assets/team.png";
import Logout from "../assets/logout.png";
import Time from "../assets/time.png";
import Atten from "../assets/atten.png";
import { FaBars } from 'react-icons/fa';

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
   

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      setIsOpen(false);
    }
  }; 
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  }); 
  const menuItem = [
    { path: (role  === 'admin' ? "/adminDash":'/dashboard' )  , icon: Dash, name: "Dashboard" },
    { path: '/attendance', icon: Atten, name: 'Attendance' },
    { path: "/leaveinfo", name: "Leave Info", icon: Leav },
    { path: "/employeeOnboard", name: "Employee onboard", icon: Onboard },
    { path: "/employeeTime", name: "Timesheet", icon: Time },
    { path: "/Organization", name: "Organization", icon: Team },
    { path: "/profile", name: "Profile", icon: Prof },
    { path: "/more", name: "More", icon: More },

  ];  
  const setitem = [
    { path1: "/login", name1: "Logout", icon1: Logout, position: 'footer' },
  ]
  return (
    <div 
      className={`sidebar ${isOpen ? 'open' : 'closed'}`}
      ref={sidebarRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaBars className="toggle-button" onClick={toggle}></FaBars>
      <div className='header'>
        <img className='logo' src={logo} alt='Logo' height="50px" width="60px" />
        <h1 className='company' style={{ display: isOpen ? "block" : "none" }}>STACKPOS GROUP</h1>
      </div>
      {menuItem.map((item, index) => (
        <div key={index} className="link" onClick={() => handleLinkClick(item.path)}>
          <img src={item.icon} alt={item.name} className="icon" />
          <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
        </div>
      ))} 
    
    {setitem.map((item, index) => (
        <div key={index} className="link1" onClick={() => handleLinkClick(item.path1)}>
          <img src={item.icon1} alt={item.name1} className="icon1" />
          <div style={{ display: isOpen ? "block" : "none" }} className="link_text1">{item.name1}</div>
        </div>
      ))} 
    </div>
   
       
  );
} 
export default Sidebar;

