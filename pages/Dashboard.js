 //original code

// import React, { useState, useEffect } from 'react';
// import GlobalStyle from '../component/GlobalStyle';
// import Header from '../component/Header';
// import EmployeeQuickActions from '../component/employee';
// import DashboardContent from '../component/DashboardContent';
// import Sidebar from '../components/Sidebar';
// // import { useNavigate, useLocation } from 'react-router-dom';

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isAdmin, setIsAdmin] = useState();
//   // const navigate = useNavigate();
//   // const location = useLocation();

//   // const generateRandomString = () => {
//   //   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
//   //   const length = 200; // Adjust the length as needed
  
//   //   let result = '';
//   //   for (let i = 0; i < length; i++) {
//   //     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   //   }
  
//   //   return result;
//   // };
//   // useEffect(() => {
//   //   const randomString = generateRandomString();
//   //   if (!location.pathname.includes(randomString)) {
//   //     navigate(`${location.pathname}-${randomString}`);
//   //   }
//   // }, []);
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white'; 
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []); 


//   return (
//     <div style={{ overflow: "hidden" }}>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <div className="App">
//           <GlobalStyle />
//           <Header />
//           {!isAdmin && <EmployeeQuickActions />}
//           <DashboardContent />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React, { useState, useEffect } from 'react';
import GlobalStyle from '../component/GlobalStyle';
import Header from '../component/Header';
import EmployeeQuickActions from '../component/employee';
import DashboardContent from '../component/DashboardContent';
import Sidebar from '../components/Sidebar'; 
// import { useNavigate, useLocation } from 'react-router-dom';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Ensure isAdmin is properly initialized


  // const navigate = useNavigate();
  // const location = useLocation();

  // const generateRandomString = () => {
  //   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  //   const length = 200; // Adjust the length as needed
  
  //   let result = '';
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  
  //   return result;
  // };
  // useEffect(() => {
  //   const randomString = generateRandomString();
  //   if (!location.pathname.includes(randomString)) {
  //     navigate(`${location.pathname}-${randomString}`);
  //   }
  // }, []);

  useEffect(() => {
    document.body.style.backgroundColor = 'white'; 
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  

  return (
    <div style={{ overflow: "hidden" }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="App">
          <GlobalStyle /> 
          <Header /> 
          {!isAdmin && <EmployeeQuickActions />}
          <DashboardContent />
  
        </div>
    
      </div>
    </div>
  );
}

export default Dashboard;
