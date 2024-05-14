import React from 'react';

import MovieCard from '../components/MovieCard.js';

function HomePage() {
  const metaValues = {
    name: 'Movie Explorer HomePage',
    description: 'A React.js application to explore movies and TV shows',
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'A placeholder image',
    },
  };
  return (
    <div className="containeer" id="trending" key={metaValues}>
      <h1>{metaValues.name}</h1>
      <p>{metaValues.description}</p>
      <MovieCard />
    </div>
  );
}

export default HomePage;
