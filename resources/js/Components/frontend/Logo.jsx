import { Link } from "@inertiajs/react";
import React from "react";
import img from "../../assets/logos/logo.png";
const Logo = () => {
  return (
    <>
      <Link href="/">
        <img className="logo" src={img} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
