// // src/components/SearchFilter.js
// import React, { useState } from 'react';
// import './search.css';
// import { FaSearch, FaPlus } from 'react-icons/fa';

// const SearchFilter = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [status, setStatus] = useState('');
//   const [priority, setPriority] = useState('');

//   const handleSearch = () => {
//     onSearch({ searchTerm, status, priority });
//   };

//   return (
//     <div className="search-filter">
//       <div className="search-input">
//       {/* <button className="search-icon" onClick={handleSearch}>
//       <FaSearch /> 
//         </button>  */}
//         <input
//           type="text"
//           placeholder="Search Employee Name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//            />
        
//       </div>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="">Select Status</option>
//         <option value="active">Active</option>
//         <option value="inactive">Inactive</option>
//       </select>
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="">Select Priority</option>
//         <option value="high">High</option>
//         <option value="medium">Medium</option>
//         <option value="low">Low</option>
//       </select>
//       <button className="search-button" onClick={handleSearch}>
//         <FaSearch />
//       </button>
//       <button className="add-button">
//         <FaPlus /> Add Employee
//       </button>
//     </div>
//   );
// };

// export default SearchFilter;




// src/components/SearchFilter.js

import React, { useState } from 'react';
import './search.css';
import { FaSearch, FaPlus } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
const SearchFilter = ({ onSearch, isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  // const [priority, setPriority] = useState('');
  const navigate = useNavigate();

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch({ searchTerm: e.target.value, status });
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onSearch({ searchTerm, status: e.target.value   });
  }; 
  // const handlePriorityChange = (e) => {
  //   setPriority(e.target.value);
  //   onSearch({ searchTerm, status, priority: e.target.value });
  // }; 
  // const handleSearch = () => {
  //   onSearch({ searchTerm, status, priority });
  // }; 
  function sell(){
    navigate('/leave')
  }
  return (
    <div className="search-filter">
       <input
        type="text"
        placeholder="Search by name, role, or ID"
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-input"
      />
      <select value={status} onChange={handleStatusChange} className="search-select">
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      {/* <select value={priority} onChange={handlePriorityChange} className="search-select">
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select> */}
      {/* <button className="searchit" onClick={handleSearch}>
        <FaSearch /> Search
      </button> */}
      {/* {isAdmin && (
        <button onClick={sell} className="addit">
          <FaPlus /> Add Employee
        </button> */}
      {/* )}  */}
    </div>
  );
}; 
export default SearchFilter;
