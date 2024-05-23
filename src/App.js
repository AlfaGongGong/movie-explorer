import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.js";
import DetailsPage from "./pages/DetailsPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/details/:type/:id"
          element={<DetailsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
