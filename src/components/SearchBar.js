import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [formData, setFormData] = useReducer(formReducer, {
    query: "",
    type: "tv",
  });
  const [submitting, setSubmitting] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.query.length >= 3) {
        fetchSearchResults();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData.query, formData.type]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({ [event.target.name]: event.target.value });
  };

  function formReducer(state, newState) {
    return { ...state, ...newState };
  }

  const fetchSearchResults = async () => {
    try {
      const { query, type } = formData;
      const response = await axios.get(
        `/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      "Error fetching search results:", error;
    }
  };

  return (
    <div className="search-bar">
      {submitting && <p>Searching...</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Search:
            <input
              type="text"
              name="query"
              placeholder="Search for movies or TV shows"
              onChange={handleChange}
              value={formData.query}
              className="search-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Type:
            <select
              name="type"
              onChange={handleChange}
              value={formData.type}
              className="search-select"
            >
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
            </select>
          </label>
          <button type="submit" className="search-button">
            Search
          </button>
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
        {searchResults.length === 0 && !submitting && <p>No results found</p>}
      </div>
    </div>
  );
};

export default SearchBar;
