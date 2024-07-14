import React from "react";
import "./TrendingPreview.css";
import { useNavigate } from "react-router-dom";
import { useLazyLoading } from "../../hook/useLazyLoading";

function TrendingPreview({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);
  const imgRefs = useLazyLoading(movies);

  return (
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Trends</h2>
        <button
          className="trendingPreview-btn"
          onClick={() => navigate("/trends")}
        >
          Watch more
        </button>
      </div>

      <article className="trendingPreview-movieList">
        {movies ? (
          <>
            {movies.map((movie, index) => (
              <div
                className="movie-container"
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <img
                  data-src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
