  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import "../styles/Cultural2.css";

  const CulturalPreferences2 = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [frequency, setFrequency] = useState("");
    const [cookingSkill, setCookingSkill] = useState("");
    const [budget, setBudget] = useState("");
    const [religion, setReligion] = useState("");

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
          <Link to="/ph1" className="back-ar1row">
            &#8592; {/* Back Arrow */}
          </Link>
          <h2>Cultural Preferences</h2>
        </div>

        {/* Preferences Form */}
        <form className="custom-prefs-form">
          {/* Country Selection */}
          <div className="custom-form-group">
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
            <div className="custom-form-group">
              <label htmlFor="state">State/Province</label>
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
          <div className="custom-form-group">
            <label>
              Only recommend meals from my current region
              <p className="note">
                Note: We recommend selecting meals from your current country as
                ingredients are easier to find.
              </p>
            </label>
            <div className="custom-button-group">
            {["Never", "Sometimes", "Always"].map((label) => (
              <button
                key={label}
                className={`custom-preference-btn ${frequency === label ? "custom-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFrequency(label);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          </div>

      {/* Preferences */}
      {[
  {
    label: "How would you describe your cooking skill?",
    options: ["Beginner", "Intermediate", "Advanced"],
    value: cookingSkill,
    setter: setCookingSkill,
  },
  {
    label: "Budget per meal",
    options: ["Small", "Okay", "Large"],
    value: budget,
    setter: setBudget,
  },
  {
    label: "Religious Restrictions",
    options: ["Islam (Halal)", "Judaism (Kosher)"],
    value: religion,
    setter: setReligion,
  },
    ].map(({ label, options, value, setter }, index) => (
      <div key={index} className="custom-form-group">
        <label>{label}</label>
        <div className="custom-button-group">
          {options.map((option) => (
            <button
              key={option}
              className={`custom-preference-btn ${value === option ? "custom-active" : ""}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default button behavior
                setter(option); // Set the value
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ))}

          {/* Save Preferences Button */}
        <Link to="/diet" className="custom-next-btn">
            Next
        </Link>
        </form>
      </div>
    );
  };

  export default CulturalPreferences2;
