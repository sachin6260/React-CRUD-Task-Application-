import React from "react";
import "../styles/TaskList.css";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const getProgressBarValue = (status) => {
    switch (status) {
      case "In Progress":
        return 50;  
      case "Completed":
        return 100;  
      default:
        return 10;  
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            
            {/* Progress Bar */}
            <div className="progress-container">
              <progress 
                value={getProgressBarValue(task.status)} 
                max="100"
                className={`progress-bar ${task.status.toLowerCase().replace(" ", "-")}`}
              ></progress>
            </div>

            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
