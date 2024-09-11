import React, { useState } from "react";
import { router } from "@inertiajs/react";

const Table = ({ genres, setEdit, setEditValues }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleDelete = (genre) => {
        if (confirm("Are you Sure?")) {
            router.post(`/admin/genres/${genre}`, {
                _method: "delete",
            });
        }
    };
    const handleEditButton = (item) => {
        setEdit(true);
        setEditValues({ genre: item.name, id: item.id });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("en-GB", options).format(date);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };
    const filteredGenres = genres?.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
    );
    return (
        <>
            {genres?.length === 0 ? (
                <h3 className="text-center">No movies added yet.</h3>
            ) : (
                <>
                    <div>
                        <input
                            type="text"
                            placeholder="search genre..."
                            onKeyUp={handleSearch}
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredGenres.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.status == 1
                                            ? "Active"
                                            : "Inactive"}
                                    </td>
                                    <td>{formatDate(item.created_at)}</td>
                                    <td>{formatDate(item.updated_at)}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary mr-2"
                                            onClick={() =>
                                                handleEditButton(item)
                                            }
                                        >
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
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

export default Table;
