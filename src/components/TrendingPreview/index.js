import React from "react";
import "./TrendingPreview.css";

function TrendingPreview({ movies }) {
  return (
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Trends</h2>
        <button className="trendingPreview-btn">Watch more</button>
      </div>

      <article className="trendingPreview-movieList">
        {movies ? (
          <>
            {movies.map((movie) => (
              <div className="movie-container">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="movie-img"
                  alt={movie.title}
                />
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
