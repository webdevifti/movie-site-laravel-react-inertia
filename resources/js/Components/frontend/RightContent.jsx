import React from "react";
import LatestUpdatesMovies from "./LatestUpdatesMovies";
import CategoriesList from "./CategoriesList";

const RightContent = ({categories}) => {
  return (
    <div className="col-lg-3">
      <LatestUpdatesMovies />
      <CategoriesList categories={categories} />
    </div>
  );
};

export default RightContent;
