import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/movies" element={<h1>Movies</h1>} />
      <Route path="/tv-shows" element={<h1>TV Shows</h1>} />
    </Router>
  );
}

export default App;
