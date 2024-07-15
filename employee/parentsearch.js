 // src/components/ParentComponent.js
// import React from 'react';
// import SearchFilter from './search';

// const ParentComponent = () => {
//   const userRole = 'admin'; // This should come from your user management logic
//   const isAdmin = userRole === 'admin';

//   const handleSearch = (filters) => {
//     console.log('Search filters:', filters);
   
//   };

//   return (
//     <div style={{backgroundColor:"white"}}>
//       <SearchFilter onSearch={handleSearch} isAdmin={isAdmin} />
//       {/* Other components or content */}
//     </div>
//   );
// };

// export default ParentComponent;
import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 import './search.css'
const ParentComponent = ({ onSearch, isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
const navigate = useNavigate();
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch({ searchTerm: e.target.value, status, priority });
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onSearch({ searchTerm, status: e.target.value, priority });
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    onSearch({ searchTerm, status, priority: e.target.value });
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
    marginLeft:"20px",      
    appearance: 'none',       
    WebkitAppearance: 'none', 
    MozAppearance: 'none'      
  };

  const selectHoverStyle = {
    borderColor: 'darkgrey' /* Darker grey on hover */
  };

  const selectFocusStyle = {
    outline: 'none',             /* Remove default outline */
    borderColor: 'black',        /* Black border on focus */
    boxShadow: '0 0 5px rgba(0,0,0,0.2)' /* Slight shadow for focus */
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
      {/* <select   value={status} onChange={handleStatusChange}>
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <select value={priority} onChange={handlePriorityChange}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select> */}
       <select 
        value={status} 
        onChange={handleStatusChange} 
        style={selectStyle} 
        onMouseEnter={(e) => Object.assign(e.target.style, selectHoverStyle)} 
        onMouseLeave={(e) => Object.assign(e.target.style, selectStyle)} 
        onFocus={(e) => Object.assign(e.target.style, selectFocusStyle)} 
        onBlur={(e) => Object.assign(e.target.style, selectStyle)}
      >
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <select 
        value={priority} 
        onChange={handlePriorityChange} 
        style={selectStyle} 
        onMouseEnter={(e) => Object.assign(e.target.style, selectHoverStyle)} 
        onMouseLeave={(e) => Object.assign(e.target.style, selectStyle)} 
        onFocus={(e) => Object.assign(e.target.style, selectFocusStyle)} 
        onBlur={(e) => Object.assign(e.target.style, selectStyle)}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className="searchit" onClick={handleSearch}>
        <FaSearch />
      </button>
      {isAdmin|| (
        <button  onClick={sell}  className="addit">
          <FaPlus /> Add Employee
        </button>
      )}
    </div>
  );
};

export default ParentComponent;