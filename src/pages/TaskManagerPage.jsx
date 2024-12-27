import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskManagerPage = () => {
  // Initialize state with tasks from localStorage or an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [currentTask, setCurrentTask] = useState(null);

  // Function to save tasks to localStorage
  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Add task function
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Edit task function
  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Delete task function
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="task-manager-page">
      <h1>Task Manager</h1>
      <TaskForm
        onAddTask={addTask}
        onEditTask={editTask}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <TaskList tasks={tasks} onEdit={setCurrentTask} onDelete={deleteTask} />
    </div>
  );
};

export default TaskManagerPage;
