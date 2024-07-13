import React from "react";
import "./GenericList.css";
import { useNavigate } from "react-router-dom";

function GenericList({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);

  return (
    <section id="genericList" className="genericList-container">
      {movies ? (
        <>
          {movies.map((movie) => (
            <div
              className="movie-container"
              key={movie.id}
              onClick={() => navigate(`movies/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                className="movie-img"
                alt={movie.title}
                id={`id${movie.id}`}
              />
              <button
                className={`movie-btn ${
                  likedMoviesIds.includes(movie.id) && "movie-btn--liked"
                }`}
                onClick={(e) => likeMovie(e, movie)}
              ></button>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="movie-container movie-container--loading"></div>
          <div className="movie-container movie-container--loading"></div>
          <div className="movie-container movie-container--loading"></div>
        </>
      )}
    </section>
  );
}

export { GenericList };
