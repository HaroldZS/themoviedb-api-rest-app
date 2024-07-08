import React from "react";
import "./GenericList.css";

function genericList() {
  return (
    <section id="genericList" class="genericList-container inactive">
      <div class="movie-container movie-container--loading"></div>
      <div class="movie-container movie-container--loading"></div>
      <div class="movie-container movie-container--loading"></div>
    </section>
  );
}

export { genericList };
