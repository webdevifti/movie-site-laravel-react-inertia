import React from "react";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import SingleMovieLeftContent from "@/Components/frontend/SingleMovieLeftContent";
import movie_content from '@/assets/single_movie'
import Footer from "@/Components/frontend/Footer";

const SingleMovie = ({slug,genres,categories,special_categories}) => {
  return (
    <>
      <Head title={slug} />
      <HeaderNav genres={genres} categories={categories} special_categories={special_categories} />
      <div className="container">
        <div className="main-content">
          <div className="row">
            <SingleMovieLeftContent movieContent={movie_content} />
            <RightContent categories={categories} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleMovie;
