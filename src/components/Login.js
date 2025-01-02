import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

// Reusable Input Component
const InputField = ({ id, type, label, placeholder, value, onChange, isPassword, togglePasswordVisibility }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div className="password-container">
      <input
        type={isPassword ? (value ? "text" : "password") : type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
      />
      {isPassword && (
        <img
          src={value ? "/Eyeoff.png" : "/Eye.png"}
          alt="Toggle Password Visibility"
          className="eye-icon"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  </div>
);

// Reusable Social Login Button Component
const SocialLoginButton = ({ label, icon, link, ariaLabel }) => (
  <button
    aria-label={ariaLabel}
    role="button"
    className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
  >
    <img src={icon} className="w-5 h-5 fill-current" viewBox="0 0 32 32" />
    <p>{label}</p>
  </button>
);

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle between true and false
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

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
        <InputField
          id="email"
          type="email"
          label="Email Address"
          placeholder="leroy@jenkins.com"
          value={email}
          onChange={handleEmailChange}
        />

        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="*****"
          value={password}
          onChange={handlePasswordChange}
          isPassword={true}
          togglePasswordVisibility={togglePasswordVisibility}
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
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
          <SocialLoginButton
            label="Login with Google"
            icon="/google-icon.png"
            link="#"
            ariaLabel="Login with Google"
          />
          <SocialLoginButton
            label="Login with Facebook"
            icon="/facebook-icon.png"
            link="#"
            ariaLabel="Login with Facebook"
          />
          <SocialLoginButton
            label="Login with Apple"
            icon="/apple-icon.png"
            link="#"
            ariaLabel="Login with Apple"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
