import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index.jsx";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
