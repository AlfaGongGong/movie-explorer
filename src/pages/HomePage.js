import React from 'react';
import { Helmet } from 'react-helmet';
import Tabs from '../components/Tabs';

const HomePage = {
  metaValues: {
    name: 'Movie Explorer HomePage',
    description: 'A React.js application to explore movies and TV shows',
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'A placeholder image',
    },
  },

  render() {
    return (
      <>
        <Helmet>
          <title>{metaValues.name}</title>
          <meta name="description" content={metaValues.description} />
          <meta property="og:image" content={metaValues.image.src} />
          <meta property="og:image:alt" content={metaValues.image.alt} />
        </Helmet>
        <div>
          <h1>{metaValues.name}</h1>
          <Tabs />
        </div>
      </>
    );
  },
};

export default HomePage;
