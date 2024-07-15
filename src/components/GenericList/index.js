import React from "react";
import "./GenericList.css";
import { MovieList } from "../MovieList";

function GenericList({ movies, likeMovie, likedMovies }) {
  return (
    <section id="genericList" className="genericList-container">
      <MovieList
        movies={movies}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
      />
    </section>
  );
}

export { GenericList };
