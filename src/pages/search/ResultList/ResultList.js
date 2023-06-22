import { imgFull } from "../../browse/component/CallApi";
import { useState, useEffect } from "react";
import "./ResultList.css";
import SearchDetails from "./SearchDetail";

const ResultList = ({ searchmovi }) => {
  const [callIdsearch, setcallIdsearch] = useState({});

  const handlemovieSearch = (movie) => {
    setcallIdsearch(movie);
    if (movie.id === callIdsearch.id) {
      setcallIdsearch({});
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setcallIdsearch({});
      }
    });
  };

  return (
    <div className="searchList">
      {callIdsearch?.id && <SearchDetails moviesSearch={callIdsearch} />}
      <h3 className="text-light mt-3">Search results</h3>
      <div className="seach-movilist">
        {" "}
        {searchmovi.results?.map((item) => (
          <img
            onClick={() => handlemovieSearch(item)}
            src={imgFull + item?.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
export default ResultList;
