import React from "react";
import "../styles/Home.css"; // Import the CSS file for styling
import logo from "../assets/logo.png"; // Replace with your logo's path

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="App Logo" className="home-logo" />
    </div>
  );
}

export default Home;
