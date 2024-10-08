import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";
import { Link } from "@inertiajs/react";
const LatestMovies = ({movies}) => {
  return (
    <div className="latest-movies">
      <div className="d-flex align-items-center justify-content-between">
      <h5>Latest</h5>
      <Link href="movies/latest" className="view-all-link">View all</Link>
      </div>
      <div className="row">
        {movies.map((item) => (
          <div key={item.id} className="col-lg-2 mb-2 mt-2">
           <MovieCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
