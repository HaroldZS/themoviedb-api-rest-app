import React from "react";
import "./GenericList.css";
import { MovieList } from "../MovieList";
import { Observer } from "../Observer";

function GenericList({
  movies,
  loading,
  likeMovie,
  likedMovies,
  addNextPage,
  page,
  maxPage,
}) {
  return (
    <section id="genericList" className="genericList-container">
      {movies.map((movieList, index) => (
        <MovieList
          key={index}
          movies={loading ? null : movieList}
          likeMovie={likeMovie}
          likedMovies={likedMovies}
        />
      ))}
      {page <= maxPage && <Observer callback={addNextPage} />}
    </section>
  );
}

export { GenericList };
