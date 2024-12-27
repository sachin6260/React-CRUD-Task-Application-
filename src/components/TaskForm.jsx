import React, { useState, useEffect } from "react";
import "../styles/TaskForm.css";

const TaskForm = ({ onAddTask, onEditTask, currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim().length < 10) {
      alert("Title is required and description must be at least 10 characters.");
      return;
    }

    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      title,
      description,
      status,
    };

    if (currentTask) {
      onEditTask(task);
      setCurrentTask(null);
    } else {
      onAddTask(task);
    }

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
