import React from "react";
import TrendingMoviesCard from "../components/TrendingMoviesCard";

const HomePage = () => {
  return (
    <div>
      <h1>Movie Explorer</h1>
      <h2>Trending Movies</h2>
      <TrendingMoviesCard />
    </div>
  );
};

export default HomePage;
