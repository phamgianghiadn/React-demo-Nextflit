import "./NavbarSearch.css";
import { useState, useEffect } from "react";

const NavbarSearch = () => {
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
  const changeHomeHandler = () => {
    window.location.assign("/");
  };

  const changeSearchHandler = () => {
    window.location.assign("/search");
  };
  return (
    <div>
      <div className={`container-fluid navbar ${theme}`}>
        <div>
          <h4 onClick={changeHomeHandler} className="text-danger">
            Movie App
          </h4>
        </div>
        <div>
          <i onClick={changeSearchHandler} className="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
};
export default NavbarSearch;
