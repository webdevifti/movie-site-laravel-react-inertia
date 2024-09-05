import React from "react";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import SingleMovieLeftContent from "@/Components/frontend/SingleMovieLeftContent";
import Footer from "@/Components/frontend/Footer";

const SingleMovie = ({movie,genres,categories}) => {
  return (
    <>
      <Head title={movie.title} />
      <HeaderNav genres={genres} categories={categories} />
      <div className="container">
        <div className="main-content">
          <div className="row">
            <SingleMovieLeftContent movieContent={movie} />
            <RightContent categories={categories} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleMovie;
