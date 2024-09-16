import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const MainContent = ({categories,featuredMovies,banneredMovies, movies,latest_movies}) => {
  return (
    <div className="container">
      <div className="main-content">
        <div className="row">
          <LeftContent featured_movies={featuredMovies} banneredMovies={banneredMovies} movies={movies} />
          <RightContent latest_movies={latest_movies} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
