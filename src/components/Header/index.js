import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Header({ moviePoster = null }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const isMovieDetailPage = location.pathname.startsWith("/movies/");
  const isTrendsPage = location.pathname.startsWith("/trends");
  const isCategoryPage = location.pathname.startsWith("/categories/");
  const isSearchPage = location.pathname.startsWith("/search");
  const isHomePage = location.pathname === "/";

  const isCategeryOrTrendPage = isTrendsPage || isCategoryPage;
  const isSearchOrHomePage = isSearchPage || isHomePage;

  const setQueryValue = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <header
      id="header"
      className={`header-container ${
        isMovieDetailPage && "header-container--long"
      }`}
      style={
        moviePoster && {
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%), url(https://image.tmdb.org/t/p/w500${moviePoster})`,
        }
      }
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
        {category}
      </h1>

      <form
        id="searchForm"
        className={`header-searchForm ${!isSearchOrHomePage && "inactive"}`}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Avengers"
          value={query}
          onChange={setQueryValue}
        />
        <button id="searchBtn">🔍</button>
      </form>
    </header>
  );
}

export { Header };
