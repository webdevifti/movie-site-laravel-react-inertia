import React from "react";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import Footer from "@/Components/frontend/Footer";
import GenreContent from "@/Components/frontend/GenreContent";
const Genre = ({ get_genre, genres, categories, movies }) => {
    return (
        <>
            <Head title={get_genre.name} />
            <HeaderNav genres={genres} categories={categories} />
            <div className="container">
                <div className="main-content">
                    <div className="row">
                      <h6>Movies for : {get_genre.name}</h6>
                        <GenreContent movies={movies} />
                        <RightContent categories={categories} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Genre;
