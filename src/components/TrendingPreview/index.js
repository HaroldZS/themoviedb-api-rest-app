import React, { useEffect, useRef } from "react";
import "./TrendingPreview.css";
import { useNavigate } from "react-router-dom";

function TrendingPreview({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);
  const imgRefs = useRef([]);

  useEffect(() => {
    const lazyLoader = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const url = img.getAttribute("data-src");
          img.setAttribute("src", url);
          lazyLoader.unobserve(img);
        }
      });
    });

    imgRefs.current.forEach((img) => {
      if (img) {
        lazyLoader.observe(img);
      }
    });

    return () => {
      imgRefs.current.forEach((img) => {
        if (img) {
          lazyLoader.unobserve(img);
        }
      });
    };
  }, [movies]);

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
