import React from "react";
import Home from "../../pages/Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
