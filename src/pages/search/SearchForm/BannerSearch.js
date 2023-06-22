import "./BannerSearch.css";
import { useState, useEffect } from "react";
import ResultList from "../ResultList/ResultList";
import { homePageMovie, requests } from "../../browse/component/CallApi";

const BannerSearch = () => {
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);

  async function CallSearch(quer) {
    const ApiSearch = await fetch(
      homePageMovie + requests.fetchSearch + `&query=${quer}`
    );
    const data = await ApiSearch.json();
    setSearchMovie(data);
  }
  // hiển thị giá trị khi vào là batman
  useEffect(() => {
    CallSearch("batman");
  }, []);
  // giá trị query khi ấn vào search và các điều kiện
  const handleSearch = () => {
    if (search === "") {
      alert("nhập tên phim cần tìm ");
    }

    CallSearch(search);
    setSearch("");
  };
  // hía trị của ô input
  const handleValue = (e) => {
    setSearch(e.target.value);
  };
  //  ấn vào reset
  const handleReset = () => {
    CallSearch("batman");
    setSearch("");
  };
  return (
    <div>
      <div className="banner-search">
        <div className="banner-input">
          <input value={search} onChange={(e) => handleValue(e)} />
          <i className="bi bi-search"></i>
        </div>
        <div className="search-button">
          <button onClick={handleReset} className="buttons">
            Reset
          </button>
          <button onClick={handleSearch} className="buttons">
            Search
          </button>
        </div>
      </div>
      <div>
        <ResultList searchmovi={searchMovie} />
      </div>
    </div>
  );
};
export default BannerSearch;
