























// import React, { useEffect, useState } from 'react';
// import './tasklist.css';
// import Axios from 'axios';
// import ProtectedRoute from '../Protected';
// import axios from 'axios';

// const AdminTaskList = () => {
//   const [displaytask, setTasks] = useState([]);
//   const [error, setError] = useState();
//   const [utask_name, setUtask] = useState('');
//   const [utask_description, setUdescribe] = useState('');
//   const [uemp_task, setUemp] = useState('');
//   const [ustart_task, setUstart] = useState('');
//   const [uend_task, setUend] = useState('');
//   const [uemp_position, setUposition] = useState('');
//   const [utaskpriority, setPriority] = useState('');
//   const [newrowId, setUrowId] = useState(null);
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try { 
//         const response = await Axios.get('http://localhost:3015/taskdisplay');
//         // const response = await Axios.get('http://192.168.1.151:3015/taskdisplay');
//         setTasks(response.data.displaytask);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []); 
//   const handleDelete = async (id) => {
//     try {
//       // await Axios.delete(`http://192.168.1.151:3015/taskdelete/${id}`);
//       await Axios.delete(`http://localhost:3015/taskdelete/${id}`);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//       alert("Task record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting task record:', error);
//       alert("An error occurred, please try again later");
//     }
//   }; 
//   const handleSave = async (id) => {
//     try {
//       // const response = await Axios.put(`http://192.168.1.151:3015/taskupdate/${id}`, {
//       const response = await Axios.put(`http://localhost:3015/taskupdate/${id}`, {
//         utask_name,
//         utask_description,
//         uemp_task,
//         ustart_task,
//         uend_task,
//         uemp_position,
//         utaskpriority
//       });

//       if (response.status === 200) {
//         setTasks((prevTasks) =>
//           prevTasks.map((task) =>
//             task.id === id
//               ? {
//                   ...task,
//                   task_name: utask_name,
//                   task_description: utask_description,
//                   emp_task: uemp_task,
//                   start_task: ustart_task,
//                   end_task: uend_task,
//                   emp_position: uemp_position,
//                   taskpriority: utaskpriority
//                 }
//               : task
//           )
//         );
//         setUrowId(null);
//         setUtask('');
//         setUdescribe('');
//         setUemp('');
//         setUstart('');
//         setUend('');
//         setUposition('');
//         setPriority('');
//         alert("Task updated successfully");
//       } else {
//         throw new Error('Failed to update task');
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (task) => {
//     setUrowId(task.id);
//     setUtask(task.taskname);
//     setUdescribe(task.taskdescription);
//     setUemp(task.emptask);
//     setUstart(task.starttask);
//     setUend(task.endtask);
//     setUposition(task.empposition);
//     setPriority(task.taskpriority);
//   };
//  const []=useState(false)
//   return (
//     <div className="task-list">
//       <div className="leave-summary">
//         <div className="summary-card">
//           <h3>12</h3>
//           <p>Tasks Updated</p>
//         </div>
//         <div className="summary-card2">
//           <h3>8</h3>
//           <p>Tasks Pending</p>
//         </div>
//         <div className="summary-card3">
//           <h3>5</h3>
//           <p>Completed Tasks</p>
//         </div>
//         <div className="summary-card4">
//           <h3>3</h3>
//           <p>Overdue Tasks</p>
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Employee</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Employee Position</th>
//             <th>Task Priority</th>
//     <ProtectedRoute>{(role === 'admin' && <th>Actions</th>)} </ProtectedRoute>       
//     <ProtectedRoute>{(role === 'manager' && <th>Actions</th>)} </ProtectedRoute>       
//           </tr>
//         </thead>
//         <tbody>
//           {displaytask.map((task) => (
//             <tr key={task.id}>
//               <td data-label="Task Name">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utask_name}
//                     onChange={(e) => setUtask(e.target.value)}
//                   />
//                 ) : (
//                   task.taskname
//                 )}
//               </td>
//               <td data-label="Description">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utask_description}
//                     onChange={(e) => setUdescribe(e.target.value)}
//                   />
//                  ) : (
//                   task.taskdescription
//                 )}
//               </td>
//               <td data-label="Employee">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={uemp_task}
//                     onChange={(e) => setUemp(e.target.value)}
//                   />
//                 ) : (
//                   task.emptask
//                 )}
//               </td>
//               <td data-label="Start Date">
//                 {newrowId === task.id ? (
//                   <input
//                     type="date"
//                     className="collect"
//                     value={ustart_task}
//                     onChange={(e) => setUstart(e.target.value)}
//                   />
//                 ) : (
//                   task.starttask
//                 )}
//               </td>
//               <td data-label="End Date">
//                 {newrowId === task.id ? (
//                   <input
//                     type="date"
//                     className="collect"
//                     value={uend_task}
//                     onChange={(e) => setUend(e.target.value)}
//                   />
//                 ) : (
//                   task.endtask
//                 )}
//               </td>
//               <td data-label="Position">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={uemp_position}
//                     onChange={(e) => setUposition(e.target.value)}
//                   />
//                 ) : (
//                   task.empposition
//                 )}
//               </td>
//               <td data-label="Priority">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utaskpriority}
//                     onChange={(e) => setPriority(e.target.value)}
//                   />
//                 ) : (
//                   task.taskpriority
//                 )}
//               </td>
//              <ProtectedRoute>{(role === 'admin' &&  <td data-label="Actions" className="task-actions">
//                 {newrowId === task.id ? (
//                   <button  style={{ width: "30px", backgroundColor: "#107f8e" }}
//                     className="button-27"
//                     onClick={() => handleSave(task.id)}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <i className="fas fa-save"></i>
//                     </div>
//                   </button>
//                 ) : (
//                   <button
//                     style={{ width: "30px", backgroundColor: "#107f8e"}}
//                     className="button-27"
//                     onClick={() => handleEdit(task)}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <i className="fa fa-edit"></i>
//                     </div>
//                   </button>
//                 )}
//                 <button className="button-27"  style={{backgroundColor:" #107f8e",height:"40px", width:"30px"}}onClick={() => handleDelete(task.id)}>
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-trash"></i>
//                           </div>
//                 </button>
//               </td>
//             )}</ProtectedRoute>
//              <ProtectedRoute>{(role === 'manager' &&  <td data-label="Actions" className="task-actions">
              
//                 {newrowId === task.id ? (
//                   <button  style={{ width: "30px", backgroundColor: "#107f8e" }}
//                     className="button-27"
//                     onClick={() => handleSave(task.id)}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <i className="fas fa-save"></i>
//                     </div>
//                   </button>
//                 ) : (
//                   <button
//                     style={{ width: "30px", backgroundColor: "#107f8e"}}
//                     className="button-27"
//                     onClick={() => handleEdit(task)}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <i className="fa fa-edit"></i>
//                     </div>
//                   </button>
//                 )}
//                 <button className="button-27"  style={{backgroundColor:" #107f8e",height:"40px", width:"30px"}}onClick={() => handleDelete(task.id)}>
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-trash"></i>
//                           </div>
//                 </button>
//               </td>
//             )}</ProtectedRoute>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default AdminTaskList;
 

 
 




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './tasklist.css';

// const TaskList = () => {
//   const [displaytask, setTasks] = useState([]);
//   const [error, setError] = useState();
//   const [utask_name, setUtask] = useState('');
//   const [utask_description, setUdescribe] = useState('');
//   const [uemp_task, setUemp] = useState('');
//   const [ustart_task, setUstart] = useState('');
//   const [uend_task, setUend] = useState('');
//   const [uemp_position, setUposition] = useState('');
//   const [utaskpriority, setPriority] = useState('');
//   const [newrowId, setUrowId] = useState(null);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/taskdisplay');
//         setTasks(response.data.displaytask);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3015/taskdelete/${id}`);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//       alert("Task record deleted successfully");
//     } catch (error) {
//       console.error('Error deleting task record:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleSave = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:3015/taskupdate/${id}`, {
//         utask_name,
//         utask_description,
//         uemp_task,
//         ustart_task,
//         uend_task,
//         uemp_position,
//         utaskpriority,
//         completed: false // Initially set to false
//       });

//       if (response.status === 200) {
//         setTasks((prevTasks) =>
//           prevTasks.map((task) =>
//             task.id === id
//               ? {
//                   ...task,
//                   task_name: utask_name,
//                   task_description: utask_description,
//                   emp_task: uemp_task,
//                   start_task: ustart_task,
//                   end_task: uend_task,
//                   emp_position: uemp_position,
//                   taskpriority: utaskpriority,
//                   completed: false // Update completed status
//                 }
//               : task
//           )
//         );
//         setUrowId(null);
//         setUtask('');
//         setUdescribe('');
//         setUemp('');
//         setUstart('');
//         setUend('');
//         setUposition('');
//         setPriority('');
//         alert("Task updated successfully");
//       } else {
//         throw new Error('Failed to update task');
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//       alert("An error occurred, please try again later");
//     }
//   };

//   const handleEdit = (task) => {
//     setUrowId(task.id);
//     setUtask(task.taskname);
//     setUdescribe(task.taskdescription);
//     setUemp(task.emptask);
//     setUstart(task.starttask);
//     setUend(task.endtask);
//     setUposition(task.empposition);
//     setPriority(task.taskpriority);
//   };

  // const handleComplete = async (id) => {
  //   try {
  //     const response = await axios.put(`http://localhost:3015/taskupdate/${id}`, {
  //       completed: true // Set completed to true
  //     });

  //     if (response.status === 200) {
  //       setTasks((prevTasks) =>
  //         prevTasks.map((task) =>
  //           task.id === id ? { ...task, completed: true } : task
  //         )
  //       );
  //       alert("Task marked as completed successfully");
  //     } else {
  //       throw new Error('Failed to mark task as completed');
  //     }
  //   } catch (error) {
  //     console.error('Error marking task as completed:', error);
  //     alert("An error occurred, please try again later");
  //   }
  // };

//   return (
//     <div className="task-list">
//       <div className="leave-summary">
//         <div className="summary-card">
//           <h3>12</h3>
//           <p>Tasks Updated</p>
//         </div>
//         <div className="summary-card2">
//           <h3>8</h3>
//           <p>Tasks Pending</p>
//         </div>
//         <div className="summary-card3">
//           <h3>5</h3>
//           <p>Completed Tasks</p>
//         </div>
//         <div className="summary-card4">
//           <h3>3</h3>
//           <p>Overdue Tasks</p>
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Employee</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Employee Position</th>
//             <th>Task Priority</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displaytask.map((task) => (
//             <tr key={task.id}>
//               <td data-label="Task Name">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utask_name}
//                     onChange={(e) => setUtask(e.target.value)}
//                   />
//                 ) : (
//                   task.taskname
//                 )}
//               </td>
//               <td data-label="Description">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utask_description}
//                     onChange={(e) => setUdescribe(e.target.value)}
//                   />
//                 ) : (
//                   task.taskdescription
//                 )}
//               </td>
//               <td data-label="Employee">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={uemp_task}
//                     onChange={(e) => setUemp(e.target.value)}
//                   />
//                 ) : (
//                   task.emptask
//                 )}
//               </td>
//               <td data-label="Start Date">
//                 {newrowId === task.id ? (
//                   <input
//                     type="date"
//                     className="collect"
//                     value={ustart_task}
//                     onChange={(e) => setUstart(e.target.value)}
//                   />
//                 ) : (
//                   task.starttask
//                 )}
//               </td>
//               <td data-label="End Date">
//                 {newrowId === task.id ? (
//                   <input
//                     type="date"
//                     className="collect"
//                     value={uend_task}
//                     onChange={(e) => setUend(e.target.value)}
//                   />
//                 ) : (
//                   task.endtask
//                 )}
//               </td>
//               <td data-label="Position">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={uemp_position}
//                     onChange={(e) => setUposition(e.target.value)}
//                   />
//                 ) : (
//                   task.empposition
//                 )}
//               </td>
//               <td data-label="Priority">
//                 {newrowId === task.id ? (
//                   <input
//                     type="text"
//                     className="collect"
//                     value={utaskpriority}
//                     onChange={(e) => setPriority(e.target.value)}
//                   />
//                 ) : (
//                   task.taskpriority
//                 )}
//               </td>
//               <td data-label="Actions" className="task-actions">
               
//                 <button style={{color:"black",backgroundColor:"red"}} className="button-27" onClick={() => handleEdit(task)}>
//                   Edit
//                 </button>
//                 <button  style={{color:"black",backgroundColor:"red"}} className="button-27" onClick={() => handleDelete(task.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default TaskList;


















import React, { useEffect, useState } from 'react';
import './tasklist.css';
import Axios from 'axios';
import ProtectedRoute from '../Protected';

const TaskList = () => {
  const [displaytask, setTasks] = useState([]);
  const [error, setError] = useState();
  const [utask_name, setUtask] = useState('');
  const [utask_description, setUdescribe] = useState('');
  const [uemp_task, setUemp] = useState('');
  const [ustart_task, setUstart] = useState('');
  const [uend_task, setUend] = useState('');
  const [uemp_position, setUposition] = useState('');
  const [utaskpriority, setPriority] = useState('');
  const [utaskstatus, setTaskstatus] = useState('');
  const [newrowId, setUrowId] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try { 
        const response = await Axios.get('http://localhost:3015/taskdisplay');
        // const response = await Axios.get('http://192.168.1.151:3015/taskdisplay');
        setTasks(response.data.displaytask);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchRecords();
  }, []); 
  const [TotalCount,setTotalcount] = useState('')
const [tcount,setTcount] = useState([])
  const [overdue,setOverdue] = useState('')
const [overcount,setOvercount] = useState([])
  const [complete,setComplete] = useState('')
const [ccount,setCcount] = useState([])
  const [pending,setPending] = useState('')
const [pcount,setPcount] = useState([])
useEffect(() => {
  async function fetchCasualLeave() {
    try {
      const response = await Axios.get('http://localhost:3015/taskCount');
      setTotalcount(response.data.TotalCount);
      setTcount(response.data.tcount);
      console.log('Casual leave count data fetched successfully');
    } catch (error) {
      setError('An error occurred while fetching casual leave count.');
      console.error('Error fetching casual leave count:', error);
    }
  }
  fetchCasualLeave();
}, []);
useEffect(() => {
  async function fetchOvertask() {
    try {
      const response = await Axios.get('http://localhost:3015/overCount');
      setOverdue(response.data.overdue);
      setOvercount(response.data.overcount);
      console.log('Casual leave count data fetched successfully');
    } catch (error) {
      setError('An error occurred while fetching casual leave count.');
      console.error('Error fetching casual leave count:', error);
    }
  }
  fetchOvertask();
}, []);
useEffect(() => {
  async function fetchOvertask() {
    try {
      const response = await Axios.get('http://localhost:3015/completecount');
      setComplete(response.data.complete);
      setCcount(response.data.ccount);
      console.log('Casual leave count data fetched successfully');
    } catch (error) {
      setError('An error occurred while fetching casual leave count.');
      console.error('Error fetching casual leave count:', error);
    }
  }
  fetchOvertask();
}, []);
useEffect(() => {
  async function fetchOvertask() {
    try {
      const response = await Axios.get('http://localhost:3015/pendingcount');
      setPending(response.data.pending);
      setPcount(response.data.pcount);
      console.log('Casual leave count data fetched successfully');
    } catch (error) {
      setError('An error occurred while fetching casual leave count.');
      console.error('Error fetching casual leave count:', error);
    }
  }
  fetchOvertask();
}, []);

const [role, setUserRole] = useState(() => {
  return sessionStorage.getItem('userRole') || '';
});
  const handleDelete = async (id) => {
    try {
      // await Axios.delete(`http://192.168.1.151:3015/taskdelete/${id}`);
      await Axios.delete(`http://localhost:3015/taskdelete/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      alert("Task record deleted successfully");
    } catch (error) {
      console.error('Error deleting task record:', error);
      alert("An error occurred, please try again later");
    }
  }; 
  const handleSave = async (id) => {
    try {
      // const response = await Axios.put(`http://192.168.1.151:3015/taskupdate/${id}`, {
      const response = await Axios.put(`http://localhost:3015/taskupdate/${id}`, {
        utask_name,
        utask_description,
        uemp_task,
        ustart_task,
        uend_task,
        uemp_position,
        utaskpriority,
        utaskstatus,
      });

      if (response.status === 200) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  task_name: utask_name,
                  task_description: utask_description,
                  emp_task: uemp_task,
                  start_task: ustart_task,
                  end_task: uend_task,
                  emp_position: uemp_position,
                  taskpriority: utaskpriority,
                  taskstatus: utaskstatus
                }
              : task
          )
        );
        setUrowId(null);
        setUtask('');
        setUdescribe('');
        setUemp('');
        setUstart('');
        setUend('');
        setUposition('');
        setPriority('');
        setTaskstatus('');
        alert("Task updated successfully");
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert("An error occurred, please try again later");
    }
  };

  const handleEdit = (task) => {
    setUrowId(task.id);
    setUtask(task.taskname);
    setUdescribe(task.taskdescription);
    setUemp(task.emptask);
    setUstart(task.starttask);
    setUend(task.endtask);
    setUposition(task.empposition);
    setPriority(task.taskpriority);
    setTaskstatus(task.taskstatus);
  };
  const emphandleSave = async (id) => {
    try {
      // const response = await Axios.put(`http://192.168.1.151:3015/taskupdate/${id}`, {
      const response = await Axios.put(`http://localhost:3015/emptaskupdate/${id}`, {
       
        utaskstatus,
      });

      if (response.status === 200) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id
              ? {
                  ...task, 
                  taskstatus: utaskstatus
                }
              : task
          )
        );
        setUrowId(null); 
        setTaskstatus('');
        alert("Task updated successfully");
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert("An error occurred, please try again later");
    }
  };

  const emphandleEdit = (task) => {
    setUrowId(task.id); 
    setTaskstatus(task.taskstatus);
  };
   
function checkLeaveRequestStatus() { 
    let taskstatus = "Completed";  
    if (taskstatus === "Completed" || taskstatus === "Completed" ) {
        alert("An employee’s task request is complete. Could you inquire about the status");
    }
}
useEffect(()=>{
<ProtectedRoute>{role === 'manager' &&  
checkLeaveRequestStatus() }</ProtectedRoute> 
 
},[role])
useEffect(()=>{
<ProtectedRoute>{role ===  'admin' &&
checkLeaveRequestStatus()}</ProtectedRoute> 
 
},[role]) 
  return (
    <div className="task-list">
      <div className="leave-summary">
        <div className="summary-card">
        <h3>
       {tcount.map((total) => (
       <div key={total.id}>
        <p>{total.TotalCount}</p>
       </div>
         ))} </h3> 
           <p>Tasks Updated</p>
        </div>
        <div className="summary-card2">
        <h3>
       {pcount.map((over) => (
       <div key={over.id}>
        <p>{over.pending}</p>
       </div>
         ))}
</h3>
          <p>Tasks Pending</p>
        </div>
        <div className="summary-card3">
        <h3>
       {ccount.map((over) => (
       <div key={over.id}>
        <p>{over.complete}</p>
       </div>
         ))}
</h3>
          <p>Completed Tasks</p>
        </div>
        <div className="summary-card4">
        <h3>
       {overcount.map((over) => (
       <div key={over.id}>
        <p>{over.overdue}</p>
       </div>
         ))}
</h3>
          <p>Overdue Tasks</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
          <th>Task Name</th>
            <th>Description</th>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Employee Position</th>
            <th>Task Priority</th>
            <th>Task Status</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {displaytask.map((task) => (
            <tr key={task.id}>
              <ProtectedRoute>{(role === 'manager' && <>   
                <td data-label="Task Name">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={utask_name}
                    onChange={(e) => setUtask(e.target.value)}
                  />
                ) : (
                  task.taskname
                )}
              </td>
              <td data-label="Description">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={utask_description}
                    onChange={(e) => setUdescribe(e.target.value)}
                  />
                 ) : (
                  task.taskdescription
                )}
              </td>
              <td data-label="Employee">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={uemp_task}
                    onChange={(e) => setUemp(e.target.value)}
                  />
                ) : (
                  task.emptask
                )}
              </td>
              <td data-label="Start Date">
                {newrowId === task.id ? (
                  <input
                    type="date"
                    className="collect"
                    value={ustart_task}
                    onChange={(e) => setUstart(e.target.value)}
                  />
                ) : (
                  task.starttask
                )}
              </td>
              <td data-label="End Date">
                {newrowId === task.id ? (
                  <input
                    type="date"
                    className="collect"
                    value={uend_task}
                    onChange={(e) => setUend(e.target.value)}
                  />
                ) : (
                  task.endtask
                )}
              </td>
             <td data-label="Position">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={uemp_position}
                    onChange={(e) => setUposition(e.target.value)}
                  />
                ) : (
                  task.empposition
                )}
              </td>
              <td data-label="Priority">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                 value={utaskpriority}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                ) : (
                  task.taskpriority
                )}
              </td>
              <td data-label="taskstatus">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                 value={utaskstatus}
                    onChange={(e) => setTaskstatus(e.target.value)}
                  />
                ) : (
                  task.taskstatus
                )}
              </td></>)}</ProtectedRoute>
             <ProtectedRoute>{(role === 'admin' && <>   
                <td data-label="Task Name">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={utask_name}
                    onChange={(e) => setUtask(e.target.value)}
                  />
                ) : (
                  task.taskname
                )}
              </td>
              <td data-label="Description">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={utask_description}
                    onChange={(e) => setUdescribe(e.target.value)}
                  />
                 ) : (
                  task.taskdescription
                )}
              </td>
              <td data-label="Employee">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={uemp_task}
                    onChange={(e) => setUemp(e.target.value)}
                  />
                ) : (
                  task.emptask
                )}
              </td>
              <td data-label="Start Date">
                {newrowId === task.id ? (
                  <input
                    type="date"
                    className="collect"
                    value={ustart_task}
                    onChange={(e) => setUstart(e.target.value)}
                  />
                ) : (
                  task.starttask
                )}
              </td>
              <td data-label="End Date">
                {newrowId === task.id ? (
                  <input
                    type="date"
                    className="collect"
                    value={uend_task}
                    onChange={(e) => setUend(e.target.value)}
                  />
                ) : (
                  task.endtask
                )}
              </td>
             <td data-label="Position">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                    value={uemp_position}
                    onChange={(e) => setUposition(e.target.value)}
                  />
                ) : (
                  task.empposition
                )}
              </td>
              <td data-label="Priority">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                 value={utaskpriority}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                ) : (
                  task.taskpriority
                )}
              </td>
              <td data-label="taskstatus">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                 value={utaskstatus}
                    onChange={(e) => setTaskstatus(e.target.value)}
                  />
                ) : (
                  task.taskstatus
                )}
              </td></>)}</ProtectedRoute>
              <ProtectedRoute>{(role === 'employee' && <>  
           <td>{ task.taskname}</td>
           <td>{ task.taskdescription}</td>
           <td>{ task.emptask}</td>
           <td>{ task.starttask}</td>
           <td>{ task.endtask}</td>
           <td>{ task.empposition}</td>
           <td>{ task.taskpriority}</td>
                <td data-label="taskstatus">
                {newrowId === task.id ? (
                  <input
                    type="text"
                    className="collect"
                 value={utaskstatus}
                    onChange={(e) => setTaskstatus(e.target.value)}
                  />
                ) : (
                  task.taskstatus
                )}
              </td>  </>)}</ProtectedRoute>
        
            
            <ProtectedRoute>{(role === 'admin' && <> <td data-label="Actions" className="task-actions">
                {newrowId === task.id ? (
                  <button  style={{ width: "30px", backgroundColor: "#107f8e" }}
                    className="button-27"
                    onClick={() => handleSave(task.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fas fa-save"></i>
                    </div>
                  </button>
                ) : (
                  <button
                    style={{ width: "30px", backgroundColor: "#107f8e"}}
                    className="button-27"
                    onClick={() => handleEdit(task)}
                  > 
                   <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </div>
                  </button>
                )}     <ProtectedRoute>{(role === 'admin' &&
                  <button className="button-27"  style={{backgroundColor:" #107f8e",height:"40px", width:"30px"}}onClick={() => handleDelete(task.id)}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <i className="fas fa-trash"></i>
                            </div>
                  </button> )}</ProtectedRoute> </td> </>)}</ProtectedRoute>
                 
                <ProtectedRoute>{(role === 'manager' && <> <td data-label="Actions" className="task-actions">
                {newrowId === task.id ? (
                  <button  style={{ width: "30px", backgroundColor: "#107f8e" }}
                    className="button-27"
                    onClick={() => handleSave(task.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fas fa-save"></i>
                    </div>
                  </button>
                ) : (
                  <button
                    style={{ width: "30px", backgroundColor: "#107f8e"}}
                    className="button-27"
                    onClick={() => handleEdit(task)}
                  > 
                   <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </div>
                  </button>
                )}
                <ProtectedRoute>{(role === 'manager' && 
                <button className="button-27"  style={{backgroundColor:" #107f8e",height:"40px", width:"30px"}}onClick={() => handleDelete(task.id)}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fas fa-trash"></i>  
                          </div>
                </button> )}</ProtectedRoute></td> </>)}</ProtectedRoute>
           
              <ProtectedRoute>{(role === 'employee' &&<>
                <td data-label="Actions" className="task-actions">
                {newrowId === task.id ? (
                  <button  style={{ width: "30px", backgroundColor: "#107f8e" }}
                    className="button-27"
                    onClick={() => emphandleSave(task.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fas fa-save"></i>
                    </div>
                  </button>
                ) : (
                  <button
                    style={{ width: "30px", backgroundColor: "#107f8e"}}
                    className="button-27"
                    onClick={() => emphandleEdit(task)}
                  > 
                   <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </div>
                  </button>
                )}</td></>)}</ProtectedRoute>
              
         
            </tr>
          ))} 
        </tbody>
      </table>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}; 
export default TaskList;

 


 







// import React, { useEffect, useState } from 'react';
// import './tasklist.css';
// import Axios from 'axios';
// import ProtectedRoute from '../Protected';

// const TaskList = () => {
//   const [displaytask, setTasks] = useState([]);
//   const [error, setError] = useState('');
//   const [utask_name, setUtask] = useState('');
//   const [utask_description, setUdescribe] = useState('');
//   const [uemp_task, setUemp] = useState('');
//   const [ustart_task, setUstart] = useState('');
//   const [uend_task, setUend] = useState('');
//   const [uemp_position, setUposition] = useState('');
//   const [utaskpriority, setPriority] = useState('');
//   const [utaskstatus, setTaskstatus] = useState('');
//   const [newrowId, setUrowId] = useState(null);
//   const [TotalCount, setTotalcount] = useState('');
//   const [tcount, setTcount] = useState([]);
//   const [overdue, setOverdue] = useState('');
//   const [overcount, setOvercount] = useState([]);
//   const [complete, setComplete] = useState('');
//   const [ccount, setCcount] = useState([]);
//   const [pending, setPending] = useState('');
//   const [pcount, setPcount] = useState([]);
//   const [role, setUserRole] = useState(() => sessionStorage.getItem('userRole') || '');

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await Axios.get('http://localhost:3015/taskdisplay');
//         setTasks(response.data.displaytask);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.');
//       }
//     };
//     fetchRecords();
//   }, []);

//   useEffect(() => {
//     async function fetchCasualLeave() {
//       try {
//         const response = await Axios.get('http://localhost:3015/taskCount');
//         setTotalcount(response.data.TotalCount);
//         setTcount(response.data.tcount);
//         console.log('Casual leave count data fetched successfully');
//       } catch (error) {
//         setError('An error occurred while fetching casual leave count.');
//         console.error('Error fetching casual leave count:', error);
//       }
//     }
//     fetchCasualLeave();
//   }, []);

//   useEffect(() => {
//     async function fetchOvertask() {
//       try {
//         const response = await Axios.get('http://localhost:3015/overCount');
//         setOverdue(response.data.overdue);
//         setOvercount(response.data.overcount);
//         console.log('Overdue task count data fetched successfully');
//       } catch (error) {
//         setError('An error occurred while fetching overdue task count.');
//         console.error('Error fetching overdue task count:', error);
//       }
//     }
//     fetchOvertask();
//   }, []);

//   useEffect(() => {
//     async function fetchCompleteTask() {
//       try {
//         const response = await Axios.get('http://localhost:3015/completecount');
//         setComplete(response.data.complete);
//         setCcount(response.data.ccount);
//         console.log('Completed task count data fetched successfully');
//       } catch (error) {
//         setError('An error occurred while fetching completed task count.');
//         console.error('Error fetching completed task count:', error);
//       }
//     }
//     fetchCompleteTask();
//   }, []);

//   useEffect(() => {
//     async function fetchPendingTask() {
//       try {
//         const response = await Axios.get('http://localhost:3015/pendingcount');
//         setPending(response.data.pending);
//         setPcount(response.data.pcount);
//         console.log('Pending task count data fetched successfully');
//       } catch (error) {
//         setError('An error occurred while fetching pending task count.');
//         console.error('Error fetching pending task count:', error);
//       }
//     }
//     fetchPendingTask();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await Axios.delete(`http://localhost:3015/taskdelete/${id}`);
//       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//       alert('Task record deleted successfully');
//     } catch (error) {
//       console.error('Error deleting task record:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   const handleSave = async (id) => {
//     try {
//       const response = await Axios.put(`http://localhost:3015/taskupdate/${id}`, {
//         utask_name,
//         utask_description,
//         uemp_task,
//         ustart_task,
//         uend_task,
//         uemp_position,
//         utaskpriority,
//         utaskstatus,
//       });

//       if (response.status === 200) {
//         setTasks((prevTasks) =>
//           prevTasks.map((task) =>
//             task.id === id
//               ? {
//                   ...task,
//                   taskname: utask_name,
//                   taskdescription: utask_description,
//                   emptask: uemp_task,
//                   starttask: ustart_task,
//                   endtask: uend_task,
//                   empposition: uemp_position,
//                   taskpriority: utaskpriority,
//                   taskstatus: utaskstatus,
//                 }
//               : task
//           )
//         );
//         setUrowId(null);
//         setUtask('');
//         setUdescribe('');
//         setUemp('');
//         setUstart('');
//         setUend('');
//         setUposition('');
//         setPriority('');
//         setTaskstatus('');
//         alert('Task updated successfully');
//       } else {
//         throw new Error('Failed to update task');
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   const handleEdit = (task) => {
//     setUrowId(task.id);
//     setUtask(task.taskname);
//     setUdescribe(task.taskdescription);
//     setUemp(task.emptask);
//     setUstart(task.starttask);
//     setUend(task.endtask);
//     setUposition(task.empposition);
//     setPriority(task.taskpriority);
//     setTaskstatus(task.taskstatus);
//   };

//   const emphandleSave = async (id) => {
//     try {
//       const response = await Axios.put(`http://localhost:3015/emptaskupdate/${id}`, {
//         utaskstatus,
//       });

//       if (response.status === 200) {
//         setTasks((prevTasks) =>
//           prevTasks.map((task) =>
//             task.id === id ? { ...task, taskstatus: utaskstatus } : task
//           )
//         );
//         setUrowId(null);
//         setTaskstatus('');
//         alert('Task updated successfully');
//       } else {
//         throw new Error('Failed to update task');
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//       alert('An error occurred, please try again later');
//     }
//   };

//   const emphandleEdit = (task) => {
//     setUrowId(task.id);
//     setTaskstatus(task.taskstatus);
//   };

//   return (
//     <div className="task-list">
//       <div className="leave-summary">
//         <div className="summary-card">
//           <h3>
//             {tcount.map((total) => (
//               <div key={total.id}>
//                 <p>{total.TotalCount}</p>
//               </div>
//             ))}
//           </h3>
//           <p>Tasks Updated</p>
//         </div>
//         <div className="summary-card2">
//           <h3>
//             {pcount.map((over) => (
//               <div key={over.id}>
//                 <p>{over.pending}</p>
//               </div>
//             ))}
//           </h3>
//           <p>Tasks Pending</p>
//         </div>
//         <div className="summary-card3">
//           <h3>
//             {ccount.map((over) => (
//               <div key={over.id}>
//                 <p>{over.complete}</p>
//               </div>
//             ))}
//           </h3>
//           <p>Completed Tasks</p>
//         </div>
//         <div className="summary-card4">
//           <h3>
//             {overcount.map((over) => (
//               <div key={over.id}>
//                 <p>{over.overdue}</p>
//               </div>
//             ))}
//           </h3>
//           <p>Overdue Tasks</p>
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Employee</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Employee Position</th>
//             <th>Task Priority</th>
//             <th>Task Status</th>
//             {role === 'admin' && <th>Actions</th>}
//             {role === 'manager' && <th>Actions</th>}
//             {role === 'employee' && <th>Actions</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {displaytask.map((task) => (
//             <tr key={task.id}>
//               <ProtectedRoute>
//                 {role === 'admin' && (
//                   <>
//                     <td data-label="Task Name">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="collect"
//                           value={utask_name}
//                           onChange={(e) => setUtask(e.target.value)}
//                         />
//                       ) : (
//                         task.taskname
//                       )}
//                     </td>
//                     <td data-label="Description">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="new one"
//                           value={utask_description}
//                           onChange={(e) => setUdescribe(e.target.value)}
//                         />
//                       ) : (
//                         task.taskdescription
//                       )}
//                     </td>
//                     <td data-label="Employee">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="new task"
//                           value={uemp_task}
//                           onChange={(e) => setUemp(e.target.value)}
//                         />
//                       ) : (
//                         task.emptask
//                       )}
//                     </td>
//                     <td data-label="Start Date">
//                       {newrowId === task.id ? (
//                         <input
//                           type="date"
//                           className="newstart"
//                           value={ustart_task}
//                           onChange={(e) => setUstart(e.target.value)}
//                         />
//                       ) : (
//                         task.starttask
//                       )}
//                     </td>
//                     <td data-label="End Date">
//                       {newrowId === task.id ? (
//                         <input
//                           type="date"
//                           className="newend"
//                           value={uend_task}
//                           onChange={(e) => setUend(e.target.value)}
//                         />
//                       ) : (
//                         task.endtask
//                       )}
//                     </td>
//                     <td data-label="Position">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="p2"
//                           value={uemp_position}
//                           onChange={(e) => setUposition(e.target.value)}
//                         />
//                       ) : (
//                         task.empposition
//                       )}
//                     </td>
//                     <td data-label="Priority">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="p2"
//                           value={utaskpriority}
//                           onChange={(e) => setPriority(e.target.value)}
//                         />
//                       ) : (
//                         task.taskpriority
//                       )}
//                     </td>
//                     <td data-label="Status">
//                       {newrowId === task.id ? (
//                         <input
//                           type="text"
//                           className="p2"
//                           value={utaskstatus}
//                           onChange={(e) => setTaskstatus(e.target.value)}
//                         />
//                       ) : (
//                         task.taskstatus
//                       )}
//                     </td>
//                     <td>
//                       {newrowId === task.id ? (
//                         <>
//                           <button
//                             className="save"
//                             onClick={() => handleSave(task.id)}
//                           >
//                             Save
//                           </button>
//                           <button
//                             className="new task"
//                             onClick={() => setUrowId(null)}
//                           >
//                             Cancel
//                           </button>
//                         </>
//                       ) : (
//                         <button className="edit" onClick={() => handleEdit(task)}>
//                           Edit
//                         </button>
//                       )}
//                       <button
//                         className="delete"
//                         onClick={() => handleDelete(task.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </>
//                 )}
//               </ProtectedRoute>
              
//               <ProtectedRoute>
//                 {role === 'employee' && (
//                   <>
//                     <td data-label="Task Name">{task.taskname}</td>
//                     <td data-label="Description">{task.taskdescription}</td>
//                     <td data-label="Employee">{task.emptask}</td>
//                     <td data-label="Start Date">{task.starttask}</td>
//                     <td data-label="End Date">{task.endtask}</td>
//                     <td data-label="Position">{task.empposition}</td>
//                     <td data-label="Priority">{task.taskpriority}</td>
//                     <td data-label="Status">{task.taskstatus}</td>
//                     <td></td>
//                   </>
//                 )}
//               </ProtectedRoute>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default TaskList;
