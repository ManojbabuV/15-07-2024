 
 

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
  const userRole = sessionStorage.getItem('userRole'); 

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } 

  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" />;
  }  
  return children;
}; 

export default ProtectedRoute;



// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ role, children }) => {
//   const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
//   const userRole = sessionStorage.getItem('userRole'); 

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   } 

//   if (role && userRole !== role) {
//     return <Navigate to="/unauthorized" />;
//   } 

//   return children;
// }; 

// export default ProtectedRoute;
