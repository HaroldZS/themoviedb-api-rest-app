import React from "react";
import "./TrendingPreview.css";

function TrendingPreview() {
  return (
    <section id="trendingPreview" class="trendingPreview-container">
      <div class="trendingPreview-header">
        <h2 class="trendingPreview-title">Trends</h2>
        <button class="trendingPreview-btn">Watch more</button>
      </div>

      <article class="trendingPreview-movieList">
        <div class="movie-container movie-container--loading"></div>
        <div class="movie-container movie-container--loading"></div>
        <div class="movie-container movie-container--loading"></div>
      </article>
    </section>
  );
}

export { TrendingPreview };
