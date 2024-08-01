import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const CreateForm = ({ auth, active_categories, active_ganres }) => {
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
    cast_img: [],
    cast_name: "",
    character_name: "",
    cast_role: "",
  });

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
    for (const key in value) {
      formData.append(key, value[key]);
    }

    // Use the appropriate method to send the formData
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
      cast_img: [],
      cast_name: "",
      character_name: "",
      cast_role: "",
    });
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
                      <label htmlFor="originaltitle">Original Title</label>
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
                      <label htmlFor="cat">Category</label>
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
                      <label htmlFor="genre">Genres</label>
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
                      <label htmlFor="date">Releasing Year</label>
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
                      <label htmlFor="rating">Rating</label>
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
                      <label htmlFor="poster">Poster</label>
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
                      <label htmlFor="trailer">Trailer Link</label>
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
                      <label htmlFor="description">Info Description</label>
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
                <h6>Casts</h6>
                <hr />
                <div className="mb-2">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          name="cast_name[]"
                          className="form-control"
                          placeholder="Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          name="character_name[]"
                          className="form-control"
                          placeholder="Character Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="cast_role[]"
                          id="cast_role"
                          options={castRole}
                          onChange={handleSelectChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="file"
                          name="cast_img[]"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          name="cast_name[]"
                          className="form-control"
                          placeholder="Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          name="character_name[]"
                          className="form-control"
                          placeholder="Character Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="cast_role[]"
                          id="cast_role"
                          options={castRole}
                          onChange={handleSelectChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-2">
                        <input
                          type="file"
                          name="cast_img[]"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-sm mt-2">
                Save
              </button>
            </form>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default CreateForm;
