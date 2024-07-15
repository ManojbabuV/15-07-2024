// AdminTaskList.jsx
import React from 'react';

const AdminTaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name} {/* Display task name */}
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Undo' : 'Completed'} {/* Toggle button label based on task status */}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AdminTaskList;
