import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle between true and false
  };

  return (
    <div className="login-page">
      {/* Navbar with Back Arrow */}
      <div className="navbar">
        <Link to="/get-started" className="back-arrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Login</h2>
      </div>

      {/* Logo */}
      <div className="logo-section">
        <img src="/logo.png" alt="Company logo" className="logo" />
      </div>

      {/* Form */}
      <form className="login-form" novalidate>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="leroy@jenkins.com"
            required
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="*****"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <img
              src={passwordVisible ? "/Eyeoff.png" : "/Eye.png"}
              alt="Toggle Password Visibility"
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        {/* Login Button */}
        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
          Login
        </button>

        {/* Forgot Password */}
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="member-text">
          Don't have an Account? <Link to="/register">Sign Up</Link>
        </p>

        {/* Social Login */}
        <div className="my-6 space-y-4">
        <button
            aria-label="Login with Google"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <img src="/google-icon.png" viewBox="0 0 32 32" className="w-5 h-5 fill-current" />
            <p>Login with Google</p>
        </button>
        <button
            aria-label="Login with Twitter"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <img src="/facebook-icon.png" className="w-5 h-5 fill-current" viewBox="0 0 32 32"/>
            <p className="">Login with Facebook</p>
        </button>
        <button
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <img src="/apple-icon.png" alt="Apple" viewBox="0 0 32 32" className="w-5 h-5 fill-current" />
            <Link to="/" className="text-dark">Login with Apple</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
