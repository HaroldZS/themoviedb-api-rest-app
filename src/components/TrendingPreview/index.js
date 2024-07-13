import React from "react";
import "./TrendingPreview.css";
import { useNavigate } from "react-router-dom";

function TrendingPreview({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);

  return (
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Trends</h2>
        <button className="trendingPreview-btn" onClick={() => navigate("trends")}>Watch more</button>
      </div>

      <article className="trendingPreview-movieList">
        {movies ? (
          <>
            {movies.map((movie) => (
              <div className="movie-container" key={movie.id}>
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
      </article>
    </section>
  );
}

export { TrendingPreview };
