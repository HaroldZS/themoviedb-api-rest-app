import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <header id="header" class="header-container">
        <span class="header-arrow inactive">&lt;</span>
        <h1 class="header-title">Movies</h1>
        <h1 class="header-title header-title--categoryView inactive">Action</h1>

        <form id="searchForm" class="header-searchForm">
          <input type="text" placeholder="Avengers" />
          <button id="searchBtn">🔍</button>
        </form>
      </header>

      <section id="trendingPreview" class="trendingPreview-container">
        <div class="trendingPreview-header">
          <h2 class="trendingPreview-title">Trends</h2>
          <button class="trendingPreview-btn">Watch more</button>
        </div>

        <article class="trendingPreview-movieList">
          <div class="movie-container movie-container--loading"></div>
          <div class="movie-container movie-container--loading"></div>
          <div class="movie-container movie-container--loading"></div>
        </article>
      </section>

      <section id="categoriesPreview" class="categoriesPreview-container">
        <h2 class="categoriesPreview-title">Categories</h2>

        <article class="categoriesPreview-list">
          <div class="category-container category-container--loading"></div>
          <div class="category-container category-container--loading"></div>
          <div class="category-container category-container--loading"></div>
        </article>
      </section>

      <section id="liked" class="liked-container">
        <div class="liked-header">
          <h2 class="liked-title">Favorite movies</h2>
        </div>

        <article class="liked-movieList">
          <div class="movie-container">
            <img
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              class="movie-img"
              alt="Nombre de la película"
            />
          </div>
          <div class="movie-container">
            <img
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              class="movie-img"
              alt="Nombre de la película"
            />
          </div>
          <div class="movie-container">
            <img
              src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
              class="movie-img"
              alt="Nombre de la película"
            />
          </div>
        </article>
      </section>

      <footer>Powered by HaroldZS</footer>
    </>
  );
}

export { HomePage };
