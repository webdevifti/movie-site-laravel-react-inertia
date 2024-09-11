import React from "react";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import Footer from "@/Components/frontend/Footer";
import CategoryContent from "@/Components/frontend/CategoryContent";
const Category = ({ get_category, genres, categories, movies }) => {
    return (
        <>
            <Head title={get_category.name} />
            <HeaderNav genres={genres} categories={categories} />
            <div className="container">
                <div className="main-content">
                    <div className="row">
                      <h6>Movies On : {get_category.name}</h6>
                        <CategoryContent movies={movies} />
                        <RightContent categories={categories} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Category;
