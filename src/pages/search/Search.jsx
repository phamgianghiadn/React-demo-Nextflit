import React from "react";
import NavbarSearch from "./SearchForm/NavbarSearch";
import BannerSearch from "./SearchForm/BannerSearch";
import Footer from "../browse/component/footer/Footer";

const Search = () => {
  return (
    <div className="app bg-dark ">
      <NavbarSearch />
      <BannerSearch />
      <Footer />
    </div>
  );
};

export default Search;
