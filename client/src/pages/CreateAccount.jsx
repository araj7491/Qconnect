import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

const INTERESTS = [
  { id: "cs", label: "Computer Science" },
  { id: "math", label: "Mathematics" },
  { id: "physics", label: "Physics" },
  { id: "chem", label: "Chemistry" },
  { id: "eco", label: "Economics" },
  { id: "hum", label: "Humanities" },
  { id: "bio", label: "Biology" },
  { id: "eng", label: "Engineering" }
];

export default function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
    interests: []
  });
  const [maxDate, setMaxDate] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMaxDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleVerify = e => {
    e.preventDefault();
    if (!form.email) {
      alert("Please enter a valid email address first.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Verification code sent to your email!");
    setShowVerification(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      dob,
      email,
      password,
      confirmPassword,
      verificationCode,
      interests
    } = form;

    let missingFields = [];
    if (!name) missingFields.push("Name");
    if (!dob) missingFields.push("Date of Birth");
    if (!email) missingFields.push("Email Address");
    if (!password) missingFields.push("Password");
    if (!confirmPassword) missingFields.push("Confirm Password");
    if (!verificationCode) missingFields.push("Verification Code");

    if (missingFields.length > 0) {
      alert("Please enter: " + missingFields.join(", "));
      return;
    }

    const dobYear = new Date(dob).getFullYear();
    if (dobYear < 1900) {
      alert("Year of birth must be 1900 or later.");
      return;
    }

    if (interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least one capital letter, one number, one special character, and be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const verificationRegex = /^\d{6}$/;
    if (!verificationRegex.test(verificationCode)) {
      alert("Verification code must be a 6-digit number.");
      return;
    }

    // Store email and password in localStorage (for demo only)
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          <img src="/images/logo.png" alt="Logo" className="login-logo" />
        </a>
        <div className="login-header">
          <h2>Create Account</h2>
          <p>Join us and explore more!</p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              min="1900-01-01"
              max={maxDate}
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              id="verify-btn"
              className="sign-in-btn"
              style={{ marginTop: 10, background: "#11eaf1" }}
              onClick={handleVerify}
            >
              Send Verification Code
            </button>
          </div>
          {showVerification && (
            <div className="input-group" id="verification-code-group">
              <label htmlFor="verification-code">Enter Verification Code</label>
              <input
                type="password"
                id="verification-code"
                name="verificationCode"
                placeholder="Enter the code you received"
                value={form.verificationCode}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="note">
              Password must contain:
              <ul style={{ margin: "5px 0 0 20px", paddingLeft: 0, fontSize: "0.8rem", color: "#888" }}>
                <li>At least one capital letter (A-Z)</li>
                <li>At least one number (0-9)</li>
                <li>At least one special character (@, $, !, %, *, ?, &amp;)</li>
                <li>Minimum 6 characters</li>
              </ul>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="interests-container">
            {INTERESTS.map(interest => (
              <React.Fragment key={interest.id}>
                <input
                  type="checkbox"
                  id={interest.id}
                  name="interests"
                  value={interest.label}
                  checked={form.interests.includes(interest.label)}
                  onChange={handleChange}
                />
                <label htmlFor={interest.id}>{interest.label}</label>
              </React.Fragment>
            ))}
          </div>
          <br />
          <button type="submit" id="createAccountBtn" className="sign-in-btn">
            Create Account
          </button>
          <div className="signup-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}