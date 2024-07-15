// src/components/EmployeeOnboard.js
import React, { useState ,useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../employee/header';
import StatsCards from '../employee/status'; 
import './emplo.css'; 
import EmployeeList from '../employee/adminemplist';
// import EmployeeList1 from '../employee/employeelist';

const EmployeeOnboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return (
    <div  style={{width:"auto"}} className="dashboard">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div style={{width:"auto"}} className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header />
        <div className="container">
          <StatsCards />
         <EmployeeList/> 
        </div>
      </div>
    </div>
  );
};

export default EmployeeOnboard;