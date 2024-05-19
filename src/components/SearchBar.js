import React, { useReducer, useState } from "react";
import axios from "axios";
import config from "../config";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies or TV shows"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass" /> Click to search
      </button>
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
  );


};
