 

// import React, { useEffect, useState } from 'react';
// import './time.css';
// import  Axios   from 'axios';
// import Sidebar from '../components/Sidebar';

// const Timesheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [employeePosition, setEmployeePosition] = useState('Office employee');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [showForm, setShowForm] = useState(false);
// const [task_name, setTaskName] = useState('')
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);
//   const task=async(e)=>{
//     e.preventDefault()
//   try {
//     const response = await Axios.post('http://localhost:3015/unland', {
//         task_name: task_name,
//         task_description: task_description,
//         emp_task: emp_task,
//         start_task: start_task,
//         end_task: end_task,
//         emp_position: emp_position,
//     }); if(response.data[0]) {
//             window.alert("Account created successfully");
//             navigate('/leaveinfo');
//             return;
//         } 
//          else {
//             setStatus(response.data)
//             window.alert("Your account has already been created."); 
//             return; 
//       }
//     }
//          catch (error) {
//           console.error('Error creating account:', error);
//           alert("An error occurred, please try again later");
//         }
//   }

//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false, employeePosition }]);
//     axios.post('/send-email', task)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//       });
       
//   };

//   const editTask = (task) => {
//     setTasks(tasks.map(t => t.id === task.id ? task : t));
//     setCurrentTask(null);
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     tasks.forEach(task => {
//       if (task.endTime === today && !task.completed) {
//         toggleTaskCompletion(task.id);
//         axios.post('/store-task', task)
//           .then(response => {
//             console.log('Task stored:', response.data);
//           })
//           .catch(error => {
//             console.error('Error storing task:', error);
//           });
//       }
//     });
//   }, [tasks]);

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//   };

//   const sendAlerts = () => {
//     const incompleteTasks = tasks.filter(task => !task.completed);
//     if (incompleteTasks.length > 0) {
//       alert('Alert: There are incomplete tasks!');
//     } else {
//       alert('All tasks are completed!');
//     }
//   };

//   return (
//     <div className="timesheet">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <h2>Task Timesheet</h2>
//         <button  className="button-27"onClick={() => setShowForm(true)}>Add Task</button>
//         {showForm && (
//           <TaskForm
//             addTask={addTask}
//             editTask={editTask}
//             currentTask={currentTask}
//             setCurrentTask={setCurrentTask}
//             employeePosition={employeePosition}
//             setEmployeePosition={setEmployeePosition}
//           />
//         )}
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//           setCurrentTask={setCurrentTask}
//         />
//         <button className="alert-button" onClick={sendAlerts}>Send Alerts</button>
//       </div>
//     </div>
//   );
// };

// const TaskForm = ({ addTask, editTask, currentTask, setCurrentTask, employeePosition, setEmployeePosition }) => {
//   const [task, setTask] = useState({ taskName: '', description: '', employee: '', startTime: '', endTime: '' });

//   useEffect(() => {
//     if (currentTask) {
//       setTask(currentTask);
//     }
//   }, [currentTask]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentTask) {
//       editTask({ ...task, employeePosition });
//     } else {
//       addTask({ ...task, employeePosition });
//     }
//     setTask({ taskName: '', description: '', employee: '', startTime: '', endTime: '' });
//     setCurrentTask(null);
//   };

//   const handleCancel = () => {
//     setTask({ taskName: '', description: '', employee: '', startTime: '', endTime: '' });
//     setCurrentTask(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <h3>{currentTask ? 'Edit Task' : 'Add New Task'}</h3>
//       <input
//         name="taskName"
//         className='collect'
//         placeholder="Task Name"
//         value={task.taskName}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="description"   className='collect'
//         placeholder="Description"
//         value={task.description}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="employee"   className='collect'
//         placeholder="Employee"
//         value={task.employee}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="startTime"   className='collect'
//         placeholder="Start Time"
//         value={task.startTime}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="endTime"   className='collect'
//         placeholder="End Time"
//         value={task.endTime}
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor="employee-position">Employee Position</label>
//       <select
//         required   className='collect'
//         onChange={(e) => setEmployeePosition(e.target.value)}
//         id="employee-position"
//         value={employeePosition}
//       >
//         <option value="Office employee">Office Employee</option>
//         <option value="Onsite employee">Onsite Trainee</option>
//       </select>
//         <button className="submit-button" type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
//       {currentTask && <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>}
//     </form>
//   );
// };

// const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, setCurrentTask }) => {
//   return (
//     <div className="task-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Employee</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//             <th>Position</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map(task => (
//             <tr key={task.id} className={task.completed ? 'completed task' : 'task'}>
//               <td data-label="Task Name">{task.taskName}</td>
//               <td data-label="Description">{task.description}</td>
//               <td data-label="Employee">{task.employee}</td>
//               <td data-label="Start Time">{task.startTime}</td>
//               <td data-label="End Time">{task.endTime}</td>
//               <td data-label="Position">{task.employeePosition}</td>
//               <td data-label="Actions" className="task-actions">
//                 <button className="toggle-button" onClick={() => toggleTaskCompletion(task.id)}>
//                   <i className={`fa ${task.completed ? 'fa-times' : 'fa-check'}`}></i>
//                 </button>
//                 <button className="edit-button" onClick={() => setCurrentTask(task)}>
//                   <i className="fa fa-edit"></i>
//                 </button>
//                 <button className="delete-button" onClick={() => deleteTask(task.id)}>
//                   <i className="fa fa-trash"></i>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Timesheet;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Timesheet from '../Tasks/TimetaskSheet';
// import TaskForm from '../Tasks/TaskForm';

// const Timesheet = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Timesheet />} />
//         <Route path="/TimetaskSheet" element={<Timesheet />} />
//         <Route path="/TaskForm" element={<TaskForm />} />
//         <Route path="/edit-task/:id" element={<TaskForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Timesheet;
