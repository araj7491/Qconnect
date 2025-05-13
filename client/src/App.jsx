import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index"; // Your index/landing page component
import Login from "./pages/Login";
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;