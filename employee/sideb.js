// src/components/Sidebar.js
import React from 'react';
import './sideb.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button> 
    </div>
  );
};

export default Sidebar;
