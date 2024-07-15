// src/components/EmployeeOnboard.js
import React, { useState ,useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../employee/header';
import StatsCards from '../employee/status';
import EmployeeList from '../employee/employeelist';
import './emplo.css';
import AdminEmployeeList from '../employee/Adminemployeel';

const AdminEmployeeOnboard = () => {
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
         <AdminEmployeeList/> 
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeeOnboard;
