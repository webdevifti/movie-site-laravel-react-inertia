import React, { useState } from "react";
import { router } from "@inertiajs/react";

const CreateForm = () => {
  const [value, setValues] = useState({
    genre: "",
  });
  const handleChange = (e) => {
    const genre = e.target.value;
    setValues({ genre: genre });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(route("admin.genres.store"), value);
    setValues({ genre: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="genre">Genre Name</label>
        <input
          type="text"
          name="genre"
          id="genre"
          className="form-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
          placeholder="Genre Name"
          required
          value={value.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary btn-sm mt-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
