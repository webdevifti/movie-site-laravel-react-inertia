import React from "react";
import LatestUpdatesMovies from "./LatestUpdatesMovies";
import CategoriesList from "./CategoriesList";

const RightContent = ({categories,latest_movies}) => {
  return (
    <div className="col-lg-3">
      <LatestUpdatesMovies latest_movies={latest_movies} />
      <CategoriesList categories={categories} />
    </div>
  );
};

export default RightContent;
