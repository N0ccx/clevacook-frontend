import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register2.css";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle between true and false
  };

  return (
    <div className="signup-page">
      {/* Navbar with Back Arrow */}
      <div className="navbar">
        <Link to="/get-started" className="back-wrrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Create Account</h2>
      </div>

      {/* Logo */}
      <div className="logo-section">
        <img src="/logo.png" alt="Company Logo" className="logo" />
      </div>

      {/* Form */}
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              required
            />
            <img
              src={passwordVisible ? "/Eyeoff.png" : "/Eye.png"}
              alt="Toggle Password Visibility"
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <div className="f0rm-check">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link>
          </label>
        </div>
        <div className="f0rm-check">
          <input type="checkbox" id="promotions" />
          <label htmlFor="promotions">
            Send me updates on promotional offers
          </label>
        </div>
        <Link to="/ph1" className="get-started-btn">
          Get Started
        </Link>
      </form>

      {/* Already a Member */}
      <p className="member-text">
        Already a Member? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
