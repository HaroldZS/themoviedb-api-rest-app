import React from "react";
import "./CategoriesPreview.css";

function CategoriesPreview() {
  return (
    <section id="categoriesPreview" class="categoriesPreview-container">
      <h2 class="categoriesPreview-title">Categories</h2>

      <article class="categoriesPreview-list">
        <div class="category-container category-container--loading"></div>
        <div class="category-container category-container--loading"></div>
        <div class="category-container category-container--loading"></div>
      </article>
    </section>
  );
}

export { CategoriesPreview };
