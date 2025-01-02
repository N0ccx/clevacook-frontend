import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cultural.css";

const CulturalPreferences = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [regionOnly, setRegionOnly] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [cookingSkill, setCookingSkill] = useState("");
  const [budget, setBudget] = useState("");
  const [religion, setReligion] = useState("");

  // Fetch countries JSON data
  useEffect(() => {
    fetch("/data/countries.json")
      .then((response) => response.json())
      .then((data) => setCountriesData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="cultural-prefs-page">
      {/* Navbar */}
      <div className="navbar">
        <Link to="/get-started" className="back-arrow">
          &#8592; {/* Back Arrow */}
        </Link>
        <h2>Cultural Preferences</h2>
      </div>

      {/* Preferences Form */}
      <form className="prefs-form">
        {/* Country Selection */}
        <div className="form2-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Select your country
            </option>
            {countriesData.map((country) => (
              <option key={country.code3} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Selection */}
        {selectedCountry && (
          <div className="form2-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="" disabled>
                Select your state
              </option>
              {countriesData
                .find((country) => country.name === selectedCountry)
                ?.states.map((state) => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Region Preference */}
        <div className="form2-group">
          <label>
            Only recommend meals from my current region
            <p className="note">
              Note: We recommend selecting meals from your current country as
              ingredients are easier to find.
            </p>
          </label>
          <button
            type="button"
            className={`toggle-btn ${regionOnly ? "active" : ""}`}
            onClick={() => setRegionOnly(!regionOnly)}
          >
            {regionOnly ? "Yes" : "No"}
          </button>
        </div>

        {/* Cooking Frequency */}
        <div className="form2-group">
          <label>How often do you cook?</label>
          <div className="button-group">
            {["Never", "Sometimes", "Always"].map((label) => (
              <button
                key={label}
                className={`preference-btn ${frequency === label ? "active" : ""}`}
                onClick={() => setFrequency(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cooking Skill */}
        <div className="form2-group">
          <label>How would you describe your cooking skill?</label>
          <div className="button-group">
            {["Beginner", "Intermediate", "Advanced"].map((label) => (
              <button
                key={label}
                className={`preference-btn ${
                  cookingSkill === label ? "active" : ""
                }`}
                onClick={() => setCookingSkill(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget per Meal */}
        <div className="form2-group">
          <label>Budget per meal</label>
          <div className="button-group">
            {["Small", "Okay", "Large"].map((label) => (
              <button
                key={label}
                className={`preference-btn ${budget === label ? "active" : ""}`}
                onClick={() => setBudget(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Religious Restrictions */}
        <div className="form2-group">
          <label>Religious Restrictions</label>
          <div className="button-group">
            {["Islam (Halal)", "Judaism (Kosher)"].map((label) => (
              <button
                key={label}
                className={`preference-btn ${religion === label ? "active" : ""}`}
                onClick={() => setReligion(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Save Preferences Button */}
        <button type="submit" className="get-started-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default CulturalPreferences;
