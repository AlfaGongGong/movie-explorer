import React, { useState } from "react";
import axios from "../axios";
import config from "../config";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [type, setType] = useState("movie");

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setLoading(true);

    setTimeout(() => {
      function checkIfTyping(lastValue) {
        if (lastValue === event.target.value) {
          if (event.target.value.trim() === "") {
            setSearchResults([]);
            setLoading(false);
            return;
          }
          fetchSearchResults(event.target.value);
        }
      }
      checkIfTyping(value);
    }, 3000);
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`
      );
      setLoading(false);
      setSearchResults(response.data.results);
    } catch (error) {
      "Error fetching search results:", error;
    }
  };

  return (
    <div className="search-bar">
      <form>
        <fieldset>
          <label>
            Search:
            <input
              type="text"
              name="query"
              placeholder="Search for movies or TV shows"
              onChange={handleChange}
              className="search-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Type:
            <select
              name="type"
              onChange={handleTypeChange}
              value={type}
              className="search-select"
            >
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
            </select>
          </label>
        </fieldset>
      </form>
      <div className="search-results">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <img
                  src={`${config.base_url}${result.poster_path}`}
                  alt={result.original_title}
                  className="search-result-image"
                />
                <div className="search-result-info">
                  <h3>{result.original_title}</h3>
                  <p>{result.overview}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {(loading && <p>Searching...</p>) ||
          (searchResults.length === 0 && <p>No results found</p>)}
      </div>
    </div>
  );
};

export default SearchBar;
