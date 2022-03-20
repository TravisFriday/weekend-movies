import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Liked from "./pages/liked";

const RoutesList = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/liked" element={<Liked />} />
    <Route component={Home} />
  </Routes>
);

export default RoutesList;
