import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "../styles/SearchBar.css";

const SearchBar = ({ activeTab }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const fetchData = async () => {
    if (debouncedSearchTerm.length >= 3) {
      const response = await axios.get(
        `/${activeTab}?${debouncedSearchTerm}api_key=${config.api_key}`
      );
      const data = response.data;

      if (response.status === 200) {
        setSearchResults(data.results);
      } else {
        setSearchResults([]);
      }
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setDebouncedSearchTerm(searchTerm);
  };

  useEffect(() => {
    fetchData();
  }, [debouncedSearchTerm, activeTab]);

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for movies or TV shows"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass" /> Click to search
        </button>
      </div>
      <div className="content-wrapper">
        <div className="cards">
          {searchResults.map((item) => (
            <div key={item.id} className="card">
              <img
                src={`${config.base_url}${item.poster_path}`}
                alt={`${item.original_title || item.original_name} poster`}
                className="card-image"
              />
              <h2>Title: {item.original_title || item.original_name}</h2>
              <p>First air date: {item.first_air_date || item.release_date}</p>
              <p>Rating: {item.vote_average}</p>
              <button
                className="card-button"
                onClick={() => {
                  window.location.href = `${item.id}`;
                }}
              >
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
