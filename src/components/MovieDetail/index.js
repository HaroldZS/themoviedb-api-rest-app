import React from "react";
import "./MovieDetail.css";

function MovieDetail() {
  return (
    <section id="movieDetail" class="movieDetail-container inactive">
      <h1 class="movieDetail-title">Deadpool</h1>
      <span class="movieDetail-score">7.6</span>
      <p class="movieDetail-description">
        Wisecracking mercenary Deadpool battles the evil and powerful Cable and
        other bad guys to save a boy's life.
      </p>

      <article class="categories-list"></article>

      <article class="relatedMovies-container">
        <h2 class="relatedMovies-title">Related movies</h2>

        <div class="relatedMovies-scrollContainer">
          <div class="movie-container movie-container--loading"></div>
          <div class="movie-container movie-container--loading"></div>
          <div class="movie-container movie-container--loading"></div>
        </div>
      </article>
    </section>
  );
}

export { MovieDetail };
