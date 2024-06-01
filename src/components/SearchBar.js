import React, { useState } from "react";
import axios from "../axios";
import config from "../config";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [type, setType] = useState("tv");

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTypeChange = (event) => {
    function checkIfTyping(lastValue) {
      if (lastValue === event.target.value) {
        if (event.target.value.trim() === "") {
          setSearchResults([]);
          setLoading(false);
          return;
        }
        fetchSearchResults(event.target.value);
        setSearchResults(
          searchResults.filter(
            (result) =>
              result.title &&
              result.title
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
          )
        );
      }
    }
    checkIfTyping(event.target.value);
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
    });
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`
      );
      setLoading(false);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error); // eslint-disable-line no-console
    }
  };

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          name="query"
          placeholder="Search for movies or TV shows"
          onChange={handleTypeChange}
          className="search-input"
        />
        <select
          name="type"
          onChange={(event) => setType(event.target.value)}
          value={type}
          className="search-select"
        >
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
        <button type="submit" className="search-button" onClick={handleChange}>
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
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
        </div>
      )}
      <div className="search-results">
        {(loading && <p>Searching...</p>) ||
          (loading !== loading && searchResults.length === 0 && (
            <p>No results found</p>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
