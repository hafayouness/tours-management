import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
}

export default Routers;
