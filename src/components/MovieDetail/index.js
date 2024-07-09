import React from "react";
import "./MovieDetail.css";

function MovieDetail() {
  return (
    <section id="movieDetail" className="movieDetail-container inactive">
      <h1 className="movieDetail-title">Deadpool</h1>
      <span className="movieDetail-score">7.6</span>
      <p className="movieDetail-description">
        Wisecracking mercenary Deadpool battles the evil and powerful Cable and
        other bad guys to save a boy's life.
      </p>

      <article className="categories-list"></article>

      <article className="relatedMovies-container">
        <h2 className="relatedMovies-title">Related movies</h2>

        <div className="relatedMovies-scrollContainer">
          <div className="movie-container movie-container--loading"></div>
          <div className="movie-container movie-container--loading"></div>
          <div className="movie-container movie-container--loading"></div>
        </div>
      </article>
    </section>
  );
}

export { MovieDetail };
