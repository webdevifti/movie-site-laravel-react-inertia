import React from "react";

import HeaderSearch from "./HeaderSearch";
import SearchResult from "./SearchResult";

const SearchContent = ({movies}) => {
  return (
    <div className="col-lg-9">
      <div className="search-page-content">
        <h4>Search Result</h4>
        <hr />
        <div>
          <HeaderSearch />
        </div>

        <SearchResult movies={movies} />
      </div>
    </div>
  );
};

export default SearchContent;
