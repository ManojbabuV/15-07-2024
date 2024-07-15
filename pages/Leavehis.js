// // LeaveHistory.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');

// const LeaveHistory = ({ isOpen, onRequestClose }) => {
//   const [employee_id, setEmployeeId] = useState('');
//   const [leaveHistory, setLeaveHistory] = useState([]);
//   const [error, setError] = useState('');

//   const fetchLeaveHistory = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3015/leavehistory/${employee_id}`);
//       setLeaveHistory(response.data.leaveHistory);
//       setError('');  
//     } catch (error) {
//       console.error('Error fetching leave history:', error);
//       setError('Error fetching leave history. Please try again later.');
//       setLeaveHistory([]); 
//     }
//   }; 
//   useEffect(() => {
//     if (employee_id.trim() !== '') {
//       fetchLeaveHistory();
//     }
//   }, [employee_id]); 
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Employee Leave History"
//       style={{
//         overlay: {
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         },
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//         },
//       }}
//     >
//       <h2>Employee Leave History</h2>
//       <button onClick={onRequestClose} className='button-27'>Close</button>
//       <div>
//         <label htmlFor="employeeIdInput">Enter Employee ID:</label>
//         <input
//           type="text"
//           id="employeeIdInput"
//           value={employee_id}
//           onChange={(e) => setEmployeeId(e.target.value)}
//         />
//         <button className='button-27' onClick={fetchLeaveHistory}>Search</button>
//       </div>
//       {error && <p>{error}</p>}
//       <div>
//         <h3>Leave History Table</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Approver</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveHistory.map((leave, index) => (
//               <tr key={index}>
//                 <td>{leave.start_date}</td>
//                 <td>{leave.end_date}</td>
//                 <td>{leave.lev_approve}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Modal>
//   );
// };

// export default LeaveHistory;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; 
Modal.setAppElement('#root');

const LeaveHistory = ({ isOpen, onRequestClose }) => {
  const [employee_id, setEmployeeId] = useState('');
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [error, setError] = useState('');

  const fetchLeaveHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:3015/leavehistory/${employee_id}`);
      setLeaveHistory(response.data.leaveHistory);
      setError('');  
    } catch (error) {
      console.error('Error fetching leave history:', error);
      setError('Error fetching leave history. Please try again later.');
      setLeaveHistory([]); 
    }
  };  

  useEffect(() => {
    if (employee_id.trim() !== '') {
      fetchLeaveHistory();
    }
  }, [employee_id]);

  const handleSearch = () => {
    fetchLeaveHistory();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Employee Leave History"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Employee Leave History</h2>
      <button onClick={onRequestClose} className='button-27'>Close</button>
      <div>
        <label htmlFor="employeeIdInput">Enter Employee ID:</label>
        <input
          type="text"
          id="employeeIdInput"
          value={employee_id}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button onClick={handleSearch} className="button-27">Search</button>
      </div>
      {error && <p>{error}</p>}
      <div>
        <h3>Leave History Table</h3>
        <table>
          <thead>
            <tr>
              <th>Leave type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Approver</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave, index) => (
              <tr key={index}>
                <td>{leave.leave_type}</td>
                <td>{leave.start_date}</td>
                <td>{leave.end_date}</td>
                <td>{leave.lev_approve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default LeaveHistory;
