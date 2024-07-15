// // src/components/StatsCards.js
// import React from 'react';
// import './status.css';

// const StatsCards = () => {
//   const stats = [
//     { title: 'Total Employees', count: 80 },
//     { title: 'New Employees', count: 14 },
//     { title: 'Male', count: 50 },
//     { title: 'Female', count: 30 },
//   ];

//   return (
//     <div className="stats-cards">
//       {stats.map((stat, index) => (
//         <div key={index} className="card">
//           <h2>{stat.title}</h2>
//           <p>{stat.count}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsCards;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Status = () => {
  const [count, setTotalCount] = useState(0);
  const [comments, setComments] = useState([]);  
  const [maleCount, setMaleCount] = useState(0);  
  const [gender, setGender] = useState([]);  
  const [femaleCount, setFemaleCount] = useState(0);  
  const [fgender, setFGender] = useState([]);  
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTotalCount() {
      try {
        // const response = await axios.get('http://192.168.1.151:3015/count');
          const response = await axios.get('http://localhost:3015/count');
        setTotalCount(response.data.count); 
        setComments(response.data.comments);  
        console.log("TotalCount: ","Data has been display the total employee");
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchTotalCount();
  }, []); 
  useEffect(() => {
    async function fetchCount() {
      try {
       const response = await axios.get('http://localhost:3015/countemployees');
          // const response = await axios.get('http://192.168.1.151:3015/countemployees');
        setMaleCount(response.data.maleCount);
        setGender(response.data.gender);
        console.log("MaleCount:", response.data.count); // Log the updated value
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchCount();
  }, []);
  useEffect(() => {
    async function fetchCount() {
      try {
       const response = await axios.get('http://localhost:3015/femaleCount');
          // const response = await axios.get('http://192.168.1.151:3015/femaleCount');
        setFemaleCount(response.data.femaleCount);
        setFGender(response.data.fgender);
        console.log("femaleCount:", response.data.femaleCount);
      } catch (error) {
        setError("An error occurred while fetching total count.");
        console.error("Error fetching total count:", error);
      }
    }
    fetchCount();
  }, []);
  
  

  return (
    <div className='ait'>
            
        <div className="leave-requests"> 
            <div className="leave-summary">
            <div className="summary-card">
            <h3>{count !== null ? count : "Loading..."}</h3>
                <p>Total Employees</p>
              </div>
              <div className="summary-card2">
              <h3>{count !== null ? count : "Loading..."}</h3>
          <p>New Employees</p>
              </div>
              <div className="summary-card3">
              <h3> {gender.map((send) =>( 
          <p key={send.id}>
            <h3>{send.maleCount}</h3>
          </p>
          ))}</h3>
          <p>Male</p>
              </div>
              <div className="summary-card4">
              <h3>{fgender.map((design)=>(
              <p key={design.id}>
              <h3>{design.femaleCount}</h3>
              </p>
            ))}</h3> 
          <p>Female</p>
              </div>
          </div>
          </div>
          {error && <p>{error}</p>}
    </div>
  );
}

export default Status;
 
