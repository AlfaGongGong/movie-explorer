import { useState, useEffect } from "react";
import axios from "../axios";
import config from "../config.json";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/movie/popular?language=en-US&page=1");
      const data = response.data;

      if (response.status === 200) {
        setMovies(data.results);
        return;
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {movies
        ? movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img
                  src={`${config.base_url}${movie.poster_path}`}
                  alt="Movie poster"
                />
                <h2>Title:{movie.original_title}</h2>
              </div>
            );
          })
        : "No response"}
    </div>
  );
};

export default HomePage;
