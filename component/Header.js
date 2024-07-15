// import React from 'react';
// import styled from 'styled-components';

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <SearchBar placeholder="Search here" />
//       <UserContainer>
//         <UserInfo>
//           <UserName>Oskar Frantti Glen</UserName>
//           <UserRole>Shift Technologies Admin</UserRole>
//         </UserInfo>
//         <UserAvatar src="https://via.placeholder.com/50" alt="User Avatar" />
//       </UserContainer>
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const SearchBar = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   width: 300px;
// `;

// const UserContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserInfo = styled.div`
//   margin-right: 10px;
//   text-align: right;
// `;

// const UserName = styled.div`
//   font-weight: bold;
// `;

// const UserRole = styled.div`
//   color: gray;
//   font-size: 14px;
// `;

// const UserAvatar = styled.img`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
// `;

// export default Header;



// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import ProtectedRoute from '../Protected';
// import { useNavigate } from 'react-router-dom';
// import PendingLeaveRequests from '../pages/alert';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// // import './header.css'  
// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hasPendingRequests, setHasPendingRequests] = useState(false); 
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   const navigate  = useNavigate();
//  function send(){
//   navigate('/profile');
//  } 
//  const showAlertModal = () => {
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
// };
// const checkPendingRequests = async () => {
//   // Replace with actual logic to check pending requests
//   setHasPendingRequests(true); // Simulating that there are pending requests
// };

// useEffect(() => {
//   checkPendingRequests();
// }, []);
//   return (
//     <HeaderContainer>
//       <SearchBar placeholder="Search here"  />
//       <ButtonGroup>
//       <Button type="submit"  style={{marginRight:"150px"}} onClick={showAlertModal}>
//             <Nofication className="fas fa-bell"></Nofication> <NotificationDot />
//             {hasPendingRequests && <span className="dot"></span>}
//           </Button>
//       <PendingLeaveRequests isOpen={isModalOpen} onRequestClose={closeModal} />
//         <UserContainer>
//           <UserInfo>
//         <ProtectedRoute>{(role === "admin"&&   
//          <UserName onClick={send}  >Admin Profile</UserName>)}</ProtectedRoute> 
//         <ProtectedRoute>{(role === "employee" &&  <UserName onClick={send}  >Employee Profile</UserName>)} </ProtectedRoute>
//         <ProtectedRoute>{(role === "manager" &&  <UserName onClick={send}  >Manager Profile</UserName>)}
//         </ProtectedRoute>
//             <UserRole>STACKPOS Technologies Admin</UserRole>
//           </UserInfo>
//           <UserAvatar onClick={send}  src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1716358220~exp=1716361820~hmac=891c2eec04ad21fefd8763372e1b5e541649b86b1fc3720aaf904147b30092d3&w=740" alt="User Avatar" />
//         </UserContainer>
//       </ButtonGroup>
//     </HeaderContainer>
//   );
// };


// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const SearchBar = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   background-color:#fff;
//   width: 300px; 
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   margin-left:20px;
//   align-items: center;
// `;

// const ToggleButton = styled.button`
//   padding: 10px 20px;
//   margin-right: 20px;
//   background-color: #107f8e;
//   color: white;
//   border: none;
//   border-radius: 15px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #107f8e;
//   }
// `;

// const UserContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserInfo = styled.div`
//   margin-right: 10px;
//   text-align: right;
// `;

// const UserName = styled.div`
//   font-weight: bold;    
// `;

// const UserRole = styled.div`
//   color: gray;
//   font-size: 14px;
// `;

// const UserAvatar = styled.img`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px; 
// `;
// const Button = styled.button`
//  background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 24px;
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 60px;
//   margin-right: 270px; `;
// const Nofication = styled.i`
// color: #000;`;

// const NotificationDot = styled.dot`
//   height: 8px;
//   width: 8px;
//   background-color: red;
//   border-radius: 50%;
//   position: absolute;
//   top: 5px;
//   right: 5px;`;
// export default Header;


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProtectedRoute from '../Protected';
import { useNavigate } from 'react-router-dom';
import PendingLeaveRequests from '../pages/alert';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasPendingRequests, setHasPendingRequests] = useState(false);
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });
  const navigate = useNavigate();

  function send() {
    navigate('/profile');
  }

  const showAlertModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkPendingRequests = async () => {
    // Replace with actual logic to check pending requests
    setHasPendingRequests(true); // Simulating that there are pending requests
  };

  useEffect(() => {
    checkPendingRequests();
  }, []);

  return (
    <HeaderContainer>
      <SearchBar placeholder="Search here" />
      <ButtonGroup>
      <ProtectedRoute>
      {role === 'admin' &&    <Button type="submit" onClick={showAlertModal}>
          <Notification className="fas fa-bell"></Notification>
          {hasPendingRequests && <NotificationDot></NotificationDot>}
        </Button> }</ProtectedRoute>
        <ProtectedRoute>  {role === 'manager' &&    <Button type="submit" onClick={showAlertModal}>
          <Notification className="fas fa-bell"></Notification>
          {hasPendingRequests && <NotificationDot></NotificationDot>}
        </Button> }</ProtectedRoute>
        <PendingLeaveRequests isOpen={isModalOpen} onRequestClose={closeModal} />
        <UserContainer>
          <UserInfo>
            <ProtectedRoute>
              {role === 'admin' && <UserName onClick={send}>Admin Profile</UserName>}
            </ProtectedRoute>
            <ProtectedRoute>
              {role === 'employee' && <UserName onClick={send}>Employee Profile</UserName>}
            </ProtectedRoute>
            <ProtectedRoute>
              {role === 'manager' && <UserName onClick={send}>Manager Profile</UserName>}
            </ProtectedRoute>
            <UserRole>STACKPOS Technologies Admin</UserRole>
          </UserInfo>
          <UserAvatar
            onClick={send}
            src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1716358220~exp=1716361820~hmac=891c2eec04ad21fefd8763372e1b5e541649b86b1fc3720aaf904147b30092d3&w=740"
            alt="User Avatar"
          />
        </UserContainer>
      </ButtonGroup>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  width: 300px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-right: 10px;
  text-align: right;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserRole = styled.div`
  color: gray;
  font-size: 14px;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 60px;
  margin-right: 270px; /* Adjust as needed */
`;

const Notification = styled.i`
  color: #000;
`;

const NotificationDot = styled.span`
  height: 8px;
  width: 8px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export default Header;

