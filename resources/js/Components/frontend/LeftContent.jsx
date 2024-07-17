import React from "react";
import FeatureMovies from "./FeatureMovies";
import BannerSliderMovies from "./BannerSliderMovies";
import LatestMovies from "./LatestMovies";
const LeftContent = () => {
  return (
    <div className="col-lg-9">
      <BannerSliderMovies />
      <FeatureMovies />
      <LatestMovies />
    </div>
  );
};

export default LeftContent;
