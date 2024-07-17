import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const CreateForm = ({ auth, active_categories, active_ganres }) => {
  const [value, setValues] = useState({
    title: "",
  });

  const categoryOptions = active_categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  const genreOptions = active_ganres.map((genre) => ({
    value: genre.id,
    label: genre.name,
  }));

  const handleChange = (e) => {
    const title = e.target.value;
    setValues({ title: title });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(route("admin.movies.store"), value);
    setValues({ title: "" });
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
            <div className="bg-white shadow-sm p-4">
              <form onSubmit={handleSubmit}>
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
                        name="originatitle"
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-2">
                      <label htmlFor="date">Releasing Year</label>
                      <input
                        type="date"
                        name="releasing_year"
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
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label htmlFor="description">Info Description</label>
                      <textarea name="description" rows={4} cols={30} className="form-control" id="" placeholder="infor description"></textarea>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-sm mt-2">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default CreateForm;
