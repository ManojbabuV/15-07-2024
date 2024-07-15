import React from 'react';
import './admin.css';

const AdmcinTaskList = ({ tasks, deleteTask, toggleTaskCompletion, role, handleRescheduleRequest }) => {
  return (

    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button className={`task-complete ${task.completed ? 'completed' : ''}`} onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Completed' : 'Mark as Complete'}
            </button>
            {role === 'admin' || role === 'manager' ? (
              <>
                <button onClick={() => deleteTask(task.id)} className="button-27">Delete</button>
                {!task.completed && (
                  <button onClick={() => handleRescheduleRequest(task.id)} className="button-27">Reschedule</button>
                )}
              </>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdmcinTaskList;
