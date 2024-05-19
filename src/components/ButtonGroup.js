import React from "react";
import PropTypes from "prop-types";
import "../styles/ButtonGroup.css";

const ButtonGroup = ({ activeTab, setActiveTab }) => {
  return (
    <div className="button-group">
      <div className="buttons">
        <button
          onClick={() => setActiveTab("TV Shows")}
          className={activeTab === "TV Shows" ? "active" : ""}
        >
          TV Shows
        </button>
        <button
          onClick={() => setActiveTab("Movies")}
          className={activeTab === "Movies" ? "active" : ""}
        >
          Movies
        </button>
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ButtonGroup;
