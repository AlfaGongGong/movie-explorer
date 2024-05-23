import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Popular.css";
import config from "../config.json";
import axios from "../axios.js";

const Popular = ({ activeTab }) => {
  const [items, setItems] = useState([]);
  const type = activeTab === "TV Shows" ? "tv" : "movie";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/${type}/popular?language=en-US&page=1`
        );
        if (response.status === 200) {
          setItems(response.data.results.slice(0, 10));
        }
      } catch (error) {
        "Error fetching popular items:", error;
      }
    };
    fetchData();
  }, [activeTab]);

  return (
    <div className="content-wrapper">
      <h2>Top 10 Popular {activeTab}</h2>
      <div className="cards">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="card">
              <div className="card-header">
                <img
                  src={`${config.base_url}${item.poster_path}`}
                  alt={`${item.original_title || item.original_name} poster`}
                  className="card-image"
                />
                <h3 className="card-title">
                  {item.original_title || item.original_name}
                </h3>
              </div>
              <div className="card-body">
                <p className="card-release-date">
                  Release Date: {item.release_date}
                </p>
                <p className="card-rating">
                  Rating: {item.vote_average} of ({item.vote_count})
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="card-button"
                  onClick={() => {
                    window.location.href = `/details/${type}/${item.id}`;
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No popular {activeTab.toLowerCase()} found.</p>
        )}
      </div>
    </div>
  );
};

Popular.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Popular;
