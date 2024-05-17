import React from 'react';
import PopularMovies from '../fetch_data/PopularMovies';
import PopularTvShows from '../fetch_data/PopularTvShows';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className='home-main-content'>
      <h1>Welcome to the home page of the Movie Explorer</h1>
      <p>Your no1 choice to get a position at REBUS</p>
      <button
        onClick={() => {
          console.log('PopularTvShows button clicked');
        }}
      >
        PopularTvShows
      </button>
      <button
        onClick={() => {
          console.log('PopularMovies button clicked');
        }}
      >
        PopularMovies
      </button>
      <div className='popular-tv-shows'>
        <PopularTvShows />
      </div>
      <div className='popular-movies'>
        <PopularMovies />
      </div>
    </div>
  );
};

export default HomePage;
