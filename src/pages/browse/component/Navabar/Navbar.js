import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, settheme] = useState("light");

  const setThemes = () => {
    if (window.scrollY > 100) {
      settheme("dark");
    } else {
      settheme("light");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setThemes);
    return () => {
      window.removeEventListener("scroll", setThemes);
    };
  }, []);

  return (
    <div>
      <div className={`container-fluid navbar ${theme}`}>
        <Link to="/" >
          <h4 onClick={changeHomeHandler} className="text-danger">
            Movie App
          </h4>
        </Link>
        <div>
          <a className="menu-bar" href="#Original">
            Original
          </a>
          <a className="menu-bar" href="#xuhuong">
            Xu hướng
          </a>
          <a className="menu-bar" href="#xephangcao">
            Xếp hạng cao
          </a>
          <a className="menu-bar" href="#hanhdong">
            Hành động
          </a>
          <a className="menu-bar" href="#hai">
            Hài
          </a>
          <a className="menu-bar" href="#kinhdi">
            Kinh dị
          </a>
          <a className="menu-bar" href="#langmang">
            Lãng mạn
          </a>
          <a className="menu-bar" href="#tailieu">
            Tài liệu
          </a>
        </div>
        <Link to="/search">
          <i onClick={changeSearchHandler} className="bi bi-search"></i>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
