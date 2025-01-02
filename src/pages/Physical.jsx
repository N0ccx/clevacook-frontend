import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PhysicalAttributes.css";

const PhysicalAttributes = () => {
  const [selectedSex, setSelectedSex] = useState(""); // Selected Biological Sex
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState(""); // Selected Feet
  const [heightInches, setHeightInches] = useState(""); // Selected Inches
  const [weight, setWeight] = useState(""); // Selected Weight
  const [selectedBodyFat, setSelectedBodyFat] = useState(""); // Selected Body Fat

  // Dropdown options
  const feetOptions = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`); // 1 to 8 ft
  const inchesOptions = Array.from({ length: 12 }, (_, i) => `${i} in`); // 0 to 11 in
  const weightOptions = Array.from({ length: 300 }, (_, i) => `${i + 30} kg`); // 30 to 329 kg

  return (
    <div className="physical-attrs-page">
      {/* Navbar with Back Arrow */}
      <div className="navbar">
        <Link to="/get-started" className="back-wrrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Physical Attributes</h2>
      </div>

      {/* Form */}
      <form className="attributes-form">
        {/* Biological Sex */}
        <div className="form-group">
          <label>Biological Sex</label>
          <div className="button-group">
            {["Female", "Male", "Others"].map((label) => (
              <button
                key={label}
                className={`custom-btn ${selectedSex === label ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSex(label);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="custom-dropdown"
          >
            <option value="" disabled>
              Years  
            </option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((ageOption) => (
              <option key={ageOption} value={ageOption}>
                {ageOption} 
              </option>
            ))}
          </select>
        </div>
          

        {/* Height */}
        <div className="form-group">
          <label>Height</label>
          <div className="height-dropdowns">
            <select
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                ft
              </option>
              {feetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              className="custom-dropdown"
            >
              <option value="" disabled>
                in
              </option>
              {inchesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weight */}
        <div className="form-group">
          <label>Weight</label>
          <select
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="custom-dropdown"
          >
            <option value="" disabled>
              kg
            </option>
            {weightOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Body Fat */}
        <div className="form-group">
          <label>Body Fat</label>
          <div className="button-group">
            {["Low", "Medium", "High"].map((label) => (
              <button
                key={label}
                className={`custom-btn ${
                  selectedBodyFat === label ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedBodyFat(label);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <Link to="/pf1" className="custom-next1-btn">
          Next
        </Link>
      </form>
    </div>
  );
};

export default PhysicalAttributes;
