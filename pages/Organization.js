import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import './oragnization.css';
import Company from '../assets/company.png'
const Oraganization = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1', employee: 'Hari', department: 'General Manager', workBy: 'Remote', status: 'Manage' },
    { id: 2, name: 'Task 2', description: 'Description 2', employee: 'Vijay', department: 'Social Specialist', workBy: 'Remote', status: 'Ongoing' },
    { id: 3, name: 'Task 3', description: 'Description 3', employee: 'Selvakanabadhi', department: 'Estate Marketing', workBy: 'On Site', status: 'Finished' },
    { id: 4, name: 'Task 4', description: 'Description 4', employee: 'Saran kumar', department: 'Property Checker', workBy: 'On Site', status: 'No Project' },
  ]);
const handleDelete = (id) => {
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return (
    <div className="oraganization-page">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="user-info">
            <span><img src={Company} alt='null' height="34px" width="120px"/></span>
            <span>Stackpos Group</span>

            <span>Head Manager</span>
          </div>
        </header>
        <main>
          <section className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-content">
              <div className="employee-contact">
                <h3>STACKPOS Team Contact</h3>
                <ul>
                  <li>Sennan Manager <span>sennan.s@stackpos.com</span> <span>+91 8940513367</span> <button>Contact</button></li>
                  <li>Praveen project manager <span>praveen@stackpos.com</span>  <span>+91 9887837384</span><button>Contact</button></li>
                  <li>Saran team lead  <span>saran@stackpos.com</span>  <span>+91 8897436423</span><button>Contact</button></li>
                  <li>Sridhar HR team <span>sridhar@stackpos.com</span> <span>+91 9264874329</span> <button>Contact</button></li>
                </ul>
              </div>
              <div className="employee-contact">
  <h3>Employee INFO</h3>
  <ul>
    <li>Office Employees: 20</li>
    <li>Onsite Employees: 13</li>
  </ul>
  <p>Employee Roles:</p>
  <ul>
    <li></li>
    <li><span>Finacle Developer</span></li>
    <li><span>React JS Developer</span></li>
    <li><span>Onsite client Support Team</span></li>
    <li><span>Onsite Production Team</span></li>
    <li><span>Office Finacle Trainee</span></li>
  </ul>
  <p style={{fontWeight:"20px"}}>Current Finacle Projects:</p>  
   <ul>
   <li></li>
    <li><span>Finacle Core Banking</span></li>
    <li><span>Finacle Digital Banking Solution</span></li>
    <li><span>Finacle Treasury and Capital Markets</span></li>
    <li><span>Finacle e-Banking</span> </li>
  </ul>
</div>
            
                <div className="employee-contact">
                <h3>OUR Services</h3>
                <ul>
                  <li> <span>Banking (FINACLE-Universal Banking Solution(UBS))</span>   </li>
                  <li> <span>Customized Billing Softwares</span>   </li>
                  <li> <span>Payroll and Inventory Management</span>   </li>
                  <li> <span>Mobile Applications</span>  </li>
                  <li> <span>Web Development</span>  </li>
                  <li> <span>Web Designing</span>  </li>
                  <li> <span>MERN stack Destop Applications</span>    </li>
                </ul> 
              </div>
            </div>   
          </section>
          <section className="schedule-management">
            <h2>Schedule Management</h2>
            <p>Manage all your existing schedules or add a new schedule for your employees</p>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Work By</th>
                  <th>Work Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.employee}</td>
                    <td>{task.department}</td>
                    <td>{task.workBy}</td>
                    <td>{task.status}</td>
                    <td>
                      <button className="action-btn">Edit</button>
                    <button style={{marginLeft:"20px"}} className="action-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="see-all-schedule">See All Schedule</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Oraganization;






 