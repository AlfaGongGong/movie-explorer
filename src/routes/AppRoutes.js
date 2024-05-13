import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';

function AppRoutes() {
  return (
    <Router>
      {/* Home Page Route */}
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default AppRoutes;
