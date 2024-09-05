import React from "react";
import { Head } from "@inertiajs/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";

import HeaderNav from "../Components/frontend/Navbar";
import MainContent from './../Components/frontend/MainContent';
import Footer from "@/Components/frontend/Footer";
const Home = ({genres,categories}) => {
  return (
    <>
      <Head title="Welcome" />
      <HeaderNav genres={genres} categories={categories} />
      <MainContent categories={categories} />
      <Footer />
    </>
  );
};

export default Home;
