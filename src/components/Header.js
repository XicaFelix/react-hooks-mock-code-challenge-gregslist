import React from "react";
import Search from "./Search";

function Header({onFilterListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterListing={onFilterListing}/>
    </header>
  );
}

export default Header;
