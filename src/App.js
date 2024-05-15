import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieDetailsPage from "./pages/MovieDetailsPage.js";
import TvShowDetailsPage from "./pages/TvShowDetailsPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import HomePage from "./pages/HomePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/tv-shows/:tvShowId" element={<TvShowDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
