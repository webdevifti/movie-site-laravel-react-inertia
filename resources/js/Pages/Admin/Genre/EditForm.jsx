import React from "react";
import { router } from "@inertiajs/react";

const EditForm = ({ editvalue,setEditValues,setEdit }) => {
  const handleEditChange = (e) => {
    const editgenre = e.target.value;
    setEditValues({ genre: editgenre, id: editvalue.id });
  };
  const cancelEdit = () => {
    setEdit(false);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const id = editvalue.id;
    router.patch(route("admin.genres.update", { id }), editvalue);
    setEditValues({ genre: "" });
  };
  return (
    <form onSubmit={handleEditSubmit}>
      <div>
        <label htmlFor="genre">Genre Name</label>
        <input
          type="text"
          name="genre"
          id="genre"
          className="form-control border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
          placeholder="Genre Name"
          required
          value={editvalue.genre}
          onChange={handleEditChange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary btn-sm mt-2 mr-2">
          Update
        </button>
        <button
          type="button"
          onClick={cancelEdit}
          className="btn btn-danger btn-sm mt-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
