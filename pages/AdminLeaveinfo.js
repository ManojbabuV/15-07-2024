import React, { useState, useEffect } from 'react';
import './styles.css';
import Sidebar from '../components/Sidebar';
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const AdminLeaveInfo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [newstatus, setStatus] = useState('');
  const [newrowId, setEditRowId] = useState(null);
  const [sickLeaveCount, setSickl] = useState(0);
  const [sick, setSick] = useState([]);
  const [casual, setCasual] = useState(0);
  const [Rolead, setRoleAd] = useState();
  const [casuall, setCasuall] = useState([]);
  const [paid, setPaid] = useState(0);
  const [paidedl, setPaidedl] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await Axios.get('http://192.168.1.151:3015/getUserRole'); 
        // const response = await Axios.get('http://localhost:3015/getUserRole'); 
        setUserRole(response.data.role);  
      } catch (error) {
        console.error('Error fetching user role:', error);
        setError('Error fetching user role. Please try again later.');
      }
    };
    fetchUserRole();
  }, []);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await Axios.get('http://192.168.1.151:3015/getRecords');
        // const response = await Axios.get('http://localhost:3015/getRecords');
        setEmployees(response.data.employees); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []);

  const handleSave = async (id) => {
    try {
      await Axios.put(`http://192.168.1.151:3015/update/${id}`, {
      // await Axios.put(`http://localhost:3015/update/${id}`, {
        newStatus: newstatus,
      });
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === id ? { ...employee, lev_status: newstatus } : employee
        )
      );
      setEditRowId(null);
      setStatus('');
      alert("Status updated successfully");
    } catch (error) {
      console.error('Error updating status:', error);
      alert("An error occurred, please try again later");
    }
  };

  const handleEdit = (id, status) => {
    setEditRowId(id);
    setStatus(status);
  };

  const handleDelete = async (id) => {
    try {
      // await Axios.delete(`http://localhost:3015/delete/${id}`);
      await Axios.delete(`http://192.168.1.151:3015/delete/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
      alert("Employee record deleted successfully");
    } catch (error) {
      console.error('Error deleting employee record:', error);
      alert("An error occurred, please try again later");
    }
  };

  const Leave = () => {
    navigate('/leave');
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        // const response = await Axios.get('http://192.168.1.151:3015/sickl');
        const response = await Axios.get('http://localhost:3015/sickl');
        setSickl(response.data.sickLeaveCount);
        setSick(response.data.sick);
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        // const response = await Axios.get('http://192.168.1.151:3015/casul');
        // const response = await Axios.get('http://localhost:3015/casul');
        const response = await Axios.get('http://localhost:3015/casul');
        setCasual(response.data.casual);
        setCasuall(response.data.casuall);
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);

  useEffect(() => {
    async function fetchTotal() {
      try {
        // const response = await Axios.get('http://192.168.1.151:3015/paided');
        const response = await Axios.get('http://localhost:3015/paided');
        setPaid(response.data.paid);
        setPaidedl(response.data.paidedl);
        console.log("Total employee count data fetched successfully");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotal();
  }, []);
  // useEffect(() => {
  //   async function fetchTotal() {
  //     try {
  //       const response = await Axios.get('http://192.168.1.151:3015/authcheck',{
  //         Rolead:Rolead
  //       })
  //    setRoleAd(response.data.user)
  //       console.log("Total employee count data fetched successfully");
  //     } catch (error) { 
  //       console.error("Unauthorized user access:", error);
  //     }
  //   }
  //   fetchTotal();
  // }, []);

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="leave-requests">
          <h2 className='test'>Leaves</h2>
          <div className="leave-summary">
            <div className="summary-card">
              <h3>12</h3>
              <p>Total Available Leaves</p>
            </div>
            <div className="summary-card2">
              <h3>{sick.map((sicked) => (
                <div key={sicked.id}>
                  <h3>{sicked.sickLeaveCount}</h3>
                </div>
              ))}</h3>
              <p>Total Sick Leaves</p>
            </div>
            <div className="summary-card3">
              <h3>{casuall.map((casuled) => (
                <div key={casuled.id}>
                  <h3>{casuled.casual}</h3>
                </div>
              ))}</h3>
              <p>Total Casual Leaves</p>
            </div>
            <div className="summary-card4">
              <h3>{paidedl.map((casuled) => (
                <div key={casuled.id}>
                  <h3>{casuled.paid}</h3>
                </div>
              ))}</h3>
              <p>Total Paid Earned Leaves</p>
            </div>
          </div>
          <div className='set'>
            <h2 className='test1'>All Leave Requests</h2>
            <button type="button" onClick={Leave} className='button-27' style={{ alignItems: "center", display: "flex", width: "125px", marginLeft: "0px", marginTop: "0px" }}>
              <img src={plus} alt="Apply Leave" height="20px" width="20px" style={{ marginLeft: "2px" }} />
              Apply Leave
            </button>
          </div>
          {/* {error && <p>{error}</p>} */}
          <table>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Employee ID</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Reason</th>
                <th>Leave Approved By</th>
                <th>Leave Status</th>
                <th>Action</th>  
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.leave_type}</td>
                  <td>{employee.employee_id}</td>
                  <td>{employee.start_date}</td>
                  <td>{employee.end_date}</td>
                  <td>{employee.lev_reason}</td>
                  <td>{employee.lev_approve}</td>
                  <td> 
                    {newrowId === employee.id ? (
                      <input
                        type="text"
                        value={newstatus}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    ) : (
                      employee.lev_status
                    )} 
                  </td> 
           
                    <td> 
                      {newrowId === employee.id ? (
                        <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fas fa-save"></i>
                          </div>
                        </button>
                      ) : (
                        <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee.id, employee.lev_status)}>
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fas fa-edit"></i>
                          </div>
                        </button>
                      )}
                      <button style={{ width: "30px" }} onClick={() => handleDelete(employee.id)} className='button-27'>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <i className="fas fa-trash"></i>
                        </div>
                      </button> 
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeaveInfo;

