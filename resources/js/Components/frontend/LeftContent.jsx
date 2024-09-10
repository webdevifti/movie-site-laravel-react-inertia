import React from "react";
import FeatureMovies from "./FeatureMovies";
import BannerSliderMovies from "./BannerSliderMovies";
import LatestMovies from "./LatestMovies";
const LeftContent = ({movies,featured_movies,banneredMovies}) => {
  return (
    <div className="col-lg-9">
      <BannerSliderMovies banneredMovies={banneredMovies} />
      <FeatureMovies movies={featured_movies} />
      <LatestMovies movies={movies} />
    </div>
  );
};

export default LeftContent;
