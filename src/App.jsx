import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TaskManagerPage from "./pages/TaskManagerPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task-manager" element={<TaskManagerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
