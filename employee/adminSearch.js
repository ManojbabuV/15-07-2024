import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 import './search.css'
import ProtectedRoute from '../Protected';
const AdminParentComponent = ({ onSearch, isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState(''); 
const navigate = useNavigate();
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch({ searchTerm: e.target.value, status, priority });
  };
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onSearch({ searchTerm, status: e.target.value, priority });
  };
  
   
  const handleSearch = () => {
    onSearch({ searchTerm, status, priority });
  };
  
  function sell(){
    navigate('/Newemployee')
  }
 

  const selectStyle = {
    backgroundColor: 'white', /* White background */
    border: '1px solid grey', /* Grey border */
    padding: '10px',           /* Padding inside the select */
    borderRadius: '4px',      /* Slightly rounded corners */
    fontSize: '16px',   
    marginLeft:"20px",      /* Font size for better readability */
    appearance: 'none',       /* Remove default dropdown arrow in some browsers */
    WebkitAppearance: 'none', /* Remove default dropdown arrow in Safari */
    MozAppearance: 'none'     /* Remove default dropdown arrow in Firefox */
  };

  const selectHoverStyle = {
    borderColor: 'darkgrey' /* Darker grey on hover */
  };

  const selectFocusStyle = {
    outline: 'none',              
    borderColor: 'black',        
    boxShadow: '0 0 5px rgba(0,0,0,0.2)'  
  };
  const inputStyle = {
    backgroundColor: 'white',
    border: '1px solid grey',
    padding: '5px',
    borderRadius: '14px',
    fontSize: '16px',
    width: '30%',  
    boxSizing: 'border-box' 
  };
  return (
    <div style={{marginBottom:"20px"}}> 
     <input
        type="text"
     
        placeholder="Search by name, role, or ID"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={inputStyle}
      />
       <ProtectedRoute>{(role === 'admin' &&      <select 
        value={status} 
        onChange={handleStatusChange} 
        style={selectStyle} 
        onMouseEnter={(e) => Object.assign(e.target.style, selectHoverStyle)} 
        onMouseLeave={(e) => Object.assign(e.target.style, selectStyle)} 
        onFocus={(e) => Object.assign(e.target.style, selectFocusStyle)} 
        onBlur={(e) => Object.assign(e.target.style, selectStyle)} >
        <option value="">All Statuses</option>
        <option value="active">Active</option>        
        <option value="inactive">Inactive</option>
         </select>    )}</ProtectedRoute> 
       <ProtectedRoute>{(role === 'manager' &&      <select 
        value={status} 
        onChange={handleStatusChange} 
        style={selectStyle} 
        onMouseEnter={(e) => Object.assign(e.target.style, selectHoverStyle)} 
        onMouseLeave={(e) => Object.assign(e.target.style, selectStyle)} 
        onFocus={(e) => Object.assign(e.target.style, selectFocusStyle)} 
        onBlur={(e) => Object.assign(e.target.style, selectStyle)} >
        <option value="">All Statuses</option>
        <option value="active">Active</option>        
        <option value="inactive">Inactive</option>
         </select>    )}</ProtectedRoute> 
       <button className="searchit" onClick={handleSearch}>
        <FaSearch />
      </button>
           
 <ProtectedRoute>{(role === 'admin' &&
        <button  onClick={sell}  className="addit">
          <FaPlus /> Add Employee
        </button>  

      )} 
        </ProtectedRoute>
 <ProtectedRoute>{(role === 'manager' &&
        <button  onClick={sell}  className="addit">
          <FaPlus /> Add Employee
        </button>  

      )} 
        </ProtectedRoute>
    </div>
  );
}; 
export default AdminParentComponent;