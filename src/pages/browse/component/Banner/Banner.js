import { requests, homePageMovie, imgFull } from "../CallApi";
import { useEffect, useState } from "react";
import "./Banner.css";

const linkImg =
  "https://images.pexels.com/photos/1107666/pexels-photo-1107666.jpeg?auto=compress&cs=tinysrgb&w=600";

const Banner = () => {
  const [bannerrun, setBannerrun] = useState({});
  useEffect(() => {
    async function callBanner() {
      const newbanner = await fetch(
        homePageMovie + requests.fetchNetflixOriginals
      );
      const baners2 = await newbanner.json();
      const randomMovie = await baners2.results[
        Math.floor(Math.random() * baners2.results.length - 1)
      ];
      setBannerrun(randomMovie);
    }
    callBanner();
  }, []);

  return (
    <div className="banner-sum ">
      <div>
        <img
          className="baner-img"
          src={
            bannerrun && bannerrun.backdrop_path
              ? imgFull + bannerrun.backdrop_path
              : linkImg
          }
        />
        <div className="banner-title">
          <h2>{bannerrun?.name}</h2>
          <button className="btn"> Play</button>
          <button className="btn"> My List</button>
          <p>{bannerrun?.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
