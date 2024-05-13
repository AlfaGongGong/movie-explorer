import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage.js';
import MovieDetailsPage from './pages/MovieDetailsPage.js';
import TvShowDetailsPage from './pages/TvShowDetailsPage.js';
import NotFoundPage from './pages/NotFoundPage.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details" element={<MovieDetailsPage />} />
        <Route path="/tv-show-details" element={<TvShowDetailsPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
