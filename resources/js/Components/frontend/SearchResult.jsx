import React from "react";
import search_result from "@/assets/search_result";
import { Link } from "@inertiajs/react";

const SearchResult = () => {
  return (
    <div className="search-results">
      {search_result.map((item, index) => (
        <div
          className="search-result-item d-flex align-items-start gap-2"
          key={index}
        >
          <div>
            <img src={item.poster} alt={item.title} />
          </div>
          <div>
            <p>{item.title}</p>
            <div className="d-flex align-items-center gap-4">
              <p>IMDb: {item.rating}/10</p>
              <p>{item.releasing_year}</p>
            </div>
            <div>
              Genre:{" "}
              {item.genres.map((v, i) => (
                <Link
                  className="search-result-genres"
                  href={`/genre/${v.slug}`}
                  key={i}
                >
                  {v.name}
                </Link>
              ))}
              Languages:{" "}
              {item.languages.map((l, j) => (
                <span key={j}>{l.name},</span>
              ))}
              Quality: {item.quality}
              Sizes:{" "}
              {item.size.map((s, k) => (
                <span key={k}>{s.title},</span>
              ))}
              Actors:{" "}
              {item.actors.map((a, key) => (
                <span key={key}>{a.name},</span>
              ))}
              Director: {item.director}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
