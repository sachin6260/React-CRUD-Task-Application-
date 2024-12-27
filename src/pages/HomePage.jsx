import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Task Manager</h1>
      <p>Manage your tasks efficiently.</p>
      <Link to="/task-manager">
        <button className="navigate-button">Go to Task Manager</button>
      </Link>
    </div>
  );
};

export default HomePage;
