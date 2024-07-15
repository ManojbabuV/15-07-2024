// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
 
// import './taskfrom.css'
// const TaskForm = ({ currentTask, setCurrentTask }) => {
//   const [task, setTask] = useState([]);
//   const [task_name, setTaskname] = useState('');
//   const [task_description, setTaskDescribe] = useState('');
//   const [emp_task, setTaskassign] = useState('');
//   const [start_task, setTaskstart] = useState('');
//   const [end_task, setTaskend] = useState('');
//   const [emp_position, setTaskposition] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (currentTask) {
//       setTask(currentTask);
//     }
//   }, [currentTask]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await axios.post('http://192.168.1.151:3015/tasktime', {
//       const response = await axios.post('http://localhost:3015/tasktime', {
//       task_name:task_name,
//       task_description:task_description,
//       emp_task:emp_task,
//        start_task:start_task,
//        end_task:end_task,
//       emp_position:emp_position
//       });
    
//       setTask(response.data);
//       navigate('/timesheet');
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }; 
  
//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <h3>{currentTask ? 'Edit Task' : 'Add New Task'}</h3>
//       <input
//         name="taskName"
//         placeholder="Task Name"
    
//         onChange={(e)=>setTaskname(e.target.value)}
//         required
//       />
//       <input
//         name="description"
//         placeholder="Description"
//         onChange={(e)=>setTaskDescribe(e.target.value)}
//         required
//       />
//       <input
//         name="employee"
//         placeholder="Employee"
//         onChange={(e)=>setTaskassign(e.target.value)}
//         required
//       />
//       <input
//         type="datetime-local"  
//         name="startTime"
//         placeholder="Start Time"
//         onChange={(e)=>setTaskstart(e.target.value)}
//         required
//       />
//       <input
//        type="datetime-local" 
//         name="endTime"
//         placeholder="End Time"
//         value={task.endTime}
//         onChange={(e)=>setTaskend(e.target.value)}
//         required
//       />
//       <label htmlFor="employee-position">Employee Position</label>
//       <select
//       onChange={(e) => setTaskposition(e.target.value)} 
//         value={task.employeePosition}
//       > <option value="">Select your position</option>
//         <option value="Office employee">Office Employee</option>
//         <option value="Onsite employee">Onsite Employee</option>
//         <option value="Office Trainee">Office Trainee</option>
//       </select>
//       <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
//     </form>
//   );
// }; 
// export default TaskForm;





















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
 
// import './taskfrom.css'
// import Sidebar from '../components/Sidebar';
// const TaskForm = ({ currentTask, setCurrentTask }) => {
  // const [task, setTask] = useState([]);
  // const [task_name, setTaskname] = useState('');
  // const [task_description, setTaskDescribe] = useState('');
  // const [emp_task, setTaskassign] = useState('');
  // const [start_task, setTaskstart] = useState('');
  // const [end_task, setTaskend] = useState('');
  // const [emp_position, setTaskposition] = useState('');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (currentTask) {
//       setTask(currentTask);
//     }
//   }, [currentTask]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const response = await axios.post('http://192.168.1.151:3015/tasktime', {
  //     const response = await axios.post('http://localhost:3015/tasktime2', {
  //     task_name:task_name,
  //     task_description:task_description,
  //     emp_task:emp_task,
  //      start_task:start_task,
  //      end_task:end_task,
  //     emp_position:emp_position
  //     });
    
  //     setTask(response.data);
  //     navigate('/timesheet');
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // }; 
  
//   return (
//   <div>
//     <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> 
//     <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//     <form onSubmit={handleSubmit} className="task-form">
//       <h3>{currentTask ? 'Edit Task' : 'Add New Task'}</h3>
//       <input
//         name="taskName"
//         placeholder="Task Name" 
//      className='collect'
//         onChange={(e)=>setTaskname(e.target.value)}
//         required
//       />
//       <input
//         name="description"   className='collect'
//         placeholder="Description"
//         onChange={(e)=>setTaskDescribe(e.target.value)}
//         required
//       />
//       <input
//         name="employee"  className='collect'
//         placeholder="Employee"
//         onChange={(e)=>setTaskassign(e.target.value)}
//         required
//       />
//       <input 
//         type="datetime-local"   className='collect'
//         name="startTime"
//         placeholder="Start Time"
//         onChange={(e)=>setTaskstart(e.target.value)}
//         required
//       />
//       <input
//        type="datetime-local" 
//         name="endTime"
//         placeholder="End Time"
//         className='collect'
//         value={task.endTime}
//         onChange={(e)=>setTaskend(e.target.value)}
//         required
//       />
      
//       <select  className='collect'
//       onChange={(e) => setTaskposition(e.target.value)} 
//         value={task.employeePosition}
//       > <option style={{justifyContent:"flex-start",height:"40px"}}value="">Select your position</option>
//         <option value="Office employee">Office Employee</option>
//         <option value="Onsite employee">Onsite Employee</option>
//         <option value="Office Trainee">Office Trainee</option>
//       </select>
//       <button  style={{marginLeft:"120px",marginTop:"20px"}}className='button-27'type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
//     </form>
//     </div>
//     </div>
//   );
// }; 
// export default TaskForm;







// import React, { useState } from 'react';
// import './eventform.css';

// const EventForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     date: '',
//     time: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="event-form">
//       <h2>Add Event</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Event Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   );
// };

// export default EventForm;


// import React, { useEffect, useState } from 'react';
// import './eventform.css';
// import Sidebar from '../components/Sidebar';

// const EventForm = () => {
    
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     event: '',
//     description: '',
//     date: '',
//     time: '',
//     attending: false,
//   });
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//       <h2>Office Event Registration</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name" 
//           className='collect'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className='collect'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="event">Event:</label>
//         <select
//         className='collect'
//           id="event"
//           name="event"
//           value={formData.event}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select an event</option>
//           <option value="presentation">Presentation</option>
//           <option value="Project Success Meet">Project Success Meet</option>
//           <option value="New Joinee Meet">New Joinee Meet</option>
//           <option value="Done Right Event Designs">Done Right Event Designs</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="description">Event Description:</label>
//         <textarea
//           id="description"
//           name="description" 
//           className='collect'
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="date">Event Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date" className='collect'
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="time">Event Time:</label>
//         <input
//           type="time"
//           id="time" className='collect'
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="attending">
//           <input
//             type="checkbox"
//             id="attending" className='collect'
//             name="attending"
//             checked={formData.attending}
//             onChange={handleChange}
//           />
//           Will you be attending?
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//       </div>
//     </form>

//   );
// };

// export default EventForm;




// import React, { useEffect, useState } from 'react';
// import './taskfrom.css';
// import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EventForm = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [task, setTask] = useState([]);
//   const [taskname, setTaskname] = useState('');
//   const [taskdescription, setTaskDescribe] = useState('');
//   const [emptask, setTaskassign] = useState('');
//   const [starttask, setTaskstart] = useState('');
//   const [endtask, setTaskend] = useState('');
//   const [empposition, setTaskposition] = useState('');
//   const [taskpriority, setTaskprior] = useState('');
//   const [customEvent, setCustomEvent] = useState(''); 
  
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []); 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
   

// const send = async (e) => {
//     e.preventDefault();
   
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     const descRegex = /^[a-zA-Z\s]+\d+$/;    
  
//  const validateInput = (regex, value, id, errorMessage) => {
//       const inputField = document.getElementById(id);
//       if (!regex.test(value)) {
//           inputField.style.border = '1px solid red';
//           alert(errorMessage);
//           inputField.focus();
//           return false;
//       } else {
//           inputField.style.border = '1px solid green'; 
//           return true;
//       }
//   };
  
//   const validateInput2 = (regex, value, id, errorMessage) => {
//       const inputField = document.getElementById(id);
//       if (!regex.test(value)) {
//           inputField.style.border = '1px solid red';
//           alert(errorMessage);
//           inputField.focus();
//           return false;
//       } else {
//           inputField.style.border = '1px solid green'; 
//           return true;
//       }
//   };
  
//   const validateSelectInput = (value, id, errorMessage) => {
//       const inputField = document.getElementById(id);
//       if (!value) {
//           inputField.style.border = '1px solid red';
//           alert(errorMessage);
//           inputField.focus();
//           return false;
//       } else {
//           inputField.style.border = '1px solid green';
//           return true;
//       }
//   };
//   const validations = [
//     { regex: nameRegex, value: taskname, id: 'taskname', errorMessage: 'Enter your task name' },
//     { regex: descRegex, value: taskdescription, id: 'taskdescription', errorMessage: 'Please enter a valid task description ' },
//     { regex: nameRegex, value: taskdescription, id: 'taskdescription', errorMessage: 'Enter valid task assigned employee name ' },

   
    
// ];
//     for (const { regex, value, id, errorMessage } of validations) {
//         if (!validateInput(regex, value, id, errorMessage)) return;
//     }

//     if (!validateSelectInput(starttask, 'leave_type', 'Select your leave type')) return;
//     if (!validateSelectInput(endtask, employee_id, 'employee_id', 'Please enter a valid employee ID: it should be a 4-digit number')) return;
      
//     try {
//       // const response = await axios.post('http://192.168.1.151:3015/tasktime', {
//       const response = await axios.post('http://localhost:3015/tasktime2', {
//         taskname,taskdescription,emptask,starttask,endtask,empposition,taskpriority
//       });
    
//       setTask(response.data);
//       navigate('/timesheet');
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };  

//   const navigate = useNavigate();
  
//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form className="event-form" onSubmit={handleSubmit}>
//           <h2>Task Assigning Form </h2>
//           <div className="form-group">
//             <label htmlFor="name">Task name</label>
//             <input
//               type="text"
//               id="taskname"
//               name="eventn"
//               placeholder="Enter Task title"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e)=>setTaskname(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" style={{width:"90px"}}>Task Description</label>
//             <input
//               type="text"
//               id="taskdescription"
//               name="eventemail"
//               placeholder="Enter Task description email"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e)=>setTaskDescribe(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="event" style={{width:"90px"}}>Employee Name</label>
//             <input
//               id="emptask"
//               name="selectevent"
//               type="text"
//               placeholder='Enter task assiged emaployee name'
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e)=>setTaskassign(e.target.value)}
//               required
//             /> 
//           </div> 
//           <div className="form-group">
//             <label htmlFor="description" style={{ width: '93px' }}>Task start time</label>
//             <input type="datetime-local"
//               id="starttask"
//               name="describeevent"
//               placeholder="Enter event description"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e)=>setTaskstart(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date"style={{width:"90px"}}>Task end time</label>
//             <input
//               type="datetime-local"
//               id="endtask"
//               name="eventdat"
//               className="collect1"
//               placeholder="Enter event date"
//               style={{ marginLeft: '40px' }}
//               onChange={(e)=>setTaskend(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time" style={{width:"90px"}}>Employee position</label>
//             <input
//               type="text"
//               id="empposition"
//               name="eventtime"
//               placeholder="Enter Employee position"
//               style={{marginLeft:"40px"}}
//               className="collect1"
//               onChange={(e)=>setTaskposition(e.target.value)}
//               required     
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time" style={{width:"90px"}}>Task priority</label>
//             <select
//               type="text"
//               id="taskpriority"
//               name="eventtime"
//               placeholder="Enter Priority high or medium or low"
//               style={{marginLeft:"40px"}}
//               className="collect1"
//               onChange={(e)=>setTaskprior(e.target.value)}
//               required
//             >
//             <option value="">Select task priority</option>
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//             </select>
//           </div>
//           <button style={{ width: '120px', marginLeft: '170px' }} className="button-27" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }; 

// export default EventForm;







// import React, { useEffect, useState } from 'react';
// import './taskfrom.css';
// import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EventForm = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [taskname, setTaskname] = useState('');
//   const [taskdescription, setTaskDescribe] = useState('');
//   const [emptask, setTaskassign] = useState('');
//   const [starttask, setTaskstart] = useState('');
//   const [endtask, setTaskend] = useState('');
//   const [empposition, setTaskposition] = useState('');
//   const [taskpriority, setTaskprior] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const validateSelectInput = (value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!value) {
//       inputField.style.border = '1px solid red';
//       alert(errorMessage);
//       inputField.focus();
//       return false;
//     } else {
//       inputField.style.border = '1px solid green';
//       return true;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const nameRegex = /^[a-zA-Z\s]+$/;
//     const descRegex = /^[a-zA-Z\s]+\d*$/;

//     const validations = [
//       { regex: nameRegex, value: taskname, id: 'taskname', errorMessage: 'Enter a valid task name' },
//       { regex: descRegex, value: taskdescription, id: 'taskdescription', errorMessage: 'Enter a valid task description' },
//       { regex: nameRegex, value: emptask, id: 'emptask', errorMessage: 'Enter a valid employee name' },
//     ];

//     for (const { regex, value, id, errorMessage } of validations) {
//       if (!validateInput(regex, value, id, errorMessage)) return;
//     }

//     if (!validateSelectInput(starttask, 'starttask', 'Select a start time')) return;
//     if (!validateSelectInput(endtask, 'endtask', 'Select an end time')) return;
//     if (!validateSelectInput(empposition, 'empposition', 'Enter a valid employee position')) return;
//     if (!validateSelectInput(taskpriority, 'taskpriority', 'Select a task priority')) return;
//     try {
//       const response = await axios.post('http://localhost:3015/tasktime2', {
//         taskname, taskdescription, emptask, starttask, endtask, empposition, taskpriority
//       });
//       navigate('/timesheet');
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }; 
//   return (
//     <div>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <form className="event-form" onSubmit={handleSubmit}>
//           <h2>Task Assigning Form</h2>
//           <div className="form-group">
//             <label htmlFor="taskname">Task Name</label>
//             <input
//               type="text"
//               id="taskname"
//               placeholder="Enter Task title"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e) => setTaskname(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="taskdescription" style={{ width: "90px" }}>Task Description</label>
//             <input
//               type="text"
//               id="taskdescription"
//               placeholder="Enter Task description"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e) => setTaskDescribe(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="emptask" style={{ width: "90px" }}>Employee Name</label>
//             <input
//               type="text"
//               id="emptask"
//               placeholder='Enter task assigned employee name'
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e) => setTaskassign(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="starttask" style={{ width: '93px' }}>Task Start Time</label>
//             <input
//               type="datetime-local"
//               id="starttask"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e) => setTaskstart(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="endtask" style={{ width: "90px" }}>Task End Time</label>
//             <input
//               type="datetime-local"
//               id="endtask"
//               className="collect1"
//               style={{ marginLeft: '40px' }}
//               onChange={(e) => setTaskend(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="empposition" style={{ width: "90px" }}>Employee Position</label>
//             <input
//               type="text"
//               id="empposition"
//               placeholder="Enter Employee position"
//               style={{ marginLeft: "40px" }}
//               className="collect1"
//               onChange={(e) => setTaskposition(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="taskpriority" style={{ width: "90px" }}>Task Priority</label>
//             <select
//               id="taskpriority"
//               style={{ marginLeft: "40px" }}
//               className="collect1"
//               onChange={(e) => setTaskprior(e.target.value)}
//               required
//             >
//               <option value="">Select task priority</option>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//           </div>
//           <button style={{ width: '120px', marginLeft: '170px' }} className="button-27" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EventForm;


import React, { useEffect, useState } from 'react';
import './taskfrom.css';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [taskname, setTaskname] = useState('');
  const [taskdescription, setTaskDescribe] = useState('');
  const [emptask, setTaskassign] = useState('');
  const [starttask, setTaskstart] = useState('');
  const [endtask, setTaskend] = useState('');
  const [empposition, setTaskposition] = useState('');
  const [taskpriority, setTaskprior] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const validateInput = (regex, value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!regex.test(value)) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const validateSelectInput = (value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!value) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const descRegex = /^[a-zA-Z\s]+\d*$/;
    const empid =/^\d{4}$/

    const validations = [
      { regex: nameRegex, value: taskname, id: 'taskname', errorMessage: 'Enter a valid task name' },
      { regex: descRegex, value: taskdescription, id: 'taskdescription', errorMessage: 'Enter a valid your task description' },
      { regex: empid, value: emptask, id: 'emptask', errorMessage: 'Enter a task assigned employee ID' },
      { value: starttask, id: 'starttask', errorMessage: 'Select your task  started date and time' },
      { value: endtask, id: 'endtask', errorMessage: 'Select your task last date and time' },
      {  regex: nameRegex, value: empposition, id: 'empposition', errorMessage: 'Enter a valid employee position(onsite or office employee)' },
      { value: taskpriority, id: 'taskpriority', errorMessage: 'Select  task priority: (low or high or medium)' },
    ]; 
    for (const validation of validations) {
      if (validation.regex) {
        if (!validateInput(validation.regex, validation.value, validation.id, validation.errorMessage)) return;
      } else {
        if (!validateSelectInput(validation.value, validation.id, validation.errorMessage)) return;
      }
    }  
    try {
      // const response = await axios.post('http://192.168.1.151:3015/tasktime2', {
      const response = await axios.post('http://localhost:3015/tasktime2', {
        taskname, taskdescription, emptask, starttask, endtask, empposition, taskpriority
      });
      navigate('/employeeTime');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form className="event-form" onSubmit={handleSubmit}>
          <h2>Task Assigning Form</h2>
          <div className="form-group">
            <label htmlFor="taskname">Task Name</label>
            <input
              type="text"
              id="taskname"
              placeholder="Enter Task title"
              className="collect1"
              style={{ marginLeft: '40px' }}
              onChange={(e) => setTaskname(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskdescription" style={{ width: "90px" }}>Task Description</label>
            <input
              type="text"
              id="taskdescription"
              placeholder="Enter Task description"
              className="collect1"
              style={{ marginLeft: '40px' }}
              onChange={(e) => setTaskDescribe(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="emptask" style={{ width: "90px" }}>Employee ID</label>
            <input
              type="text"
              id="emptask"
              placeholder='Enter task assigned employee id'
              className="collect1"
              style={{ marginLeft: '40px' }}
              onChange={(e) => setTaskassign(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="starttask" style={{ width: '93px' }}>Task Start Time</label>
            <input
              type="datetime-local"
              id="starttask"
              className="collect1"
              style={{ marginLeft: '40px' }}
              onChange={(e) => setTaskstart(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="endtask" style={{ width: "90px" }}>Task End Time</label>
            <input
              type="datetime-local"
              id="endtask"
              className="collect1"
              style={{ marginLeft: '40px' }}
              onChange={(e) => setTaskend(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="empposition" style={{ width: "90px" }}>Employee Position</label>
            <input
              type="text"
              id="empposition"
              placeholder="Enter Employee position"
              style={{ marginLeft: "40px" }}
              className="collect1"
              onChange={(e) => setTaskposition(e.target.value)}
               
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskpriority" style={{ width: "90px" }}>Task Priority</label>
            <select
              id="taskpriority"
              style={{ marginLeft: "40px" }}
              className="collect1"
              onChange={(e) => setTaskprior(e.target.value)}
               
            >
              <option value="">Select task priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="taskpriority" style={{ width: "90px" }}>Task Status</label>
            <select
              id="taskpriority"
              style={{ marginLeft: "40px" }}
              className="collect1"
              onChange={(e) => setTaskprior(e.target.value)}   
            >
              <option value="">Select Status</option> 
              <option value="Pending task">Pending task</option>
              <option value="Reschedule task">Reschedule task</option>
            </select>
          </div>
          <button style={{ width: '120px', marginLeft: '170px' }} className="button-27" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
