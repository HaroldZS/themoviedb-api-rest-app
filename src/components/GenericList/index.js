import React from "react";
import "./GenericList.css";

function genericList() {
  return (
    <section id="genericList" className="genericList-container inactive">
      <div className="movie-container movie-container--loading"></div>
      <div className="movie-container movie-container--loading"></div>
      <div className="movie-container movie-container--loading"></div>
    </section>
  );
}

export { genericList };
