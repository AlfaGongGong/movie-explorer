import React, {useState} from 'react';
import Popular from '../components/Popular.js';
import '../styles/HomePage.css';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState('tv');

  return (
    <div className='home-main-content'>
      <h1>Welcome to the home page of the Movie Explorer</h1>
      <p>Your no1 choice to get a position at REBUS</p>
      <div className='search-select'>
        <input
          type='text'
          placeholder='Search for a movie or TV show'
          className='search-input'
        />

        <Popular />
      </div>
    </div>
  );
};

export default HomePage;
