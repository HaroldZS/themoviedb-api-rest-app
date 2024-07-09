import React from "react";
import "./Header.css"

function Header() {
  return (
    <header id="header" className="header-container">
      <span className="header-arrow inactive">&lt;</span>
      <h1 className="header-title">Movies</h1>
      <h1 className="header-title header-title--categoryView inactive">Action</h1>

      <form id="searchForm" className="header-searchForm">
        <input type="text" placeholder="Avengers" />
        <button id="searchBtn">🔍</button>
      </form>
    </header>
  );
}

export { Header };
