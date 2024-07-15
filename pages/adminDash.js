import React, {useState,useEffect}from 'react';
import GlobalStyle from '../component/GlobalStyle';
import Header from '../component/Header';
import QuickActions from '../component/QuickScan';
import DashboardContent from '../component/DashboardContent';
import Sidebar from '../components/Sidebar' 
import EmployeeQuickActions from '../component/employee';
import ProtectedRoute from '../Protected';

function AdminDashboard()  {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(); 
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });
  useEffect(() => { 
    document.body.style.backgroundColor = 'white'; 
    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return ( 
    <div style={{ overflow: "hidden"}}>
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="App">
      <GlobalStyle />
      {/* <button type='submit' className='button-27' onClick={showAlertModal}>Alert</button> */}
      <Header />
      {/* <button style={{borderColor:"black",color:"black",borderRadius:"20px",marginLeft:"20px"}} onClick={toggleDashboard}>
        {isAdmin ? 'Switch to Employee Dashboard' : 'Switch to Admin Dashboard'}  
      </button>  */} 
      {/* {(!isAdmin ? <QuickActions/>:<EmployeeQuickActions/> )}  */}
      <ProtectedRoute>{(role === 'admin'? <QuickActions/>: <EmployeeQuickActions/> )}</ProtectedRoute> 

       
      <DashboardContent />
    </div>
      </div> 
    </div> 
  )
} 
export default AdminDashboard;
 