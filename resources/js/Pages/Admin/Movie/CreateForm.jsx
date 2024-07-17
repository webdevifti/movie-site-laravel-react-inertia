import React, { useState } from "react";
import { router } from "@inertiajs/react";

const CreateForm = () => {
    const [value, setValues] = useState({
        category: "",
      });
      const handleChange = (e) => {
        const category = e.target.value;
        setValues({ category: category });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("admin.special-categories.store"), value);
        setValues({ category: "" });
      };
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="category">Category Name</label>
      <input
        type="text"
        name="category"
        id="category"
        className="form-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
        placeholder="Category Name"
        required
        value={value.category}
        onChange={handleChange}
      />
    </div>
    <div>
      <button type="submit" className="btn btn-primary btn-sm mt-2">
        Save
      </button>
    </div>
  </form>
  )
}

export default CreateForm