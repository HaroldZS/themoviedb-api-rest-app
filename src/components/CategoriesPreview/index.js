import React from "react";
import "./CategoriesPreview.css";

function CategoriesPreview({ categories }) {
  return (
    <section id="categoriesPreview" className="categoriesPreview-container">
      <h2 className="categoriesPreview-title">Categories</h2>

      <article className="categoriesPreview-list">
        {categories ? (
          <>
            {categories.map((category) => (
              <div className="category-container">
                <h3 className="category-title" id={`id${category.id}`}>
                  {category.name}
                </h3>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="category-container category-container--loading"></div>
            <div className="category-container category-container--loading"></div>
            <div className="category-container category-container--loading"></div>
          </>
        )}
      </article>
    </section>
  );
}

export { CategoriesPreview };
