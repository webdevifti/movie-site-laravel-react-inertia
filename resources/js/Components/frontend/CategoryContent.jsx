import React from "react";
import MovieCard from "./MovieCard";
import category_movies from "@/assets/category_movies";

const CategoryContent = () => {
  return (
    <div className="col-lg-9">
      <div className="row">
        {category_movies.map((item, index) => (
          <div className="col-lg-2" key={index}>
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
