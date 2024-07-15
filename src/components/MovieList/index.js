import React from "react";
import { useLazyLoading } from "../../hook/useLazyLoading";
import { useNavigate } from "react-router-dom";
import { Movie } from "../Movie";

function MovieList({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies
    ? likedMovies.map((movie) => movie.id)
    : [];
  const imgRefs = useLazyLoading(movies);

  return (
    <>
      {movies ? (
        <>
          {movies.map((movie, index) => (
            <Movie
              key={movie.id}
              movie={movie}
              index={index}
              navigate={navigate}
              imgRefs={imgRefs}
              likedMoviesIds={likedMoviesIds}
              likeMovie={likeMovie}
            />
          ))}
        </>
      ) : (
        Array(3)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="movie-container movie-container--loading"
            ></div>
          ))
      )}
    </>
  );
}

export { MovieList };
