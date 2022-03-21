import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Liked from "./pages/liked";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default RoutesList;
