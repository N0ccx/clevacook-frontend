import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Health.css";

const HealthPage = () => {
  const [allergies, setAllergies] = useState([
    "Shellfish",
    "Fish",
    "Gluten",
    "Dairy Milk",
    "Peanut",
    "Tree Nut",
    "Soy",
    "Egg",
    "Sesame",
    "Sulfite",
    "Nightshade",
  ]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedHealthCondition, setSelectedHealthCondition] = useState("");

  const toggleAllergy = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    } else if (selectedAllergies.length < 5) {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  const toggleHealthCondition = (condition) => {
    setSelectedHealthCondition(
      selectedHealthCondition === condition ? "" : condition
    );
  };

  return (
    <div className="health-page">
      {/* Navbar with Back Arrow */}
      <div className="navbar">
        <Link to="/diet" className="back-wrrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Health Preferences</h2>
      </div>

      {/* Allergies Section */}
      <div className="section">
        <label>Allergies</label>
        <div className="grid-container">
          {allergies.map((allergy, index) => (
            <button
              key={index}
              className={`grid-item ${
                selectedAllergies.includes(allergy) ? "active" : ""
              }`}
              onClick={() => toggleAllergy(allergy)}
            >
              {allergy}
            </button>
          ))}
          <button className="grid-item add-new-btn">Add</button>
        </div>
      </div>

      {/* Health SConditions Section */}
      <div className="secti0n1">
        <label>Health Conditions</label>
        <div className="grid-c2">
          {["Diabetes", "Heart Condition"].map((condition, index) => (
            <button
              key={index}
              className={`grid-item ${
                selectedHealthCondition === condition ? "active" : ""
              }`}
              onClick={() => toggleHealthCondition(condition)}
            >
              {condition}
            </button>
          ))}
        </div>
        <div className="grid-c2">
          {["Hypertension", "Immune Condition"].map((condition, index) => (
            <button
              key={index}
              className={`grid-item ${
                selectedHealthCondition === condition ? "active" : ""
              }`}
              onClick={() => toggleHealthCondition(condition)}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="next-button-container">
        <Link to="/dashboard" className="next-bu5ton">
          Next
        </Link>
      </div>
    </div>
  );
};

export default HealthPage;
