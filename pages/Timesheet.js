// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './timesheet.css'
// import Sidebar from '../components/Sidebar';
// import TaskList from './TaskList';

// const TimetaskSheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/tasks');
//         // const response = await axios.get('http://192.168.1.151:3015/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const deleteTask = async (taskId) => {
//     try {
//       // await axios.delete(`http://192.168.1.151:3015/tasks/${taskId}`);
//       await axios.delete(`http://192.168.1.151:3015/tasks/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggleTaskCompletion = async (taskId) => {
//     const task = tasks.find(task => task.id === taskId);
//     try {
//       await axios.put(`http://192.168.1.151:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
//       setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
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
//         <button onClick={() => navigate('/add-task')} className="button-27">Add Task</button>
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//         />
//         <button className="alert-button" onClick={sendAlerts}>Send Alerts</button>
//       </div>
//     </div>
//   );
// };

// export default TimetaskSheet;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './timesheet.css';
// import Sidebar from '../components/Sidebar';
// import TaskList from './TaskList';

// const TimetaskSheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const deleteTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:3015/tasks/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggleTaskCompletion = async (taskId) => {
//     const task = tasks.find(task => task.id === taskId);
//     try {
//       await axios.put(`http://localhost:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
//       setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
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
//         <button onClick={() => navigate('/add-task')} className="button-27">Add Task</button>
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//         />
//         <button className="alert-button" onClick={sendAlerts}>Send Alerts</button>
//       </div>
//     </div>
//   );
// };

// export default TimetaskSheet;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './timesheet.css'
// import Sidebar from '../components/Sidebar';
// import AdminTaskList from './Admintasklist';
// import ProtectedRoute from '../Protected';
 
// const TimetaskSheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         // const response = await axios.get('http://192.168.1.151:3015/tasks');
//         const response = await axios.get('http://localhost:3015/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const deleteTask = async (taskId) => {
//     try {
//       // await axios.delete(`http://192.168.1.151:3015/tasks/${taskId}`);
//       await axios.delete(`http://localhost:3015/tasks/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggleTaskCompletion = async (taskId) => {
//     const task = tasks.find(task => task.id === taskId);
//     try {
//       await axios.put(`http://localhost:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
//       // await axios.put(`http://192.168.1.151:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
//       setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const sendAlerts = () => {
//     const incompleteTasks = tasks.filter(task => !task.completed);
//     if (incompleteTasks.length > 0) {
//       alert('Alert: There are incomplete tasks!');
//     } else {
//       alert('All tasks are completed!');
//     }
//   }; 
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   return (
//     <div className="timesheet">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <h2>Task Timesheet</h2>
//         <ProtectedRoute> {( role === 'admin' &&  <button onClick={() => navigate('/add-task')} className="button-27">Add Task</button>)}</ProtectedRoute>
//         <ProtectedRoute> {( role === 'manager' &&  <button onClick={() => navigate('/add-task')} className="button-27">Add Task</button>)}</ProtectedRoute>
//         <AdminTaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//         />
//              <ProtectedRoute> {( role === 'admin' &&  <button className="alert-button" onClick={sendAlerts}>Send Alerts</button>)}</ProtectedRoute>
//       </div>
//     </div>
//   );
// };

// export default TimetaskSheet;



 




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './timesheet.css';
// import Sidebar from '../components/Sidebar';
// import AdminTaskList from './Admintasklist';
// import ProtectedRoute from '../Protected';

// const TimetaskSheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/tasks');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const deleteTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:3015/tasks/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggleTaskCompletion = async (taskId) => {
//     const task = tasks.find(task => task.id === taskId);
//     try {
//       await axios.put(`http://localhost:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
//       setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));

//       if (!task.completed) {
//         sendAlerts();
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
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
//         <ProtectedRoute>
//           {(role === 'admin' || role === 'manager') && <button onClick={() => navigate('/add-task')} className="button-27">Add Task</button>}
//         </ProtectedRoute>
//         <AdminTaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}
//         />
//         <ProtectedRoute>
//           {(role === 'admin' || role === 'manager') && <button className="alert-button" onClick={sendAlerts}>Send Alerts</button>}
//         </ProtectedRoute> 
//       </div>
//     </div>
//   );
// };

// export default TimetaskSheet;

 




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './timesheet.css';
// import Sidebar from '../components/Sidebar';
// import AdminTaskList from './Admintasklist';
// import ProtectedRoute from '../Protected';
 

 

// const TimetaskSheet = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/taskdisplay');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };
//     fetchTasks();
//   }, []);
 

//   const deleteTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:3015/tasks/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const toggleTaskCompletion = async (taskId) => {
//     const task = tasks.find(task => task.id === taskId);
//     try {
//       await axios.put(`http://localhost:3015/tasks/${taskId}`, { ...task, completed: !task.completed });

//       // Emit socket event for task completion
//       // socket.emit('taskCompleted', taskId);

//       setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));

//       if (!task.completed) {
//         sendAlerts();
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   }; 
//   const sendAlerts = () => {
//     const incompleteTasks = tasks.filter(task => !task.completed);
//     if (incompleteTasks.length > 0) {
//       alert('Alert: There are incomplete tasks!');
//     } else {
//       alert('All tasks are completed!');
//     }
//   }; 
//   function hello() {
//   navigate('/alert')
//   }
//   return (
//     <div className="timesheet">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <h2>Task Timesheet</h2>
//         <ProtectedRoute>  {(role === 'admin' || role === 'manager') && <button onClick={() => navigate('/add-task')}  className="button-27">Add Task</button>}
//         </ProtectedRoute>
//         <button type='submit' className='button-27' onClick={hello} >Alert</button>
//         <AdminTaskList  tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTaskCompletion={toggleTaskCompletion}/>  
//       </div>
//     </div>
//   );
// }; 
// export default TimetaskSheet;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './timesheet.css';
import Sidebar from '../components/Sidebar';
import AdminTaskList from './Admintasklist';
import ProtectedRoute from '../Protected';
import PendingLeaveRequests from './alert';  

const TimetaskSheet = () => {
  const [tasks, setTasks] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3015/taskdisplay');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);
 
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3015/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    try {
      await axios.put(`http://localhost:3015/tasks/${taskId}`, { ...task, completed: !task.completed });
      setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));

      if (!task.completed) {
        sendAlerts();
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const sendAlerts = () => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    if (incompleteTasks.length > 0) {
      alert('Alert: There are incomplete tasks!');
    } else {
      alert('All tasks are completed!');
    }
  };


  return (
    <div className="timesheet">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <h2>Task Timesheet</h2>
        <ProtectedRoute>  
          {(role === 'admin' || role === 'manager') && <button onClick={() => navigate('/add-task')}  className="button-27">Add Task</button>}
        </ProtectedRoute>
       
        <AdminTaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion}/>  
      </div>
     {/* Include the PendingLeaveRequests component */}
    </div>
  );
};

export default TimetaskSheet;
