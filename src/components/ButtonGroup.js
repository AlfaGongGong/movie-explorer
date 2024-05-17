import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ButtonGroup.css';

const ButtonGroup = ({activeTab, setActiveTab}) => {
  return (
    <div className='button-group'>
      <div className='buttons'>
        <button
          className={`button ${activeTab === 'TV Shows' ? 'active' : ''}`}
          onClick={() => setActiveTab('TV SHOWS')}
        >
          TV SHOWS
        </button>
        <button
          className={`button ${activeTab === 'Movies' ? 'active' : ''}`}
          onClick={() => setActiveTab('Movies')}
        >
          MOVIES
        </button>
      </div>
      <div className='search'>
        <input
          type='text'
          placeholder='Search for a movie or TV show'
          className='search-input'
        />
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ButtonGroup;
