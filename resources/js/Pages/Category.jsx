import React from 'react'
import { Head } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import HeaderNav from "../Components/frontend/Navbar";
import RightContent from "@/Components/frontend/RightContent";
import Footer from "@/Components/frontend/Footer";
import CategoryContent from '@/Components/frontend/CategoryContent';
const Category = ({slug,genres,categories,special_categories}) => {
  return (
    <>
      <Head title={slug} />
      <HeaderNav genres={genres} categories={categories} special_categories={special_categories} />
      <div className="container">
        <div className="main-content">
          <div className="row">
            <h5>{slug}</h5>
            <CategoryContent />
            <RightContent categories={categories} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Category