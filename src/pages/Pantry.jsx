import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Pantry.css";

const cookwareItems = ["Frying Pan", "Saucepan", "Stockpot", "Wok", "Griddle", "Roasting Pan", "Skillet", "Pressure Cooker", "Small Oven", "Stock Pot","Duet Oven", "Rice Cooker"];
const utensilsItems = ["Spatula", "Whisk", "Ladle", "Tongs", "Peeler", "Silicone", "Rolling Pin", "Potato Masher", "Spotted Spoon", "Garlic Press"];
const knivesItems = ["Chef Knife", "Paring Knife", "Bread Knife", "Santoku Knife", "Cleaver", "Kitchen Scissors", "Mandoline Slicer", "Meat Tenderizer"];

const MyTools = () => {
  const [myTools, setMyTools] = useState([]);
  const [newTool, setNewTool] = useState("");

  const addTool = () => {
    if (newTool.trim() && newTool.length <= 20) {
      setMyTools([...myTools, newTool]);
      setNewTool("");
    }
  };

  const handleToolClick = (tool) => {
    if (!myTools.includes(tool)) {
      setMyTools([...myTools, tool]);
    }
  };

  return (
    <div className="my-tools-page">
      {/* Navbar */}
      <div className="navbar">
        <Link to="/kitchen" className="back-arrow">
          &#8592;
        </Link>
        <h2>My Tools</h2>
        <button className="save-button">Save</button>
      </div>

      {/* My Tools Section */}
      <div className="my-tools-section">
        <h3>My Tools</h3>
        <div className="tools-list">
          {myTools.map((tool, index) => (
            <div key={index} className="tool-box">
              {tool}
            </div>
          ))}
          <div className="add-tool">
            <input
              type="text"
              maxLength="20"
              value={newTool}
              placeholder="Add a tool"
              onChange={(e) => setNewTool(e.target.value)}
            />
            <button onClick={addTool}>+ Add</button>
          </div>
        </div>
      </div>

      {/* Cookware Section */}
      <div className="tools-category">
        <h3>Cookware</h3>
        <div className="items-list">
          {cookwareItems.map((item, index) => (
            <button
              key={index}
              className="item-button"
              onClick={() => handleToolClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Utensils Section */}
      <div className="tools-category">
        <h3>Utensils</h3>
        <div className="items-list">
          {utensilsItems.map((item, index) => (
            <button
              key={index}
              className="item-button"
              onClick={() => handleToolClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Knives and Cutting Tools Section */}
      <div className="tools-category">
        <h3>Knives and Cutting Tools</h3>
        <div className="items-list">
          {knivesItems.map((item, index) => (
            <button
              key={index}
              className="item-button"
              onClick={() => handleToolClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTools;
