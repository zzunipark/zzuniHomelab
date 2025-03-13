import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import GlobalStyle from "./Styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<P.MainPage />} />
    </Routes>
  </Router>
);