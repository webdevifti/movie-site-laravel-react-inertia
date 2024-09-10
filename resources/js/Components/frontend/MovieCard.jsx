import React from "react";
import { Link } from "@inertiajs/react";
const MovieCard = (props) => {
    const item = props.item;
  return (
    <div className="movie-card">
      <div className="poster">
        <Link href={`/movie/${item.slug}`}>
          <img src={`/storage/uploads/movies/posters/${item.poster}`} alt={item.title} />
        </Link>
        <div className="movie-rating">
          <span>
            <i className="fa fa-star"></i> {item.rating}
          </span>
        </div>
      <div className="movie-tag">
        <span>{item.tag}</span>
      </div>
      </div>
      <div>
        <p className="movie-name">
          <Link href={`/movie/${item.slug}`}>{item.title}</Link>
        </p>
        <span className="releasing-year">{item.releasing_year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
