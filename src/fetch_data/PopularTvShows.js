import React from 'react';
import config from '../config.json';
import {useEffect, useState} from 'react';
import axios from '../axios';

const PopularTvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/tv/popular?language=en-US&page=1');
      const data = response.data;

      if (response.status === 200) {
        setTvShows(data.results);
        return;
      }
    }
    fetchData();
  }, []);
  return (
    <div className='card'>
      {tvShows
        ? tvShows.map((tvShow) => {
            return (
              <div key={tvShow.id} className='card-wrapper'>
                <img
                  src={`${config.base_url}${tvShow.poster_path}`}
                  alt='TV show poster'
                  className='card-image'
                />
                <h2>Title:{tvShow.original_name}</h2>
                <p>First air date:{tvShow.first_air_date}</p>
                <p>Rating:{tvShow.vote_average} </p>
              </div>
            );
          })
        : 'No response'}
    </div>
  );
};

export default PopularTvShows;
