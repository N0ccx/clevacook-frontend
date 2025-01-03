import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const InputField = ({ id, type, label, placeholder, value, onChange, isPassword, togglePasswordVisibility }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div className="password-container">
      <input
        type={isPassword ? (value ? "text" : "password") : type}
        id={id}
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

const SocialLoginButton = ({ label, icon, link, ariaLabel }) => (
  <button
    aria-label={ariaLabel}
    role="button"
    className="social-login-btn flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
    onClick={() => window.location.href = link}
  >
    <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
    <p>{label}</p>
  </button>
);

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <div className="navbar">
        <Link to="/get-started" className="back-arrow">
          &#8592;
        </Link>
        <h2>Login</h2>
      </div>

      <div className="logo-section">
        <img src="/logo.png" alt="Company logo" className="logo" />
      </div>

      <form className="login-form" novalidate>
        <InputField
          id="email"
          type="email"
          label="Email Address"
          placeholder="leroy@jenkins.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="*****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassword={true}
          togglePasswordVisibility={togglePasswordVisibility}
        />

        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
          Login
        </button>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="member-text">
          Don't have an Account? <Link to="/register">Sign Up</Link>
        </p>

        <div className="my-6 space-y-4">
          <SocialLoginButton label="Login with Google" icon="/google-icon.png" link="#" ariaLabel="Login with Google" />
          <SocialLoginButton label="Login with Facebook" icon="/facebook-icon.png" link="#" ariaLabel="Login with Facebook" />
          <SocialLoginButton label="Login with Apple" icon="/apple-icon.png" link="#" ariaLabel="Login with Apple" />
        </div>
      </form>
    </div>
  );
};

export default Login;
