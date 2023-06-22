import { useState, useEffect } from "react";
import { API_KEY, imgFull } from "../CallApi";
import YouTube from "react-youtube";
import "./MovieDetail.css";

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const MovieDetail = ({ dataMovie }) => {
  const [movieDetail, setMovieDetail] = useState("");

  console.log(dataMovie);

  useEffect(() => {
    async function callMovieDetail(id, key) {
      const callVideo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`
      );
      const data = await callVideo.json();
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
          setMovieDetail(results[0]?.key);
        }
      }
    }

    callMovieDetail(dataMovie.id, API_KEY);
    return () => {
      setMovieDetail("");
    };
  }, [dataMovie.id]);

  console.log(movieDetail);

  return (
    <div className="gird-youtube">
      <div className="text">
        <h3>{dataMovie?.title}</h3>
        <p>
          <b>{dataMovie?.release_date}</b>
        </p>
        <p>
          <b>{dataMovie.vote_average}/10</b>
        </p>
        <p>{dataMovie?.overview}</p>
      </div>
      <div className="detail">
        {movieDetail ? (
          <YouTube videoId={movieDetail} opts={opts} />
        ) : (
          <img
            src={
              imgFull + dataMovie.backdrop_path ||
              imgFull + dataMovie.poster_path
            }
          />
        )}
      </div>
    </div>
  );
};
export default MovieDetail;
