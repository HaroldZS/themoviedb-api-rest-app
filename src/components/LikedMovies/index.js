import React from "react";
import { MovieList } from "../MovieList";

function LikedMovies({ likeMovie, likedMovies }) {
  return (
    <section id="liked" className="liked-container">
      <div className="liked-header">
        <h2 className="liked-title">Favorite movies</h2>
      </div>

      <article className="liked-movieList">
        {likedMovies ? (
          <MovieList
            movies={likedMovies}
            likeMovie={likeMovie}
            likedMovies={likedMovies}
          />
        ) : (
          Array(3)
            .fill()
            .map((_, index) => (
              <div class="movie-container">
                <img
                  key={index}
                  src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                  class="movie-img"
                  alt="Nombre de la película"
                />
              </div>
            ))
        )}
      </article>
    </section>
  );
}

export { LikedMovies };
