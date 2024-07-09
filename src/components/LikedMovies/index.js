import React from "react";
import "./LikedMovies.css"

function LikedMovies() {
  return (
    <section id="liked" className="liked-container">
      <div className="liked-header">
        <h2 className="liked-title">Favorite movies</h2>
      </div>

      <article className="liked-movieList">
        <div className="movie-container">
          <img
            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
            className="movie-img"
            alt="Nombre de la película"
          />
        </div>
        <div className="movie-container">
          <img
            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
            className="movie-img"
            alt="Nombre de la película"
          />
        </div>
        <div className="movie-container">
          <img
            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
            className="movie-img"
            alt="Nombre de la película"
          />
        </div>
      </article>
    </section>
  );
}

export { LikedMovies };
