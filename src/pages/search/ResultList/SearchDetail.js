import { useState, useEffect } from "react";
import { API_KEY, imgFull } from "../../browse/component/CallApi";
import YouTube from "react-youtube";
import "./SearchDetail.css";
const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const SearchDetails = ({ moviesSearch }) => {
  const [searchDetail, setsearchDetail] = useState("");

  useEffect(() => {
    async function callMovieSearch(id, key) {
      const callVideo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`
      );
      const data = await callVideo.json();
      console.log(data);
      setsearchDetail(data);
      if (data?.results) {
        const results = data.results.filter((item) => {
          if (
            item.site === "YouTube" &&
            (item.type === "Teaser" || item.type === "Trailer")
          ) {
            return true;
          }
          return false;
        });
        console.log(results);
        if (results.length > 0) {
          setsearchDetail(results[0]?.key);
        }
      }
    }
    callMovieSearch(moviesSearch.id, API_KEY);
    return () => {
      setsearchDetail("");
    };
  }, [moviesSearch]);

  console.log(searchDetail);
  return (
    <div className="gird-youtube-search">
      <div className="text-search">
        <h3>{moviesSearch?.title}</h3>
        <p>
          <b>{moviesSearch?.release_date}</b>
        </p>
        <p>
          <b>{moviesSearch.vote_average}/10</b>
        </p>
        <p>{moviesSearch?.overview}</p>
      </div>
      <div className="detail-search">
        {searchDetail ? (
          <YouTube videoId={searchDetail} opts={opts} />
        ) : (
          <img
            src={
              imgFull + moviesSearch.backdrop_path ||
              imgFull + moviesSearch.poster_path
            }
          />
        )}
      </div>
    </div>
  );
};
export default SearchDetails;
