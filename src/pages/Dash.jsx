import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard1.css";

const Dashboard1 = () => {
const RecipeSection = ({ title, link, items }) => (
  <div className="section">
    <div className="section-header">
      <h4>{title}</h4>
      <Link to={link} className="see-all-link">
        See All
      </Link>
    </div>
    <ul className="list">
      {items.map((item, index) => (
        <li className="recipe-card" key={index}>
          <div className="image-container">
            <img
              src={`/${item.toLowerCase()}.png`}
              alt={item}
              className="recipe-image"
            />
          </div>
          <p className="recipe-text">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

const MealCard = () => {
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
  }]

  // Mock data
  const globalRecipes = ["Nigerian", "British", "American"];
  const healthSpecific = ["Low Carbs", "Fruits and Veggies", "High Protein"];
  const clevaSpecials = ["Chef's Choice", "Seasonal Favorites", "Quick Bites"];
  const recommendations = ["Fruits & Veggies", "Drinks & Cocktails", "Brunch"];

  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="navbar">
        <div className="welcome-section">
          <h2>Hi, {username || "User"}</h2>
          <p>{todayDate}</p>
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
              <img src="/Notification.png" alt="Notifications" />
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="upgrade-section">
        <h3>Personalize your Eating Experience</h3>
        <button className="upgrade-btn">Upgrade to a Premium Membership Plan</button>
      </div>

      {/* Today's Meal Section */}
      <div className="todays-meal-section">
        <div className="section-header">
          <h4>Today's Meal</h4>
          <Link to="/plan" className="see-full-plan">
            See Full Plan
          </Link>
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
            <button className="swap-meal-btn">
              Swap Meal <img src="/Sparkling.png" alt="tokens" />
            </button>
          </div>

      {/* Recommendations Section */}
      <RecipeSection
        title="Recommendations"
        link="/recommendations"
        items={recommendations}
      />

      {/* Global Recipes Section */}
      <RecipeSection
        title="Global Recipes"
        link="/global-meals"
        items={globalRecipes}
      />

      {/* Health Specific Section */}
      <RecipeSection
        title="Health Specific"
        link="/health-meals"
        items={healthSpecific}
      />

      {/* Cleva Specials Section */}
      <RecipeSection
        title="Cleva Specials"
        link="/cleva-specials"
        items={clevaSpecials}
      />

      <Link to="/" className="custom-next3-btn">
        Generate New Recipe <img src="/Sparkling.png" alt="tokens-img" />
      </Link>

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
};

export default Dashboard1;
