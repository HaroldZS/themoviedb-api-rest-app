import React from "react";
import "./TrendingPreview.css";
import { useNavigate } from "react-router-dom";
import { MovieList } from "../MovieList";

function TrendingPreview({ movies, likeMovie, likedMovies }) {
  const navigate = useNavigate();

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
        <MovieList
          movies={movies}
          likeMovie={likeMovie}
          likedMovies={likedMovies}
        />
      </article>
    </section>
  );
}

export { TrendingPreview };
