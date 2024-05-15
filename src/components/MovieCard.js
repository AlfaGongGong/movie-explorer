import React from "react";
import defaultImage from "../images/default.jpg";
import trendingMoviesApi from "../hooks/trendingMoviesApi";

const MovieCard = () => {
  const { original_title, release_date, backdrop_path } = trendingMoviesApi();

  return (
    <div>
      <div>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : defaultImage
          }
          alt={original_title}
        />
        <h3>Title:{original_title}</h3>
        <p>Release date:{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
