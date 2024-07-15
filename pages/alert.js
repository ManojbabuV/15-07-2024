// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';

// const PendingLeaveRequests = ({ isOpen, onRequestClose }) => {
//   const [pending, setPending] = useState(null);
//   const [leavep, setLeaveP] = useState([]);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const checkPendingRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/alert');
//         setPending(response.data.leavep[0].pending);
//         setLeaveP(response.data.leavep);
//         setError(null);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error('Error:', error);
//       }
//     };

//     checkPendingRequests();
//   }, []);

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//       <h1>Check Pending Leave Requests</h1>
//       {pending !== null && leavep.map((task, index) => (
//         <p key={index}>Pending leave requests: {task.pending}</p>
//       ))}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <h2>Pending Leave Requests</h2>
//       <button onClick={onRequestClose}>Close</button>
//     </Modal>
//   );
// };

// export default PendingLeaveRequests;






// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const PendingLeaveRequests = ({ isOpen, onRequestClose }) => {
//   const [pending, setPending] = useState(null);
//   const [leavep, setLeaveP] = useState([]);
//   const [tasku, setTaskU] = useState(null);
//   const [task, setTask] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const checkPendingRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/alert');
//         setPending(response.data.leavep[0].pending);
//         setLeaveP(response.data.leavep);
//         setError(null);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error('Error:', error);
//       }
//     }; 
//     checkPendingRequests();
//   }, []);
//   useEffect(() => {
//     const checkPendingRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/alert2');
//         setTaskU(response.data.leavep[0].tasku);
//         setTask(response.data.task);
//         setError(null);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error('Error:', error);
//       }
//     }; 
//     checkPendingRequests();
//   }, []);
// function leave(){
//   navigate('/leaveinfo')
// }
//   return (
//     <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="modal-overlay">
//       <ModalContent>
//         <ModalHeader>
//           <h3>Check Pending Leave Requests</h3>
//           <CloseButton onClick={onRequestClose}>Close</CloseButton>
//         </ModalHeader>
//         {pending !== null && (
//           <Content>
//             <h2>Pending Leave Requests</h2>
//             {leavep.map((task, index) => (
//               <p key={index}>Pending leave requests: {task.pending}</p> 
//             ))}
//             <button onClick={leave} >Navigate </button>
//           </Content>
//         )}
//         {error && <ErrorText>Error: {error}</ErrorText>}
//       </ModalContent>
//       <ModalContent>
//         <ModalHeader>
//           <h3>Check Pending Task Requests</h3>
//           <CloseButton onClick={onRequestClose}>Close</CloseButton>
//         </ModalHeader>
//         {tasku !== null && (
//           <Content>
//             <h2>Pending Task Requests</h2>
//             {task.map((list) => (
//               <p key={list.id}>Pending Task requests: {list.tasku}</p> 
//             ))}
//             <button onClick={leave} >Navigate </button>
//           </Content>
//         )}
//         {error && <ErrorText>Error: {error}</ErrorText>}
//       </ModalContent>
//     </CustomModal>
//   );
// };

// const CustomModal = styled(Modal)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width: 90%;
//   width: 500px;
//   max-height: 90%;
//   overflow-y: auto;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   outline: none;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CloseButton = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
// `;

// const Content = styled.div`
//   margin-top: 20px;
// `;

// const ErrorText = styled.p`
//   color: red;
// `;

// export default PendingLeaveRequests;




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PendingLeaveRequests = ({ isOpen, onRequestClose }) => {
  const [pendingLeave, setPendingLeave] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [pendingTasks, setPendingTasks] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingLeave = async () => {
      try {
        const response = await axios.get('http://localhost:3015/alert');
        setPendingLeave(response.data.leavep[0].pending);
        setLeaveRequests(response.data.leavep);
        setError(null);
      } catch (error) {
        setError('Error fetching pending leave data');
        console.error('Error:', error);
      }
    };

    const fetchPendingTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3015/alert2');
        setPendingTasks(response.data.task[0].tasku);
        setTasks(response.data.task);
        setError(null);
      } catch (error) {
        setError('Error fetching pending tasks data');
        console.error('Error:', error);
      }
    };

    fetchPendingLeave();
    fetchPendingTasks();
  }, []);

  const navigateToLeaveInfo = () => {
    navigate('/leaveinfo');
  };
  const navigateTaskInfo = () => {
    navigate('/employeeTime');
  };

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="modal-overlay">
      <ModalContent>
        <ModalHeader>
          <h3>Employee Pending Requests</h3>
          <CloseButton onClick={onRequestClose}>Close</CloseButton>
        </ModalHeader>
        {pendingLeave !== null && (
          <Content>
            <h4>Leave Request count</h4>
            {leaveRequests.map((task, index) => (
              <h4 style={{marginLeft:"10px",color:'orange'}} key={index}>  :   {task.pending}</h4>
            ))}
            <ButtonContainer>
              <NavigateButton onClick={navigateToLeaveInfo}>View Leave Info</NavigateButton>
            </ButtonContainer>
          </Content>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </ModalContent>

      <ModalContent>
        <ModalHeader> 
        </ModalHeader>
        {pendingTasks !== null && (
          <Content>
            <h4>Task Request count</h4>
            {tasks.map((list) => (
              <h4 style={{marginLeft:"10px",color:'orange'}} key={list.id}> :   {list.tasku}</h4>
            ))}
            <ButtonContainer>
              <NavigateButton2 onClick={navigateTaskInfo}>View Task info </NavigateButton2>
            </ButtonContainer>
          </Content>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </ModalContent>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  width: 600px;
  max-height: 90%;
  overflow-y: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color:red;
  font-weight:bold;
  cursor: pointer;
  font-size: 16px;
`;

const Content = styled.div`
  margin-top: 20px;
  display:flex;
`;

const ErrorText = styled.p`
  color: red;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

const NavigateButton = styled.button`
  padding: 5px 5px;
  background-color: #107f8e;
  color: #fff;
  border: #107f8e;
  border-radius: 4px;
  margin-left:160px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #107f8e;
  }
`;
const NavigateButton2 = styled.button`
  padding: 5px 5px;
  background-color: #107f8e;
  color: #fff;
  border: #107f8e;
  border-radius: 4px;
  margin-left:170px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #107f8e;
  }
`;

export default PendingLeaveRequests;
