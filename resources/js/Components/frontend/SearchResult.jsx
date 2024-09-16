import React from "react";
import { Link } from "@inertiajs/react";

const SearchResult = ({ movies }) => {
  
    return (
        <div className="search-results">
            {movies.length > 0 ? (
                <>
                    {movies.map((item, index) => (
                        <div
                            className="search-result-item d-flex align-items-start gap-2"
                            key={index}
                        >
                            <div>
                                <img
                                  width={100}
                                    src={`storage/uploads/movies/posters/${item.movie.poster}`}
                                    alt={item.movie.title}
                                />
                            </div>
                            <div>
                                <p>{item.movie.title}</p>
                                <div className="d-flex align-items-center gap-4">
                                    <p>IMDb: {item.movie.imdb_rating}/10</p>
                                    <p>{item.movie.releasing_year}</p>
                                </div>
                                <div>
                                    <strong> Genres: </strong>
                                    {item.genres.map((v, i) => (
                                       
                                        <span key={i}
                                            className="search-result-genres"
                                            href={`/genre/${v.slug}`}
                                           
                                        >
                                            {v.name}
                                        </span>
                                    ))}
                                    <br />
                                    <strong>Languages: </strong>
                                    {JSON.parse(item.movie.movies_links).map(
                                        (l, j) => (
                                            <span key={j}>{l.language},</span>
                                        )
                                    )}
                                    <br />
                                    <strong>Qualities: </strong>
                                    {JSON.parse(item.movie.movies_links).map(
                                        (l, j) => (
                                            <span key={j}>{l.quality},</span>
                                        )
                                    )}

                                    <br />
                                    <strong> Actors: </strong>
                                    {JSON.parse(item.movie.movies_casts).map(
                                        (a, key) => (
                                            <span key={key}>{a.name},</span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div>
                    <h3>No Movies Found!</h3>
                </div>
            )}
        </div>
    );
};

export default SearchResult;
