import React from 'react';
import { Helmet } from 'react-helmet';
import Tabs from '../components/Tabs.js';
import '../styles/HomePage.css';



 function HomePage()  {


  const metaValues = {
    name: 'Movie Explorer HomePage',
    description: 'A React.js application to explore movies and TV shows',
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'A placeholder image',
    },
  };
   return (
     <div>
   <Helmet>
          <title>{metaValues.name}</title>
          <meta name="description" content={metaValues.description} />
          <meta property="og:title" content={metaValues.name} />
          <meta property="og:description" content={metaValues.description} />
          <meta property="og:image" content={metaValues.image.src} />
          <meta property="og:image:alt" content={metaValues.image.alt} />
     </Helmet>
     <div className="containeer">
        <div className="title " >
        <h1>{metaValues.name}</h1>
       <p>{metaValues.description}</p>
     </div>
        <div className="main-content">
<Tabs />
       </div>
       </div>
      </div>
    );
  }


export default HomePage;
