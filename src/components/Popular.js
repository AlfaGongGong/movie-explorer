import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Popular.css";
import config from "../config.json";
import axios from "../axios.js";

const Popular = ({ activeTab }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const type = activeTab === "TV Shows" ? "tv" : "movie";
      const response = await axios.get(
        `/${type}/popular?language=en-US&page=1&limit=10`
      );
      const data = response.data;
      if (response.status === 200) {
        setItems(data.results.slice(0, 10));
      }
    }
    fetchData();
  }, [activeTab]);

  return (
    <div className="content-wrapper">
      <h2>TOP 10 Popular {activeTab}</h2>
      <div className="cards">
        {items
          ? items.map((item) => (
              <div key={item.id} className="card">
                <img
                  src={`${config.base_url}${item.poster_path}`}
                  alt={`${item.original_title || item.original_name} poster`}
                  className="card-image"
                />
                <h2>Title: {item.original_title || item.original_name}</h2>
                <p>
                  First air date: {item.first_air_date || item.release_date}
                </p>
                <p>Rating: {item.vote_average}</p>
                <button
                  className="card-button"
                  onClick={() => {
                    window.location.href = `/${item.id}`;
                  }}
                >
                  View details
                </button>
              </div>
            ))
          : "No response from the server"}
      </div>
    </div>
  );
};

Popular.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Popular;
