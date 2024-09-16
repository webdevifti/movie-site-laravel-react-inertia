import React from "react";
import { Link } from "@inertiajs/react";

const LatestUpdatesMovies = ({latest_movies}) => {
  return (
    <div className="sidebar-widget">
      <h6>Latest Updates</h6>
      <hr />
      {latest_movies.map((item) => (
        <div className="latest-item" key={item.id}>
          <div className="thumbnail-box">
            <Link href={`/movie/${item.slug}`}>
              <img src={`/storage/uploads/movies/posters/${item.poster}`} className="thumbnail" alt={item.title} />
            </Link>
          </div>
          <div>
            <Link href={`/movie/${item.slug}`}>{item.title}</Link>
            <span>{item.releasing_year}</span>
            <br />
            <span>
              <i className="fa fa-star"></i>
              {item.imdb_rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestUpdatesMovies;
