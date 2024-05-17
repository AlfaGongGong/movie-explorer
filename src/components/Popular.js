import React, {useState, useEffect} from 'react';
import config from '../config.json';
import axios from '../axios.js';

const Popular = () => {
  const [activeTab, setActiveTab] = useState('TV SHOWS');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const type = activeTab === 'TV SHOWS' ? 'tv' : 'movie';
      const response = await axios.get(
        `/${type}/popular?language=en-US&page=1`
      );
      const data = response.data;

      if (response.status === 200) {
        setItems(data.results);
      }
    }
    fetchData();
  }, [activeTab]);

  return (
    // Add the select element to the JSX

    <div className='popular-container' id='selectView'>
      <h2>Popular {activeTab}</h2>
      <select
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
        className='select'
      >
        <option value='TV SHOWS'>TV SHOWS</option>
        <option value='MOVIES'>MOVIES</option>
      </select>
      <div className='card'>
        {items
          ? items.map((item) => (
              <div key={item.id} className='card-wrapper'>
                <img
                  src={`${config.base_url}${item.poster_path}`}
                  alt={`${item.original_title || item.original_name} poster`}
                  className='card-image'
                />
                <h2>Title: {item.original_title || item.original_name}</h2>
                <p>
                  First air date: {item.first_air_date || item.release_date}
                </p>
                <p>Rating: {item.vote_average}</p>
              </div>
            ))
          : 'No response'}
      </div>
    </div>
  );
};

export default Popular;
