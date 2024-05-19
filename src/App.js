import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import "./App.css";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Your no1 choice to get a position at REBUS"
        />
        <title>Movie Explorer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/cddafc2ead.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/${item.original_title}" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
