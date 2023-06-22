import React from "react";
import Navbar from "./component/Navabar/Navbar";
import Banner from "./component/Banner/Banner";
import MovieList from "./component/Main/MovieList";
import Footer from "./component/footer/Footer";

function Browse() {
  return (
    <div className="app bg-dark">
      <div>
        {" "}
        <Navbar />
      </div>
      <Banner />

      <MovieList />
      <Footer />
    </div>
  );
}

export default Browse;
