import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import GetStartedPage from "./pages/GetStarted";
import GetStartedPage2 from "./pages/GetStarted2";
import Register from "./pages/Register2";
import CulturalPref2 from "./pages/Culural2";
import Login from "./pages/Login"
import Diet from "./pages/Diet"
import PhysicalAttributes from "./pages/Physical";
import HealthPage from "./pages/Health";
import MealPlan from "./pages/MealPlan";
import KitchenPage from "./pages/KitchenPage";
import Dashboard1 from "./pages/Dash";
import Login2 from "./pages/Login2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/get-started2" element={<GetStartedPage2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signin1" element={<Login2 />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/pf1" element={<CulturalPref2 />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/ph1" element={<PhysicalAttributes />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/dashboard" element={<Dashboard1 />} />
        <Route path="/kitchen" element={<KitchenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
