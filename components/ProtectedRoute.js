// import React, { useEffect, useState } from 'react';
// import { Route,   Navigate } from 'react-router-dom';
// import axios from 'axios';

// const ProtectedRoute = ({ component: Component, role, ...rest }) => {
//   const [userRole, setUserRole] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/protect', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         setUserRole(response.data.role);
//       } catch (error) {
//         console.error('Error fetching user role:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUserRole();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         userRole === role ? <Component {...props} /> : <Navigate to="/unauthorized" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;









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
   