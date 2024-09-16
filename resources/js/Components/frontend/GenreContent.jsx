import React from "react";
import MovieCard from "./MovieCard";

const GenreContent = ({ movies }) => {
    return (
        <div className="col-lg-9">
            {movies.length === 0 && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-center">
                            No Movies Available on this genre
                        </h5>
                    </div>
                </div>
            )}
            <div className="row">
                {movies.map((item, index) => (
                    <div className="col-lg-2" key={index}>
                        <MovieCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreContent;
