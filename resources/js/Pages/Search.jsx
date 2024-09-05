import React from "react";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";

import SearchContent from "@/Components/frontend/SearchContent";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import Footer from "@/Components/frontend/Footer";
const Search = ({genres,categories}) => {
  return (
    <>
      <Head title="Search result" />
      <HeaderNav genres={genres} categories={categories}  />
      <div className="container">
        <div className="main-content">
          <div className="row">
            <SearchContent />
            <RightContent categories={categories} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
