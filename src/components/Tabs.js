import { useState, useEffect } from 'react';
import axios from 'axios';




function Tabs() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const urlPopular = process.env.POPULAR_MOVIES_URL;
      const response = await axios.get({ urlPopular });

      const data = await response.json();
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  });

  return (
    <>
      <div>
        <h1>Popular Movies</h1>
        <ul>
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies.map((movie) => (
              <li key={movie.id}>
                <img src={movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h1>Popular TV Shows</h1>
      </div>
    </>
  );
}

export default Tabs;
