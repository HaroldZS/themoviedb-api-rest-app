import React from "react";
import { Category } from "../Category";

function CategoriesPreview({ categories }) {
  return (
    <section id="categoriesPreview" className="categoriesPreview-container">
      <h2 className="categoriesPreview-title">Categories</h2>

      <article className="categoriesPreview-list">
        <Category categories={categories} />
      </article>
    </section>
  );
}

export { CategoriesPreview };
