import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GetStarted3.css'

const GetStartedPage = () => {
  return (
    <div className="get-started-page">
      <div className="jumbotroon">
        <img src="/logo.png" alt="get-started-logo" className="get-started-logo" />
        <p className="opening-text">
          Ai Powered Nutrition & Meal Prep Partner
        </p>
      </div>
    <div className="bottom-section">
        <Link to="/get-started2" className="get-started-b">
          Get Started
        </Link>
        <p className="member-texxt">
          Already a Member? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default GetStartedPage;
