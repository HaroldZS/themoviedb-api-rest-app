import React from "react";
import "./Header.css"

function Header() {
  return (
    <header id="header" class="header-container">
      <span class="header-arrow inactive">&lt;</span>
      <h1 class="header-title">Movies</h1>
      <h1 class="header-title header-title--categoryView inactive">Action</h1>

      <form id="searchForm" class="header-searchForm">
        <input type="text" placeholder="Avengers" />
        <button id="searchBtn">🔍</button>
      </form>
    </header>
  );
}

export { Header };
