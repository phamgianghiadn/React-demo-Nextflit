import "./NavbarSearch.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className={`container-fluid navbar ${theme}`}>
        <Link to="/">
          <h4 className="text-danger">Movie App</h4>
        </Link>
        <Link to="/search">
          <i className="bi bi-search"></i>
        </Link>
      </div>
    </div>
  );
};
export default NavbarSearch;
