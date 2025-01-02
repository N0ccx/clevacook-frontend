import React from "react";
import { Link } from "react-router-dom";
import "../styles/MealPlan.css";
import { generateCalendarItems } from "../../constants";

// Reusable MealCard Component
const MealCard = ({ meal, details, imageSrc, servingOptions }) => (
  <div className="meal-card">
    <img src={imageSrc} alt={meal} className="meal-logo" />
    <div className="meal-info">
      <p className="meal-name">{meal}</p>
      <button className="favorite-btn"><img src="/Favorite.png" /></button>
    </div>
    <div className="meal-details">
      <div className="detail-grid">
        <div className="detail-item">
          <p className="detail-label">Kal</p>
          <p className="detail-value">{details.kal}</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Cost</p>
          <p className="detail-value">{details.cost}</p>
        </div> 
        <div className="detail-item">
          <p className="detail-label">Prep Time</p>
          <p className="detail-value">{details.prepTime}</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Rating</p>
          <p className="detail-value">{details.rating}</p>
        </div>
      </div>
    </div>
    <div className="meal-actions">
      <select className="meal-serving">
        {servingOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className="swap-meal-btn1"><img src="/swap-meal.png" alt="tokens" />
      </button>
    </div>
  </div>
);

const MealPlan = () => {
  const calendarItems = generateCalendarItems();
  const meals = [
  {
    name: "Popcorn",
    details: {
      kal: "200",
      cost: "N150",
      prepTime: "5-10 min",
      rating: "⭐ 4.3",
    },
    imageSrc: "/popcorn.png",
  },
  {
    name: "Eba & Egusi Soup",
    details: {
      kal: "300",
      cost: "N350",
      prepTime: "30-40 min",
      rating: "⭐ 4.8",
    },
    imageSrc: "/eba-egusi.png",
  },
    {
      name: "Vegetable & Potato Stir-Fry",
      details: {
      kal: "300",
      cost: "N350",
      prepTime: "30-40 min",
      rating: "⭐ 4.8",
      },
      imageSrc: "/vegetable-potato.png",
    }  
  ];

  return (
    <div className="meal-plan-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="welcome-section">
          <h2>Meal Plan</h2>
        </div>
        <div className="nav-icons">
          <div className="tokens">
            <p className="square-tokens">
              5
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

      {/* Meal Plan Section */}
      <div className="meal-plan-header">
        <h3>Meal Plan</h3>
        <img src="/planner.png" alt="Planner" />
      </div>
      {/* Upgrade Section */}
      <div className="upgrade-section">
      <Link to="/" className="upgrade-btn"><img src="/persona.png" /></Link>
      </div>

      {/* Calendar Section */}
      <div className="calendar-section">
  {calendarItems.map((item, index) => {
    // Conditional Styling Based on Position
    const isMiddle = index === 2;
    const isDefault = index < 2;
    const boxStyle = isMiddle
      ? "middle-box"
      : isDefault
      ? "default-box"
      : "other-box";

    return (
      <div key={index} className={`calendar-item ${boxStyle}`}>
        <p className="calendar-day">{item.day}</p>
        <p className="calendar-date">{item.date}</p>
        <p className="calendar-number">{item.number}</p>
      </div>
    );
  })}
</div>

      {/* Today's Meal Section */}
      <div className="todays-meal-section">
        <div className="section-header">
          <h4>Today's Meal</h4>
        </div>

        {/* Meals */}
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            meal={meal.name}
            details={meal.details}
            imageSrc={meal.imageSrc}
            servingOptions={["1 Serving", "2 Servings", "3 Servings"]}
          />
        ))}
      </div>

      {/* Generate New Plan Button */}
      <Link to="/" className="generate-plan-btn">
        Generate New Plan <img src="/Sparkling.png" alt="tokens-img" />
      </Link>
    </div>
  );
};

export default MealPlan;
