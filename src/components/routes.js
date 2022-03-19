import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Liked from "./liked/liked";


const RoutesList = () => (
<Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/liked" element={<Liked/>} />
    <Route component={Home} />
</Routes>
)

export default RoutesList;
 