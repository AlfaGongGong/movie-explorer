import React, { useState } from "react";
import Popular from "../components/Popular.js";
import ButtonGroup from "../components/ButtonGroup.js";
import SearchBar from "../components/SearchBar.js";
import "../styles/HomePage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("TV Shows");

  return (
    <div className="home-main-content">
      <h1>Welcome to the home page of the Movie Explorer</h1>
      <p>Your no1 choice to get a position at REBUS</p>
      <ButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} /> {}
      <SearchBar />
      <Popular activeTab={activeTab} />
    </div>
  );
};

export default HomePage;
