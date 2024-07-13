import React from "react";
import "./LikedMovies.css";
import { useNavigate } from "react-router-dom";

function LikedMovies({ likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);

  return (
    <section id="liked" className="liked-container">
      <div className="liked-header">
        <h2 className="liked-title">Favorite movies</h2>
      </div>

      <article className="liked-movieList">
        {likedMovies.length > 0 ? (
          <>
            {likedMovies.map((movie) => (
              <div
                className="movie-container"
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
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
          </>
        )}
      </article>
    </section>
  );
}

export { LikedMovies };
