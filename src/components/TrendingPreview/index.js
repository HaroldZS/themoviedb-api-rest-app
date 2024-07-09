import React from "react";
import "./TrendingPreview.css";

function TrendingPreview() {
  return (
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Trends</h2>
        <button className="trendingPreview-btn">Watch more</button>
      </div>

      <article className="trendingPreview-movieList">
        <div className="movie-container movie-container--loading"></div>
        <div className="movie-container movie-container--loading"></div>
        <div className="movie-container movie-container--loading"></div>
      </article>
    </section>
  );
}

export { TrendingPreview };
