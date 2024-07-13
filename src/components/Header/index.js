import React from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMovieDetailPage = location.pathname.startsWith("/movies/");
  const isHomePage = location.pathname === "/";
  const isCategeryOrTrendPage =
    location.pathname.startsWith("/trends") || isMovieDetailPage;
  const isSearchOrHomePage =
    location.pathname.startsWith("/search") || isHomePage;

  return (
    <header
      id="header"
      className={`header-container ${
        isMovieDetailPage && "header-container--long"
      }`}
    >
      <span
        className={`header-arrow ${isHomePage && "inactive"} ${
          isMovieDetailPage && "header-arrow--white"
        }`}
        onClick={() => navigate(-1)}
      >
        &lt;
      </span>
      <h1 className={`header-title ${!isHomePage && "inactive"}`}>Movies</h1>
      <h1
        className={`header-title header-title--categoryView ${
          !isCategeryOrTrendPage && "inactive"
        }`}
      >
        Action
      </h1>

      <form
        id="searchForm"
        className={`header-searchForm ${!isSearchOrHomePage && "inactive"}`}
      >
        <input type="text" placeholder="Avengers" />
        <button id="searchBtn">🔍</button>
      </form>
    </header>
  );
}

export { Header };
