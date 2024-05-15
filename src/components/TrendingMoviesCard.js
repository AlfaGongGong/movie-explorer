import React from "react";
import AxiosConf from "../hooks/AxiosConf";
import axios from "axios";

class TrendingMoviesCard extends React.Component {
  constructor() {
    super();
    this.state = {
      trendingMovies: []
    };
  }

  componentDidMount() {
    axios(AxiosConf)
      .then((response) => {
        this.setState({ trendingMovies: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Trending Movies</h1>
        <div className="trending-movies">
          {this.state.trendingMovies.map((movie) => (
            <div key={movie.id} className="trending-movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TrendingMoviesCard;
