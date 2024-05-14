import React from 'react';
import AppAPI from '../api/AppAPI';

const trendingMovies = AppAPI();

const MovieCard = () => {
  return (
    <ul>
      {trendingMovies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>{movie.popularity}</p>
          <p>{movie.release_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCard;
