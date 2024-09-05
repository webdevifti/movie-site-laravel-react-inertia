import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import HeaderSearch from "./HeaderSearch";
import AlphabeticTag from "./AlphabeticTag";
import DarkModeToggl from "./DarkModeToggl";

const Navbar = ({genres,categories}) => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <nav className="header-nav d-flex align-items-center justify-content-between flex-wrap">
            <div className="navbar-brand">
              <Logo />
            </div>
            <div className="main-nav">
              <Menu genres={genres} categories={categories}  />
            </div>
            <div className="menu-search d-flex align-items-center gap-2">
              <HeaderSearch />
              <DarkModeToggl />
            </div>
          </nav>
        </div>
      </header>
      <div className="header-alphabetic">
        <div className="container">
          <AlphabeticTag />
        </div>
      </div>
    </>
  );
};

export default Navbar;
