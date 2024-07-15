
// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import Axios from 'axios';
// import { useLinkClickHandler, useNavigate } from 'react-router-dom';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [employee,setEmployees] = useState()
//   const [showProfiles, setShowProfiles] = useState(false);  
//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//           const response = await Axios.get('http://192.168.1.151:3015/setting');
//         // const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);  
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   };
//   const navigate = useNavigate()
//   const handleDelete = async (id) => {
//     try {
//        await Axios.delete(`http://192.168.1.151:3015/empdelete/${id}`);
//        // await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setEmployees((prevEmployees) =>
//         prevEmployees.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
 
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };
//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <ParentComponent onSearch={handleSearch} />
//       <button  style={{marginBottom:"20px"}}className="button-27"onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Position</th>
//             <th>Employee ID</th> 
//             <th>Work mail</th>
//             <th>Mobile</th>
//             <th>Location</th> 
//             <th>Hired by Manager</th> 
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDetails.map((employee) => (
//             <tr key={employee.id}>  
//               <td>{employee.employee_name}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.employee_id}</td> 
//               <td>{employee.work_email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.permanent}</td>
//               <td>{employee.reporting}</td>
//               <td>
//               <button style={{width:"30px"}} onClick={()=>handleDelete(employee.id)} className='button-27'>
//                       <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
//                         <i className="fas fa-trash"></i>
//                       </div>   
//               </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;











//woking code


// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
  
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [lastRowid, setEditRowId] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     uemployee_name: '',
//     udesignation: '',
//     uemployee_id: '',
//     uwork_email: '',
//     umobile: '',
//     upermanent: '',
//     ureporting: ''
//   });

//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);
//         setEmployees(response.data.details);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || 
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   };
 
//   const navigate = useNavigate();

//   const handleDelete = async (id) => {
//     try {
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setEmployees((prevEmployees) =>
//         prevEmployees.filter((employee) => employee.id !== id)
//       );
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       // await Axios.put(`http://192.168.1.151:3015/emptableupdate/${id}`, editFormData);
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setEmployees((prevEmployees) =>
//         prevEmployees.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//      );
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };
//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <ParentComponent onSearch={handleSearch} />
//       <button style={{ marginBottom: '20px' }} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Name</th>
//               <th>Position</th>
//               <th>Employee ID</th>
//               <th>Work Email</th>
//               <th>Mobile</th>
//               <th>Location</th>
//               <th>Hired by Manager</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredDetails.map((employee) => (
//               <tr key={employee.id}>
//                 {lastRowid === employee.id ? (
//                   <>
//                     <td><input type="text" className='collect' name="employee_name" value={editFormData.employee_name} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="designation" value={editFormData.designation} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="employee_id" value={employee.employee_id} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="work_email" value={editFormData.work_email} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="permanent" value={editFormData.permanent} onChange={handleChange} /></td>
//                     <td><input type="text" className='collect' name="reporting" value={editFormData.reporting} onChange={handleChange} /></td>
//                     <td>
//                     {lastRowid === employee.id ? (
//                       <button style={{width:"30px"}} className='button-27' onClick={() => handleSave(employee.id)}>
//                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
//                           <i className="fas fa-save"></i>
//                         </div>  
//                       </button>

//                     ) : (
//                       <button style={{width:"30px"}} className='button-27' onClick={() => handleEdit(employee.id,  employee.id.employee_name,employee.designation,employee.employee_id,employee.work_email,employee.mobile,employee.permanent,employee.reporting)}>
//                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
//                           <i className="fas fa-edit"></i>
//                         </div>  
//                       </button>
//                     )}
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{employee.employee_name}</td>
//                     <td>{employee.designation}</td>
//                     <td>{employee.employee_id}</td>
//                     <td>{employee.work_email}</td>
//                     <td>{employee.mobile}</td>
//                     <td>{employee.permanent}</td>
//                     <td>{employee.reporting}</td>
//                     <td style={{ display: 'flex', alignItems: 'center' }}>
//                     {lastRowid === employee.id ? (
//                       <button style={{width:"30px"}} className='button-27' onClick={() => handleSave(employee.id)}>
//                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
//                           <i className="fas fa-save"></i>
//                         </div>  
//                       </button>

//                     ) : (
//                       <button style={{width:"30px"}} className='button-27' onClick={() => handleEdit(employee.id,  employee.id.employee_name,employee.designation,employee.employee_id,employee.work_email,employee.mobile,employee.permanent,employee.reporting)}>
//                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
//                           <i className="fas fa-edit"></i>
//                         </div>  
//                       </button>
//                     )}
//                       <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                         <i className="fas fa-trash"></i>
//                       </button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;
 






















// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import AdminParentComponent from './adminSearch';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ProtectedRoute from '../Protected';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [editRowId, setEditRowId] = useState(null);
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   const [editFormData, setEditFormData] = useState({
//     employee_name: '',
//     designation: '',
//     employee_id: '',
//     work_email: '',
//     mobile: '',
//     permanent: '',
//     reporting: ''
//   });

//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };
//   const convertToCSV = (data) => {
//     const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
//     const array = [fields].concat(data.map(item => fields.map(field => item[field])));
//     return array.map(it => it.join(',')).join('\n');
//   }; 
//   const downloadCSV = (data, filename = 'data.csv') => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }; 
//   const handleDownloadIndividual = (employee) => {
//     downloadCSV([employee], `employee_${employee.id}.csv`);
//   }; 
//   const handleDownloadAll = () => {
//     downloadCSV(details, 'all_employees.csv');
//   }; 
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/setting');
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []); 
//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || 
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   }; 
//   const handleDelete = async (id) => {
//     try {
//       // await Axios.delete(`http://192.168.1.151:3015/empdelete/${id}`);
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       // await Axios.put(`http://192.168.1.151:3015/emptabupdate/${id}`, editFormData);
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <AdminParentComponent onSearch={handleSearch} />
//       <button  style={{width:"170px"}} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       <button className='button-27' style={{ marginTop:"0px",width: "220px" }} onClick={handleDownloadAll}>
//         Download All Data
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Position</th>
//                 <th>Employee ID</th>
//                 <th>Work Email</th>
//                 <th>Mobile</th>
//                 <th>Location</th>
//                 <th>Hired by Manager</th>
//                 <ProtectedRoute>{(role ==='admin' && <th>Action</th>)}</ProtectedRoute> 
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDetails.map((employee) => (
//                 <tr key={employee.id}>
//                   {editRowId === employee.id ? (
//                     <>
//                       <td><input type="text" className='collect' placeholder='employee name' name="employee_name" value={editFormData.employee_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='father name'  name="father name" value={editFormData.father_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee id' name="employee_id" value={editFormData.employee_id} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='personal email id' name="personal email " value={editFormData.personal_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Mobile number'name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='work email id'name="work_email" value={editFormData.work_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='gender 'name="gender" value={editFormData.gender} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='current location'name="location" value={editFormData.location} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='permanent location'name="permanent" value={editFormData.permanent} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='date of birth' name="dob" value={editFormData.dob} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='marital status'name="marital status" value={editFormData.marital_status} onChange={handleChange} /></td> 
//                       <td><input type="text" className='collect' placeholder='employee_Ref id'name="employee_Ref" value={editFormData.employee_Ref} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee remark'name="remark" value={editFormData.remark} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee department' name="department" value={editFormData.department} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee idesignationd' name="designation" value={editFormData.designation} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='HR name' name="reporting" value={editFormData.reporting} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='PAN card number' name="pan_no" value={editFormData.pan_no} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Aadhar number' name="aadhar" value={editFormData.aadhar} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank account number' name="bankac" value={editFormData.bankac} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank name' name="bankName" value={editFormData.bankName} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='uan number' name="uan number" value={editFormData.uanno} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='pf number' name="pfno" value={editFormData.pfno} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder=' start join date' name="join-date" value={editFormData.blood_G} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Blood Group' name="join-date" value={editFormData.startjoin} onChange={handleChange} /></td>
//                       <td>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-save"></i>
//                           </div>
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{employee.employee_name}</td>
//                       <td>{employee.designation}</td>
//                       <td>{employee.employee_id}</td>
//                       <td>{employee.work_email}</td>
//                       <td>{employee.mobile}</td>
//                       <td>{employee.permanent}</td>
//                       <td>{employee.reporting}</td>
//                    <ProtectedRoute>{(role === 'admin'&&
//                       <td style={{ display: 'flex', alignItems: 'center' }}>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-edit"></i>
//                           </div>   
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                           <i className="fas fa-trash"></i>
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                     <i className="fas fa-download"></i>
//                   </button>
//                       </td>)}</ProtectedRoute> 
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;



 















// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import AdminParentComponent from './adminSearch';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ProtectedRoute from '../Protected';
// import EditEmployeeModal from './employeeModel'; // Import the modal component

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [editRowId, setEditRowId] = useState(null);
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   const [editFormData, setEditFormData] = useState({
//     uemployee_name: '',
//     ufather_name:'',
//     udesignation: '', 
//     uemployee_id: '',
//     upersonal_email:'',
//     uwork_email: '',
//     ugender:'',
//     udob:'',
//     umarital_status:'',
//     ulocation:'',
//     uemployee_Ref:'',
//     uremark:'',
//     udepartment:'',  
//     upan_no:'',
//     uaadhar:'',
//     ubankac:'',
//     uuanno:'',
//     upfno:'',
//     ustartjoin:'',
//     ubankName:'',
//     ublood_G:'',
//     umobile: '',
//     upermanent: '',
//     ureporting: ''
//   });
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false); 

//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };

//   const convertToCSV = (data) => {
//     const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
//     const array = [fields].concat(data.map(item => fields.map(field => item[field])));
//     return array.map(it => it.join(',')).join('\n');
//   };

//   const downloadCSV = (data, filename = 'data.csv') => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }; 
//   const handleDownloadIndividual = (employee) => {
//     downloadCSV([employee], `employee_${employee.id}.csv`);
//   }; 
//   const handleDownloadAll = () => {
//     downloadCSV(details, 'all_employees.csv');
//   };

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/setting');
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || 
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   };

//   const handleDelete = async (id) => {
//     try {
//       // await Axios.delete(`http://192.168.1.151:3015/empdelete/${id}`);
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//     setIsEditModalOpen(true); // Open the modal
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       // await Axios.put(`http://192.168.1.151:3015/emptabupdate/${id}`, editFormData);
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       setIsEditModalOpen(false); // Close the modal
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <AdminParentComponent onSearch={handleSearch} />
//       <button style={{width:"170px"}} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       <button className='button-27' style={{ marginTop:"0px",width: "220px" }} onClick={handleDownloadAll}>
//         Download All Data
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Position</th>
//                 <th>Employee ID</th>
//                 <th>Work Email</th>
//                 <th>Mobile</th>
//                 <th>Location</th>
//                 <th>Hired by Manager</th>
//                 <ProtectedRoute>{(role === 'admin' && <th>Action</th>)}</ProtectedRoute> 
//                 <ProtectedRoute>{(role === 'manager' && <th>Action</th>)}</ProtectedRoute> 
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDetails.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.employee_name}</td>
//                   <td>{employee.designation}</td>
//                   <td>{employee.employee_id}</td>
//                   <td>{employee.work_email}</td>
//                   <td>{employee.mobile}</td>
//                   <td>{employee.permanent}</td>
//                   <td>{employee.reporting}</td>
//                   <ProtectedRoute>{(role === 'admin' &&
//                   <td style={{ display: 'flex', alignItems: 'center' }}>
//                     <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fas fa-edit"></i>
//                       </div>   
//                     </button>
//                     <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                       <i className="fas fa-trash"></i>
//                     </button>
//                     <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                       <i className="fas fa-download"></i>
//                     </button>
//                   </td>)}</ProtectedRoute> 
//                   <ProtectedRoute>{(role === 'manager' &&
//                   <td style={{ display: 'flex', alignItems: 'center' }}>
//                     <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fas fa-edit"></i>
//                       </div>   
//                     </button>
//                     <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                       <i style={{alignItems:"center"}}className="fas fa-trash"></i>
//                     </button>
//                     <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                       <i className="fas fa-download"></i>
//                     </button>
//                   </td>)}</ProtectedRoute> 
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <EditEmployeeModal
//         isOpen={isEditModalOpen}
//         onRequestClose={() => setIsEditModalOpen(false)}
//         editFormData={editFormData}
//         handleChange={handleChange}
//         handleSave={handleSave}
//       />
//     </div>
//   );
// };

// export default EmployeeList;


// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import ParentComponent from './parentsearch';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [editRowId, setEditRowId] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     employee_name: '',
//     designation: '',
//     employee_id: '',
//     work_email: '',
//     mobile: '',
//     permanent: '',
//     reporting: ''
//   });

//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };
//   const convertToCSV = (data) => {
//     const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
//     const array = [fields].concat(data.map(item => fields.map(field => item[field])));
//     return array.map(it => it.join(',')).join('\n');
//   }; 
//   const downloadCSV = (data, filename = 'data.csv') => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }; 
//   const handleDownloadIndividual = (employee) => {
//     downloadCSV([employee], `employee_${employee.id}.csv`);
//   }; 
//   const handleDownloadAll = () => {
//     downloadCSV(details, 'all_employees.csv');
//   }; 
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/setting');
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []); 
//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || 
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   }; 
//   const handleDelete = async (id) => {
//     try {
//       // await Axios.delete(`http://192.168.1.151:3015/empdelete/${id}`);
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       // await Axios.put(`http://192.168.1.151:3015/emptabupdate/${id}`, editFormData);
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <ParentComponent onSearch={handleSearch} />
//       <button style={{ marginBottom: '20px' }} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       <button className='button-27' style={{ width: "220px" }} onClick={handleDownloadAll}>
//         Download All Data
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Position</th>
//                 <th>Employee ID</th>
//                 <th>Work Email</th>
//                 <th>Mobile</th>
//                 <th>Location</th>
//                 <th>Hired by Manager</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDetails.map((employee) => (
//                 <tr key={employee.id}>
//                   {editRowId === employee.id ? (
//                     <>
//                       <td><input type="text" className='collect' name="employee_name" value={editFormData.employee_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="designation" value={editFormData.designation} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="employee_id" value={editFormData.employee_id} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="work_email" value={editFormData.work_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="permanent" value={editFormData.permanent} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' name="reporting" value={editFormData.reporting} onChange={handleChange} /></td>
//                       <td>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-save"></i>
//                           </div>
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{employee.employee_name}</td>
//                       <td>{employee.designation}</td>
//                       <td>{employee.employee_id}</td>
//                       <td>{employee.work_email}</td>
//                       <td>{employee.mobile}</td>
//                       <td>{employee.permanent}</td>
//                       <td>{employee.reporting}</td>
//                       <td style={{ display: 'flex', alignItems: 'center' }}>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-edit"></i>
//                           </div>
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                           <i className="fas fa-trash"></i>
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                     <i className="fas fa-download"></i>
//                   </button>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;


 

//functionality work here
// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import AdminParentComponent from './adminSearch';
// import EmployeeCard from './employeecard';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState('');
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [editRowId, setEditRowId] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     employee_name: '',
//     father_name: '',
//     designation: '',
//     employee_id: '',
//     personal_email: '',
//     work_email: '',
//     gender: '',
//     location: '',
//     dob: '',
//     marital_status: '', 
//     employee_Ref: '',
//     remark: '',
//     department: '',
//     pan_no: '',
//     aadhar: '',
//     bankac: '',
//     uanno: '',
//     pfno: '',
//     bankName: '',
//     blood_G: '',
//     mobile: '',
//     permanent: '',
//     reporting: ''
//   });

//   const role = sessionStorage.getItem('userRole') || '';

//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };

//   const handleDownloadAll = () => {
//     downloadCSV(details, 'all_employees.csv');
//   };

//   const convertToCSV = (data) => {
//     const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
//     const csvData = data.map(item => fields.map(field => item[field] || '').join(',')).join('\n');
//     return `${fields.join(',')}\n${csvData}`;
//   };

//   const downloadCSV = (data, filename = 'data.csv') => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const fetchRecords = async () => {
//     try {
//       const response = await Axios.get('http://localhost:3015/setting');
//       setDetails(response.data.details);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data. Please try again later.');
//     }
//   };

//   useEffect(() => {
//     fetchRecords();
//   }, []);

//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' ||
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   const handleDownloadIndividual = (employee) => {
//     downloadCSV([employee], `employee_${employee.id}.csv`);
//   };

//   return (
//     <div style={{ backgroundColor: 'white', overflow: 'auto' }}>
//       <AdminParentComponent onSearch={handleSearch} />
//       <button style={{ width: "170px" }} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       <button className='button-27' style={{ marginTop: "0px", width: "220px" }} onClick={handleDownloadAll}>
//         Download All Data
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Position</th>
//                 <th>Employee ID</th>
//                 <th>Work Email</th>
//                 <th>Mobile</th>
//                 <th>Location</th>
//                 <th>Father Name</th>
//                 <th>Hired by Manager</th>
//                 {role === 'admin' && <th>Action</th>}
//                 {role === 'manager' && <th>Action</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDetails.map((employee) => (
//                 <tr key={employee.id}>
//                   {editRowId === employee.id ? (
//                     <>
//                       <td><input type="text" className='collect' placeholder='Employee Name' name="employee_name" value={editFormData.employee_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Father Name' name="father_name" value={editFormData.father_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Employee ID' name="employee_id" value={editFormData.employee_id} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Work Email' name="work_email" value={editFormData.work_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Mobile' name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='current location' name="location" value={editFormData.location} onChange={handleChange} /></td>
//                       <td><input  type="text" className='collect' placeholder='Hired by Manager' name="reporting" value={editFormData.reporting} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Personal Email' name="personal_email" value={editFormData.personal_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Designation' name="designation" value={editFormData.designation} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Department' name="department" value={editFormData.department} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Gender ' name="gender" value={editFormData.gender} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='marital status' name="marital_status" value={editFormData.marital_status} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='date of birth' name="dob" value={editFormData.dob} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='blood group' name="blood_G" value={editFormData.blood_G} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='permanent location ' name="permanent" value={editFormData.permanent} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Remark status' name="remark" value={editFormData.remark} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='join date,' name="startjoin" value={editFormData.startjoin} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee reference id' name="employee ref" value={editFormData.employee_Ref} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank name ' name="bankName" value={editFormData.bankName} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank A/C number' name="bankac" value={editFormData.bankac} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Aadhar number' name="aadhar" value={editFormData.aadhar} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='PAN number' name="pan_no" value={editFormData.pan_no} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='UAN number' name="uanno" value={editFormData.uanno} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='PF number' name="pfno" value={editFormData.pfno} onChange={handleChange} /></td>
//                       <td>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-save"></i>
//                           </div>
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{employee.employee_name}</td>
//                       <td>{employee.designation}</td>
//                       <td>{employee.employee_id}</td>
//                       <td>{employee.work_email}</td> 
//                       <td>{employee.mobile}</td> 
//                       <td>{employee.location}</td>
//                       <td>{employee.father_name}</td>
//                       <td>{employee.reporting}</td>
//                       {(role === 'admin' || role === 'manager') &&
//                         <td style={{ display: 'flex', alignItems: 'center' }}>
//                           <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                               <i className="fas fa-edit"></i>
//                             </div>
//                           </button>
//                           <button className='button-27' style={{ width: "30px", marginLeft: "5px" }} onClick={() => handleDelete(employee.id)}>
//                             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                               <i className="fas fa-trash"></i>
//                             </div>
//                           </button>
//                           <button className='button-27' style={{ width: "30px", marginLeft: "5px" }} onClick={() => handleDownloadIndividual(employee)}>
//                             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                               <i className="fas fa-download"></i>
//                             </div>
//                           </button>
//                         </td>
//                       }
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }; 
// export default EmployeeList;

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AdminParentComponent from './adminSearch';
import EmployeeCard from './employeecard';

const EmployeeList = () => {
  const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
  const [error, setError] = useState('');
  const [details, setDetails] = useState([]);
  const [showProfiles, setShowProfiles] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    employee_name: '',
    father_name: '',
    designation: '',
    employee_id: '',
    personal_email: '',
    work_email: '',
    gender: '',
    location: '',
    dob: '',
    marital_status: '',
    employee_Ref: '',
    remark: '',
    department: '',
    pan_no: '',
    aadhar: '',
    bankac: '',
    uanno: '',
    pfno: '',
    bankName: '',
    blood_G: '',
    mobile: '',
    permanent: '',
    reporting: ''
  });

  const role = sessionStorage.getItem('userRole') || '';

  const handleSearch = (filters) => {
    setFilters(filters);
  };

  const handleDownloadAll = () => {
    downloadCSV(details, 'all_employees.csv');
  };

  const convertToCSV = (data) => {
    const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
    const csvData = data.map(item => fields.map(field => item[field] || '').join(',')).join('\n');
    return `${fields.join(',')}\n${csvData}`;
  };

  const downloadCSV = (data, filename = 'data.csv') => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fetchRecords = async () => {
    try {
      const response = await Axios.get('http://localhost:3015/setting');
      setDetails(response.data.details);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const filteredDetails = details.filter((employee) => {
    return (
      (filters.searchTerm === '' ||
        employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (filters.status === '' || employee.status === filters.status) &&
      (filters.priority === '' || employee.priority === filters.priority)
    );
  });

  const toggleDisplay = () => {
    setShowProfiles(!showProfiles);
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:3015/empdelete/${id}`);
      setDetails((prevDetails) =>
        prevDetails.filter((employee) => employee.id !== id)
      );
      alert("Employee record deleted successfully");
    } catch (error) {
      console.error('Error deleting employee record:', error);
      alert("An error occurred, please try again later");
    }
  };

  const handleEdit = (employee) => {
    setEditRowId(employee.id);
    setEditFormData({ ...employee }); // Copying employee object to editFormData
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSave = async (id) => {
  //   try {
  //     await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
  //     setDetails((prevDetails) =>
  //       prevDetails.map((employee) =>
  //         employee.id === id ? { ...employee, ...editFormData } : employee
  //       )
  //     );
  //     setEditRowId(null);
  //     alert('Employee records updated successfully');
  //   } catch (error) {
  //     console.error('Error updating employee record:', error);
  //     alert('An error occurred, please try again later');
  //   }
  // };

  const handleSave = async (id) => {
    try {
      await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
      // Assuming your backend returns the updated employee object, use that object
      const updatedEmployee = { ...editFormData, id }; // Adjust according to your backend response structure
      setDetails((prevDetails) =>
        prevDetails.map((employee) =>
          employee.id === id ? updatedEmployee : employee
        )
      );
      setEditRowId(null);
      alert('Employee records updated successfully');
    } catch (error) {
      console.error('Error updating employee record:', error);
      alert('An error occurred, please try again later');
    }
  };
  
  const handleDownloadIndividual = (employee) => {
    downloadCSV([employee], `employee_${employee.id}.csv`);
  };

  return (
    <div style={{ backgroundColor: 'white', overflow: 'auto' }}>
      <AdminParentComponent onSearch={handleSearch} />
      <button style={{ width: "170px" }} className="button-27" onClick={toggleDisplay}>
        {showProfiles ? 'Show Table' : 'Show Profiles'}
      </button>
      <button className='button-27' style={{ marginTop: "0px", width: "220px" }} onClick={handleDownloadAll}>
        Download All Data
      </button>
      {showProfiles ? (
        <div className="employee-list">
          {filteredDetails.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Position</th>
                <th>Employee ID</th>
                <th>Work Email</th>
                <th>Mobile</th>
                <th>Location</th>
                <th>Hired by Manager</th>
                {(role === 'admin' || role === 'manager') && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredDetails.map((employee) => (
                <tr key={employee.id}>
                  {editRowId === employee.id ? (
                    <>
                      <td><input type="text" className='collect' placeholder='Employee Name' name="employee_name" value={editFormData.employee_name} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Father Name' name="father_name" value={editFormData.father_name} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Employee ID' name="employee_id" value={editFormData.employee_id} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Work Email' name="work_email" value={editFormData.work_email} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Mobile' name="mobile" value={editFormData.mobile} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='current location' name="location" value={editFormData.location} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Hired by Manager' name="reporting" value={editFormData.reporting} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Personal Email' name="personal_email" value={editFormData.personal_email} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Designation' name="designation" value={editFormData.designation} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Department' name="department" value={editFormData.department} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Gender ' name="gender" value={editFormData.gender} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='marital status' name="marital_status" value={editFormData.marital_status} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='date of birth' name="dob" value={editFormData.dob} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='blood group' name="blood_G" value={editFormData.blood_G} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='permanent location ' name="permanent" value={editFormData.permanent} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Remark' name="remark" value={editFormData.remark} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='join date,' name="startjoin" value={editFormData.startjoin} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='employee reference id' name="employee_Ref" value={editFormData.employee_Ref} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='bank name ' name="bankName" value={editFormData.bankName} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='bank A/C number' name="bankac" value={editFormData.bankac} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='Aadhar number' name="aadhar" value={editFormData.aadhar} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='PAN number' name="pan_no" value={editFormData.pan_no} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='UAN number' name="uanno" value={editFormData.uanno} onChange={handleChange} /></td>
                      <td><input type="text" className='collect' placeholder='PF number' name="pfno" value={editFormData.pfno} onChange={handleChange} /></td>
                      <td>
                        <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fas fa-save"></i>
                          </div>
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{employee.employee_name}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.employee_id}</td>
                      <td>{employee.work_email}</td>
                      <td>{employee.mobile}</td>
                      <td>{employee.location}</td>
                      <td>{employee.reporting}</td>
                      {(role === 'admin' || role === 'manager') &&
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                          <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <i className="fas fa-edit"></i>
                            </div>
                          </button>
                          <button className='button-27' style={{ width: "30px", marginLeft: "5px" }} onClick={() => handleDelete(employee.id)}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <i className="fas fa-trash"></i>
                            </div>
                          </button>
                          <button className='button-27' style={{ width: "30px", marginLeft: "5px" }} onClick={() => handleDownloadIndividual(employee)}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <i className="fas fa-download"></i>
                            </div>
                          </button>
                        </td>
                      }
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default EmployeeList;


//let's code
// import React, { useEffect, useState } from 'react';
// import EmployeeCard from './employeecard';
// import './employeel.css';
// import AdminParentComponent from './adminSearch';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ProtectedRoute from '../Protected';

// const EmployeeList = () => {
//   const [filters, setFilters] = useState({ searchTerm: '', status: '', priority: '' });
//   const [error, setError] = useState();
//   const [details, setDetails] = useState([]);
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [editRowId, setEditRowId] = useState(null);
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   const [editFormData, setEditFormData] = useState({
//     uemployee_name: '',
//     ufather_name:'',
//     udesignation: '', 
//     uemployee_id: '',
//     upersonal_email:'',
//     uwork_email: '',
//     ugender:'',
//     udob:'',
//     umarital_status:'',
//     ulocation:'',
//     uemployee_Ref:'',
//     uremark:'',
//     udepartment:'',  
//     upan_no:'',
//     uaadhar:'',
//     ubankac:'',
//     uuanno:'',
//     upfno:'',
//     ustartjoin:'',
//     ubankName:'',
//     ublood_G:'',
//     umobile: '',
//     upermanent: '',
//     ureporting: ''
//   }); 
//   const handleSearch = (filters) => {
//     setFilters(filters);
//   };
//   const convertToCSV = (data) => {
//     const fields = ['employee_name', 'father_name', 'employee_id', 'personal_email', 'work_email', 'mobile', 'gender', 'dob', 'marital_status', 'location', 'permanent', 'employee_Ref', 'remark', 'department', 'designation', 'reporting', 'pan_no', 'aadhar', 'bankac', 'bankName', 'uanno', 'pfno', 'blood_G', 'startjoin'];
//     const array = [fields].concat(data.map(item => fields.map(field => item[field])));
//     return array.map(it => it.join(',')).join('\n');
//   }; 
//   const downloadCSV = (data, filename = 'data.csv') => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }; 
//   const handleDownloadIndividual = (employee) => {
//     downloadCSV([employee], `employee_${employee.id}.csv`);
//   }; 
//   const handleDownloadAll = () => {
//     downloadCSV(details, 'all_employees.csv');
//   }; 
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         // const response = await Axios.get('http://192.168.1.151:3015/setting');
//         const response = await Axios.get('http://localhost:3015/setting');
//         setDetails(response.data.details);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []); 
//   const filteredDetails = details.filter((employee) => {
//     return (
//       (filters.searchTerm === '' || 
//         employee.employee_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.designation.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
//         employee.id.toString().toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
//       (filters.status === '' || employee.status === filters.status) &&
//       (filters.priority === '' || employee.priority === filters.priority)
//     );
//   });

//   const toggleDisplay = () => {
//     setShowProfiles(!showProfiles);
//   }; 
//   const handleDelete = async (id) => {
//     try {
//       // await Axios.delete(`http://192.168.1.151:3015/empdelete/${id}`);
//       await Axios.delete(`http://localhost:3015/empdelete/${id}`);
//       setDetails((prevDetails) =>
//         prevDetails.filter((employee) => employee.id !== id)
//       );
//       alert("Employee record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting employee record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditRowId(employee.id);
//     setEditFormData(employee);
//   };
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSave = async (id) => {
//     try {
//       // await Axios.put(`http://192.168.1.151:3015/emptabupdate/${id}`, editFormData);
//       await Axios.put(`http://localhost:3015/emptabupdate/${id}`, editFormData);
//       setDetails((prevDetails) =>
//         prevDetails.map((employee) =>
//           employee.id === id ? { ...employee, ...editFormData } : employee
//         )
//       );
//       setEditRowId(null);
//       alert('Employee records updated successfully');
//     } catch (error) {
//       console.error('Error updating employee record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <AdminParentComponent onSearch={handleSearch} />
//       <button  style={{width:"170px"}} className="button-27" onClick={toggleDisplay}>
//         {showProfiles ? 'Show Table' : 'Show Profiles'}
//       </button>
//       <button className='button-27' style={{ marginTop:"0px",width: "220px" }} onClick={handleDownloadAll}>
//         Download All Data
//       </button>
//       {showProfiles ? (
//         <div className="employee-list">
//           {filteredDetails.map((employee, index) => (
//             <EmployeeCard key={index} employee={employee} />
//           ))}
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Position</th>
//                 <th>Employee ID</th>
//                 <th>Work Email</th>
//                 <th>Mobile</th>
//                 <th>Location</th>
//                 <th>Hired by Manager</th>
//                 <ProtectedRoute>{(role ==='admin' && <th>Action</th>)}</ProtectedRoute> 
//                 <ProtectedRoute>{(role ==='manager' && <th>Action</th>)}</ProtectedRoute> 
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDetails.map((employee) => (
//                 <tr key={employee.id}>
//                   {editRowId === employee.id ? (
//                     <>
//                       <td><input type="text" className='collect' placeholder='employee name' name="employee_name" value={editFormData.uemployee_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='father name'  name="father name" value={editFormData.ufather_name} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee id' name="employee_id" value={editFormData.uemployee_id} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='personal email id' name="personal email " value={editFormData.upersonal_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Mobile number'name="mobile" value={editFormData.umobile} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='work email id'name="work_email" value={editFormData.uwork_email} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='gender 'name="gender" value={editFormData.ugender} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='current location'name="location" value={editFormData.ulocation} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='permanent location'name="permanent" value={editFormData.upermanent} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='date of birth' name="dob" value={editFormData.udob} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='marital status'name="marital status" value={editFormData.umarital_status} onChange={handleChange} /></td> 
//                       <td><input type="text" className='collect' placeholder='employee_Ref id'name="employee_Ref" value={editFormData.uemployee_Ref} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee remark'name="remark" value={editFormData.uremark} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee department' name="department" value={editFormData.udepartment} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='employee idesignationd' name="designation" value={editFormData.udesignation} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='HR name' name="reporting" value={editFormData.ureporting} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='PAN card number' name="pan_no" value={editFormData.upan_no} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Aadhar number' name="aadhar" value={editFormData.uaadhar} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank account number' name="bankac" value={editFormData.ubankac} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='bank name' name="bankName" value={editFormData.ubankName} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='uan number' name="uan number" value={editFormData.uuanno} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='pf number' name="pfno" value={editFormData.upfno} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder=' start join date' name="join-date" value={editFormData.ublood_G} onChange={handleChange} /></td>
//                       <td><input type="text" className='collect' placeholder='Blood Group' name="join-date" value={editFormData.ustartjoin} onChange={handleChange} /></td>
//                       <td>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleSave(employee.id)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-save"></i>
//                           </div>
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{employee.employee_name}</td>
//                       <td>{employee.designation}</td>
//                       <td>{employee.employee_id}</td>
//                       <td>{employee.work_email}</td>
//                       <td>{employee.mobile}</td>
//                       <td>{employee.permanent}</td>
//                       <td>{employee.reporting}</td>
//                    <ProtectedRoute>{(role === 'admin'&&
//                       <td style={{ display: 'flex', alignItems: 'center' }}>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-edit"></i>
//                           </div>   
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                           <i className="fas fa-trash"></i>
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                     <i className="fas fa-download"></i>
//                   </button>
//                       </td>)}</ProtectedRoute> 
//                    <ProtectedRoute>{(role === 'manager'&&
//                       <td style={{ display: 'flex', alignItems: 'center' }}>
//                         <button style={{ width: "30px" }} className='button-27' onClick={() => handleEdit(employee)}>
//                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-edit"></i>
//                           </div>   
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(employee.id)}>
//                           <i className="fas fa-trash"></i>
//                         </button>
//                         <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDownloadIndividual(employee)}>
//                     <i className="fas fa-download"></i>
//                   </button>
//                       </td>)}</ProtectedRoute> 
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;