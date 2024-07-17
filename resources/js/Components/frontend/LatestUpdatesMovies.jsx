import React from "react";
import { Link } from "@inertiajs/react";
import recent_updates_movies from "@/assets/recent_updates_movies";

const LatestUpdatesMovies = () => {
  return (
    <div className="sidebar-widget">
      <h6>Latest Updates</h6>
      <hr />
      {recent_updates_movies.map((item) => (
        <div className="latest-item" key={item.id}>
          <div className="thumbnail-box">
            <Link href={`/movie/${item.slug}`}>
              <img src={item.poster} className="thumbnail" alt={item.title} />
            </Link>
          </div>
          <div>
            <Link href={`/movie/${item.slug}`}>{item.title}</Link>
            <span>{item.releasing_year}</span>
            <br />
            <span>
              <i className="fa fa-star"></i>
              {item.avg_rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestUpdatesMovies;
