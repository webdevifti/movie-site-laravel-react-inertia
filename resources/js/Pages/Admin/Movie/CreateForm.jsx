import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateForm = ({ auth, active_categories, active_ganres,status,error }) => {
    const [value, setValues] = useState({
        title: "",
        originaltitle: "",
        category: "",
        genre: [],
        releasing_year: "",
        rating: "",
        poster: null,
        trailer: "",
        description: "",
    });
    const [casts, setCasts] = useState([
        { cast_role: "", cast_name: "", character_name: "", cast_img: "" },
    ]);
    const [downloadLinks, setDownloadLinks] = useState([
        { url: "", language: "", quality: ""},
    ]);
    const categoryOptions = active_categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));
    const castRole = [
        {
            value: "Actor",
            label: "Actor",
        },
        {
            value: "Director",
            label: "Director",
        },
    ];
    const genreOptions = active_ganres.map((genre) => ({
        value: genre.id,
        label: genre.name,
    }));
    const handleSelectChange = (selectedOption, { name }) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: selectedOption
                ? Array.isArray(selectedOption)
                    ? selectedOption.map((option) => option.value)
                    : selectedOption.value
                : "",
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(value).forEach((key) => {
            if (key === "poster") {
                formData.append(key, value[key]);
            } else if (Array.isArray(value[key])) {
                value[key].forEach((item, index) => {
                    formData.append(`${key}[${index}]`, item);
                });
            } else {
                formData.append(key, value[key]);
            }
        });

        casts.forEach((cast, index) => {
            Object.keys(cast).forEach((key) => {
                let valueToAppend = cast[key];

                if (
                    key === "cast_role" &&
                    typeof valueToAppend === "object" &&
                    valueToAppend !== null
                ) {
                    valueToAppend = valueToAppend.value || "";
                }

                formData.append(`casts[${index}][${key}]`, valueToAppend);
            });
        });
        downloadLinks.forEach((item, index) => {
            Object.keys(item).forEach((key) => {
                let valueToAppend = item[key];
                formData.append(`links[${index}][${key}]`, valueToAppend);
            });
        });

       router.post(route("admin.movies.store"), formData);
        
        
        setValues({
            title: "",
            originaltitle: "",
            category: "",
            genre: [],
            releasing_year: "",
            rating: "",
            poster: null,
            trailer: "",
            description: "",
        });
        setCasts([
            { cast_role: "", cast_name: "", character_name: "", cast_img: "" },
        ]);
        setDownloadLinks([
            { url: "", language: "", quality: ""},
        ]);

      
    };
    if(error){
        console.log(error);
    }
    if(status && status === 'success'){
        toast.success('Movie has been added successfully.');
    }

    const handleAddMoreCasts = () => {
        setCasts([
            ...casts,
            { cast_role: "", cast_name: "", character_name: "", cast_img: "" },
        ]);
    };
    const handleAddMoreDownloadLinks = () => {
        setDownloadLinks([
            ...downloadLinks,
           { url: "", language: "", quality: ""},
        ]);
    };
    const handleRemoveCast = (index) => {
        const newCasts = casts.filter((_, i) => i !== index);
        setCasts(newCasts);
    };
    const handleRemoveDownlaodLink = (index) => {
        const newDownloadLinks = downloadLinks.filter((_, i) => i !== index);
        setDownloadLinks(newDownloadLinks);
    };

    const handleCastSelectChange = (selectedOption, index) => {
        const newCasts = [...casts];
        newCasts[index].cast_role = selectedOption;
        setCasts(newCasts);
    };

    const handleCastChange = (e, index) => {
        const { name, value, files } = e.target;
        const newCasts = [...casts];
        newCasts[index][name] = files ? files[0] : value;
        setCasts(newCasts);
    };
    const handleDownloadsLinkChange = (e, index) => {
        const { name, value } = e.target;
        const newDownloadLink = [...downloadLinks];
        newDownloadLink[index][name] = value;
        setDownloadLinks(newDownloadLink);
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create Movie
                    </h2>
                }
                btn={
                    <Link
                        className="btn btn-primary btn-sm"
                        href={route("admin.movies.index")}
                    >
                        Go Back
                    </Link>
                }
            >
                <Head title="Create Movie" />

                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-white shadow-sm p-4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-2">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                id="title"
                                                type="text"
                                                name="title"
                                                value={value.title}
                                                onChange={handleChange}
                                                placeholder="Movie title"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-2">
                                            <label htmlFor="originaltitle">
                                                Original Title
                                            </label>
                                            <input
                                                id="originaltitle"
                                                type="text"
                                                name="originaltitle"
                                                value={value.originaltitle}
                                                onChange={handleChange}
                                                placeholder="Original title"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="cat">
                                                Category
                                            </label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="category"
                                                id="cat"
                                                options={categoryOptions}
                                                onChange={handleSelectChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="genre">
                                                Genres
                                            </label>
                                            <Select
                                                id="genre"
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isMulti
                                                name="genre"
                                                options={genreOptions}
                                                onChange={handleSelectChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="date">
                                                Releasing Year
                                            </label>
                                            <input
                                                type="date"
                                                name="releasing_year"
                                                value={value.releasing_year}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="rating">
                                                Rating
                                            </label>
                                            <input
                                                type="text"
                                                name="rating"
                                                value={value.rating}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="9.0"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="poster">
                                                Poster
                                            </label>
                                            <input
                                                type="file"
                                                name="poster"
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <label htmlFor="trailer">
                                                Trailer Link
                                            </label>
                                            <input
                                                type="text"
                                                name="trailer"
                                                value={value.trailer}
                                                onChange={handleChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-2">
                                            <label htmlFor="description">
                                                Info Description
                                            </label>
                                            <textarea
                                                name="description"
                                                rows={4}
                                                cols={30}
                                                className="form-control"
                                                id="description"
                                                placeholder="Movie Description"
                                                value={value.description}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-sm p-4 mt-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Casts</h6>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        onClick={handleAddMoreCasts}
                                    >
                                        Add More
                                    </button>
                                </div>
                                <hr />
                                {casts.map((cast, index) => (
                                    <div
                                        className="mb-2"
                                        key={index}
                                    >
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="mb-2">
                                                    <Select
                                                        className="basic-single"
                                                        classNamePrefix="select"
                                                        name={`cast_role[${index}]`}
                                                        id="cast_role"
                                                        options={castRole}
                                                        onChange={(
                                                            selectedOption
                                                        ) =>
                                                            handleCastSelectChange(
                                                                selectedOption,
                                                                index
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="mb-2">
                                                    <input
                                                        type="text"
                                                        name="cast_name"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        onChange={(e) =>
                                                            handleCastChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        value={cast.cast_name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-2">
                                                    <input
                                                        type="text"
                                                        name="character_name"
                                                        className="form-control"
                                                        placeholder="Character Name"
                                                        onChange={(e) =>
                                                            handleCastChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        value={
                                                            cast.character_name
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-2">
                                                    <input
                                                        type="file"
                                                        name="cast_img"
                                                        onChange={(e) =>
                                                            handleCastChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm mt-2"
                                                    onClick={() =>
                                                        handleRemoveCast(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white shadow-sm p-4 mt-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Download Links</h6>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        onClick={handleAddMoreDownloadLinks}
                                    >
                                        Add More
                                    </button>
                                </div>
                                <hr />
                                {downloadLinks.map((item, index) => (
                                    <div
                                        className="mb-2"
                                        key={index}
                                    >
                                        <div className="row">
                                        
                                            <div className="col-lg-2">
                                                <div className="mb-2">
                                                    <input
                                                        type="url"
                                                        name="url"
                                                        className="form-control"
                                                        placeholder="Url"
                                                        onChange={(e) =>
                                                            handleDownloadsLinkChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        value={item.url}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-2">
                                                    <input
                                                        type="text"
                                                        name="language"
                                                        className="form-control"
                                                        placeholder="Language"
                                                        onChange={(e) =>
                                                            handleDownloadsLinkChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        value={
                                                            item.language
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="mb-2">
                                                    <input
                                                        type="text"
                                                        name="quality"
                                                        placeholder="Quality"
                                                        onChange={(e) =>
                                                            handleDownloadsLinkChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        value={
                                                            item.quality
                                                        }
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm mt-2"
                                                    onClick={() =>
                                                        handleRemoveDownlaodLink(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm mt-2"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </AuthenticatedLayout>
        </div>
    );
};

export default CreateForm;
