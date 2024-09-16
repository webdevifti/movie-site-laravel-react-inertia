import { Link } from "@inertiajs/react";
import React from "react";

const Menu = ({genres,categories}) => {
  const genreChunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const chunkedGenres = genreChunkArray(genres, 7);

  const categoriesChunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const chunkedCategories = categoriesChunkArray(categories, 8);

  return (
    <ul className="menu">
      <div className="dropdown-toggle menu-item">
        Movies
        <ul className="dropdown-menu">
          {chunkedCategories.map((chunk, index) => (
            <div key={index}>
              {chunk.map((category) => (
                <Link key={category.id} href={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="dropdown-toggle menu-item">
        Genre
        <ul className="dropdown-menu">
          {chunkedGenres.map((chunk, index) => (
            <div key={index}>
              {chunk.map((genre) => (
                <Link key={genre.id} href={`/genre/${genre.slug}`}>
                  {genre.name}
                </Link>
              ))}
            </div>
          ))}
        </ul>
      </div>
      
    </ul>
  );
};

export default Menu;
