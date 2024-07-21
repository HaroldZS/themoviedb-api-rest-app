import React from "react";
import "./Movie.css";

function Movie({ movie, index, navigate, imgRefs, likedMoviesIds, likeMovie }) {
  return (
    <div
      className="movie-container"
      key={movie.id}
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <img
        data-img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        className="movie-img"
        alt={movie.title}
        ref={(el) => (imgRefs.current[index] = el)}
      />
      <button
        className={`movie-btn ${
          likedMoviesIds.includes(movie.id) && "movie-btn--liked"
        }`}
        onClick={(e) => likeMovie(e, movie)}
      ></button>
    </div>
  );
}

export { Movie };
