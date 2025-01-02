import React from "react";
import { Link } from "react-router-dom";
import "../styles/KitchenPage.css";

const KitchenPage = () => {
  const kitchenItems = [
    { label: "My Store/Pantry", image: "/store-pantry.png" },
    { label: "Cookware", image: "/cookware.png" },
    { label: "Grocery List", image: "/grocery-list.png" },
    { label: "Favorite Recipes", image: "/favorite-recipes.png" },
  ];

  return (
      
    <div className="kitchen-page">
      <div className="navbar">
        <div className="welcome-section">
          <h2>My Kitchen</h2>
        </div>
        <div className="nav-icons">
          <div className="tokens">
            <p className="square-tokens">
              10
              <img src="/Sparkling.png" alt="tokens-img" />
            </p>
          </div>
          <div className="notifications">
            <div className="notification-ellipse">
              <img src="/Notification.png" alt=" notifications" />
            </div>
          </div>
        </div>
      </div>
      {/* Reusable Boxes */}
      {kitchenItems.map((item, index) => (
        <div key={index} className="kitchen-box">
          <img src={item.image} alt={item.label} />
        </div>
      ))}

      {/* Generate New Recipe Button */}
      <button className="generate-recipe-btn">
        Generate New Recipe <img src="/Sparkling.png" alt="icon" />
      </button>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        {["Today", "Meal Plan", "My Kitchen", "Nutrition", "Preferences"].map(
          (label, index) => (
            <div className="nav-item" key={index}>
              <img src={`/${label.toLowerCase()}-icon.png`} alt={label} />
              <p>{label}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default KitchenPage;
