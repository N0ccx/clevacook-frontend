import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DietPreferences.css";

const DietPreferences = () => {
  const diets = ["Balanced", "Keto", "Vegetarian", "Pescatarian", "Vegan", "Carnivore"];
  const [selectedDiet, setSelectedDiet] = useState("");

  return (
    <div className="diet-preferences-page">
      {/* Navbar */}
      <div className="navbar">
        <Link to="/pf2" className="back-wrrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Diet Preferences</h2>
      </div>

      {/* Rectangles with Diet Preferences */}
      <div className="rectangles-section">
        {diets.map((diet, index) => (
          <div
            key={index}
            className={`r3ctangl3 ${selectedDiet === diet ? "active" : ""}`}
            onClick={() => setSelectedDiet(diet)}
          >
            <img
              src={`/images/${diet.toLowerCase()}-icon.png`}
              alt={`${diet} icon`}
              className="diet-icon-box"
            />
            <span className="diet-text-box">{diet}</span>
          </div>
        ))}
      </div>
        
    
      {/* Submit Button */}
      <Link to="/health" className="custom-next3-btn">
        Next
      </Link>
    </div>
  );
};

export default DietPreferences;
