import { useState, useEffect } from "react";
import { imgFull, homePageMovie, requests } from "../CallApi";
import "./MovieList.css";
import MovieDetail from "./MovieDetail";
const MovieList = () => {
  const [original, setOriginal] = useState([]);
  const [trending, setTrending] = useState([]);
  const [TopRate, setToprate] = useState([]);
  const [action, setaction] = useState([]);
  const [commedy, setcommedy] = useState([]);
  const [horror, sethorror] = useState([]);
  const [romance, setromance] = useState([]);
  const [document, setdocument] = useState([]);
  const [callId, setCallId] = useState({});

  useEffect(() => {
    async function callListMovie() {
      async function CallApiAll(api) {
        const CallApiMovie = await fetch(homePageMovie + api);
        const data = await CallApiMovie.json();
        return await data.results;
      }
      setOriginal(await CallApiAll(requests.fetchNetflixOriginals));
      setTrending(await CallApiAll(requests.fetchTrending));
      setToprate(await CallApiAll(requests.fetchTopRated));
      setaction(await CallApiAll(requests.fetchActionMovies));
      setcommedy(await CallApiAll(requests.fetchComedyMovies));
      sethorror(await CallApiAll(requests.fetchHorrorMovies));
      setromance(await CallApiAll(requests.fetchRomanceMovies));
      setdocument(await CallApiAll(requests.fetchDocumentaries));
    }
    callListMovie();
  }, []);

  const handleMovie = (movie) => {
    setCallId(movie);
    if (movie.id === callId.id) {
      setCallId({});
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setCallId({});
      }
    });
  };
  console.log(callId);
  return (
    <div className=" text-white">
      {(callId?.id && <MovieDetail dataMovie={callId} />) ||
        callId?.backdrop_path}
      <div>
        <h4 id="Original">Original</h4>
        <div className="movie_img1 container-fuild m-3">
          {original.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.poster_path}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 id="xuhuong">Xu hướng</h4>
        <div className="movie_img container-fuild m-3">
          {trending.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 id="xephangcao">Xếp hạng cao</h4>
        <div className="movie_img container-fuild m-3">
          {TopRate.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 id="hanhdong">Hành động</h4>{" "}
        <div className="movie_img container-fuild m-3">
          {action.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 id="hai">Hài</h4>
        <div className="movie_img container-fuild m-3">
          {commedy.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>{" "}
      </div>
      <div>
        <h4 id="kinhdi">Kinh dị</h4>
        <div className="movie_img container-fuild m-3">
          {horror.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>{" "}
      </div>
      <div>
        <h4 id="langman">Lãng mạn</h4>
        <div className="movie_img container-fuild m-3">
          {romance.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 id="tailieu">Tài liệu</h4>
        <div className="movie_img container-fuild m-3">
          {document.map((item) => (
            <img
              onClick={() => handleMovie(item)}
              key={item.id}
              src={imgFull + item.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
