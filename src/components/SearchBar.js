import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import config from "../config.json";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("tv");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchSearchResults = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `/search/${type}?query=${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error); // eslint-disable-line no-console
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (!value.trim()) {
      setSearchResults([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSearchResults(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Search for movies or TV shows"
          onChange={handleInputChange}
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
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Searching...</p>}
      {!loading && query.trim() !== "" && searchResults.length === 0 && (
        <p>No results found</p>
      )}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.id}
                onClick={() => navigate(`/details/${type}/${result.id}`)}
                className="search-result-item"
              >
                <img
                  src={`${config.base_url}${result.poster_path}`}
                  alt={result.original_title || result.original_name}
                  className="search-result-image"
                />
                <div className="search-result-info">
                  <h3>{result.original_title || result.original_name}</h3>
                  <p>{result.overview}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
