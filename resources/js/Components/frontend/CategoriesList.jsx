import React from "react";
import categories from "@/assets/categories";
import { Link } from "@inertiajs/react";
const CategoriesList = ({categories}) => {
  return (
    <div className="sidebar-widget">
      <h6>Categories</h6>
      <hr />
      {categories.map((item) => (
        <div className="category-item" key={item.id}>
            <i className="fa fa-snowflake"></i>
            <Link href={`/category/${item.slug}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
