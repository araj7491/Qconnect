import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";
import Home from "./index.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("You are logged in successfully!");
      localStorage.setItem("userName", "Actual User Name");
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link to="/">
            <img src="/images/logo.png" alt="QConnect Logo" className="login-logo" />
          </Link>
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in</p>
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Remember for 30 days
            </label>
            <Link to="#" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
          <p className="signup-text">
            Don't have an account? <Link to="/create-account">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;