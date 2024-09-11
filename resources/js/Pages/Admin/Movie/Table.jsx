import React, { useState } from "react";
import { router } from "@inertiajs/react";
const Table = ({ movies }) => {
    console.log(movies);

    const [searchQuery, setSearchQuery] = useState("");
    const handleDelete = (movie_id) => {
        if (confirm("Are you Sure?")) {
            router.post(`/admin/movies/${movie_id}`, {
                _method: "delete",
            });
        }
    };
    const handleAddToFeature = (id) => {
        router.get(`/admin/movies/featured/${id}`);
    };
    const handleAddToBannered = (id) => {
        router.get(`/admin/movies/bannered/${id}`);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("en-GB", options).format(date);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };
    const filteredMovies = movies?.data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
    );
    const handlePagination = (page) => {
        if (page) {
            router.get(`${movies.meta.path}?page=${page}`);
        }
    };
    return (
        <>
            {movies?.data.length === 0 ? (
                <h3 className="text-center">No movies added yet.</h3>
            ) : (
                <>
                    <div>
                        <input
                            type="text"
                            placeholder="Search movies..."
                            onKeyUp={handleSearch}
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Poster</th>
                                <th>Name</th>
                                <th>Released</th>
                                <th>Rating</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMovies.length > 0 ? (
                                filteredMovies.map((item, key) => (
                                    <tr key={key}>
                                        <td>
                                            <img
                                                src={item.poster}
                                                width={100}
                                                alt={item.title}
                                            />
                                        </td>

                                        <td>{item.title}</td>
                                        <td>{item.releasing_year}</td>
                                        <td>{item.rating}</td>
                                        <td>
                                            {item.status == 1
                                                ? "Active"
                                                : "Inactive"}
                                        </td>
                                        <td>{formatDate(item.created_at)}</td>
                                        <td>{formatDate(item.updated_at)}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleAddToFeature(item.id)
                                                }
                                                className="btn btn-sm btn-info mr-2"
                                            >
                                                {item.isFeatured == 0
                                                    ? "Add to Feature"
                                                    : "Featured"}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleAddToBannered(item.id)
                                                }
                                                className="btn btn-sm btn-success mr-2"
                                            >
                                                {item.isBannered == 0
                                                    ? "Add to Banner"
                                                    : "Bannered"}
                                            </button>
                                            <button className="btn btn-sm btn-primary mr-2">
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No movies found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button
                            className="btn btn-sm btn-primary"
                            disabled={movies.meta.current_page === 1}
                            onClick={() =>
                                handlePagination(movies.meta.current_page - 1)
                            }
                        >
                            Previous
                        </button>
                        <span>
                            Page {movies.meta.current_page} of{" "}
                            {movies.meta.last_page}
                        </span>
                        <button
                            className="btn btn-sm btn-primary"
                            disabled={
                                movies.meta.current_page ===
                                movies.meta.last_page
                            }
                            onClick={() =>
                                handlePagination(movies.meta.current_page + 1)
                            }
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Table;
