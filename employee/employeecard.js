 
import React, { useState } from 'react'; 
import './employee.css'; 

const EmployeeCard = ({ employee }) => { 
  const [showDetails, setShowDetails] = useState(false);
  
  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="employee-card">
      <img style={{marginTop:"40px",alignItems:"center"}}src="https://images.pexels.com/photos/4243049/pexels-photo-4243049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={employee.employee_name} className="profile-image" />
      <h3>{employee.employee_name}</h3>
      <p>Role: {employee.designation}</p>
      <p>ID: {employee.employee_id}</p>
      <p>Join Date: {employee.department}</p>
      <div className="buttons"> 
        <button style={{ backgroundColor: '#d1c2b6', color: 'black' }}><a href={`tel:${employee.mobile}`}>Call </a></button>
        <button style={{ backgroundColor: 'black', color: 'white' }}>Chat</button>
        <button
          style={{ backgroundColor: 'black', color: 'white' }}
          onClick={handleDetailsClick}
        >  Details
        </button>
      </div> 
      {showDetails && (
        <div className="overlay" style={{backgroundColor:"white"}}>
          <div className="details-form"> 
            <p>Employee Details Form</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <button onClick={() => setShowDetails(false)}>Submit</button>
          </div>  
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
