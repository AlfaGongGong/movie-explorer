import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Popular from "../components/Popular.js";
import ButtonGroup from "../components/ButtonGroup.js";
import SearchBar from "../components/SearchBar.js";
import "../styles/HomePage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("TV Shows");

  return (
    <>
      <Helmet>
        <title>Movie Explorer Home-Page</title>
      </Helmet>
      <div className="home-main-content">
        <h1>Welcome to the Movie Explorer</h1>
        <ButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
        <Popular activeTab={activeTab} />
      </div>
    </>
  );
};

export default HomePage;
