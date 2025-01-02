import React from 'react';
import '../styles/OpeningPage.css';
import { Link } from 'react-router-dom';

const OpeningPage = () => {
  return (
    <div className="opening-page">
      <div className="container">
         <img src="/logo1.png" alt="home_logo" className="home_logo" />
        <p className="home_text">
        <Link to="/get-started">Ai Powered Nutrition & Meal Prep Partner</Link>
        </p>
      </div>
    </div>
  );
};

export default OpeningPage;
