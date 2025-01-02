import React from "react";
import { Link } from "react-router-dom";


const GetStarted2 = () => {
  return (
    <div className="get-started-page">
      <div className="jumbotron2">
        <img src="/logo.png" alt="get-started-2-logo" className="get-started-2-logo" />
        <p className="get-started-text">Ai Powered Nutrition & Meal Prep Partner</p>
      </div>
    <div className="bottom-section" />
    <ul className="list">
      <li className="nav-item">
        <Link to='/register' className="text-white">
        Sign up with Email</Link>
      </li>
      <li className="rects">
        <img src="/google-icon.png" />
        <Link to='/' className="text-darrk">
        Continue with Google</Link>
      </li>
      <li className="rects">
        <img src="/facebook-icon.png" />
        <Link to='/' className="text-darrk">
        Continue with Facebook</Link>
      </li>
      <li className="rects">
        <img src="/apple-icon.png" />
        <Link to='/' className="text-darrk">
        Continue with Apple</Link>
      </li>
    </ul>
    <p className="member-texxt">
          Already a Member? <Link to="/signin">Sign In</Link>
    </p>
  </div>
  );
};

export default GetStarted2;
