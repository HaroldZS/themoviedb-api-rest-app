import React from "react";
import "./LikedMovies.css"

function LikedMovies() {
  return (
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
  );
}

export { LikedMovies };
