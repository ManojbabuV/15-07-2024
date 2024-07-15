 

import React, { useEffect, useState } from 'react';
import './tasklist.css';
import Axios from 'axios';

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
  const [newrowId, setUrowId] = useState(null);
  
const [TotalCount,setTotalcount] = useState('')
const [tcount,setTcount] = useState([])
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
        utaskpriority
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
                  taskpriority: utaskpriority
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
        alert("Task updated successfully");
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert("An error occurred, please try again later");
    }
  };
  useEffect(() => {
    async function fetchCasualLeave() {
      try {
        const response = await Axios.get('http://localhost:3015/casul');
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
  const handleEdit = (task) => {
    setUrowId(task.id);
    setUtask(task.taskname);
    setUdescribe(task.taskdescription);
    setUemp(task.emptask);
    setUstart(task.starttask);
    setUend(task.endtask);
    setUposition(task.empposition);
    setPriority(task.taskpriority);
  };

  return (
    <div className="task-list">
      <div className="leave-summary">
        <div className="summary-card">
        <h3>
       {tcount.map((total) => (
       <div key={total.id}>
        <p>{total.TotalCount}</p>
       </div>
         ))}
</h3>
          <p>Tasks Updated</p>
        </div>
        <div className="summary-card2">
          <h3>8</h3>
          <p>Tasks Pending</p>
        </div>
        <div className="summary-card3">
          <h3>5</h3>
          <p>Completed Tasks</p>
        </div>
        <div className="summary-card4">
          <h3>3</h3>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displaytask.map((task) => (
            <tr key={task.id}>
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
             
              <td data-label="Actions" className="task-actions">
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
                <button className="button-27"  style={{backgroundColor:" #107f8e",height:"40px", width:"30px"}}onClick={() => handleDelete(task.id)}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <i className="fas fa-trash"></i>
                          </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TaskList;





//working code

// import React, { useEffect, useState } from 'react';
// import './tasklist.css';
// import Axios from 'axios';

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
//   const [completedTasks, setCompletedTasks] = useState([]);

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
//     const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
//     setCompletedTasks(storedCompletedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   const handleDelete = async (id) => {
//     try {
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
//                   taskname: utask_name,
//                   taskdescription: utask_description,
//                   emptask: uemp_task,
//                   starttask: ustart_task,
//                   endtask: uend_task,
//                   empposition: uemp_position,
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

//   const handleComplete = (taskId) => {
//     setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, taskId]);
//   };

//   const handleVerify = (taskId) => {
//     setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((id) => id !== taskId));
//     // Add additional verification logic here if needed
//   };

//   const handleReschedule = (taskId) => {
//     setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((id) => id !== taskId));
//     // Add additional rescheduling logic here if needed
//   };

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
//               <td data-label="Actions" className="task-actions">
//                 {newrowId === task.id ? (
//                   <button
//                     style={{ width: "30px", backgroundColor: "#107f8e" }}
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
//                   <>
//                     <button
//                       style={{ width: "30px", backgroundColor: "#107f8e" }}
//                       className="button-27"
//                       onClick={() => handleEdit(task)}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center"
//                         }}
//                       >
//                         <i className="fa fa-edit"></i>
//                       </div>
//                     </button>
//                     <button
//                       className="button-27"
//                       style={{ backgroundColor: "#107f8e", height: "40px", width: "30px" }}
//                       onClick={() => handleDelete(task.id)}
//                     >
//                       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                         <i className="fas fa-trash"></i>
//                       </div>
//                     </button>
//                     {!completedTasks.includes(task.id) ? (
//                       <button
//                         className="button-27" 
//                         style={{backgroundColor: "black",cursor:"pointer", height: "40px", width: "30px" }}
//                         onClick={() => handleComplete(task.id)}
//                       >
//                         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                           <i className="fas fa-check"></i>
//                         </div>
//                       </button>
//                     ) : (
//                       <>
//                         <button
//                           className="button-27"
//                           style={{ backgroundColor: "#107f8e", height: "40px", width: "30px" }}
//                           onClick={() => handleVerify(task.id)}
//                         >  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-check-double"></i>
//                           </div>
//                         </button>
//                         <button
//                           className="button-27"
//                           style={{ backgroundColor: "#107f8e", height: "40px", width: "30px" }}
//                           onClick={() => handleReschedule(task.id)}
//                         >  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                             <i className="fas fa-calendar-alt"></i>
//                           </div>
//                         </button>
//                       </>
//                     )}
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default TaskList;





 