import React from "react";
import "./CategoriesPreview.css";
import { useNavigate } from "react-router-dom";

function CategoriesPreview({ categories }) {
  const navigate = useNavigate();

  return (
    <section id="categoriesPreview" className="categoriesPreview-container">
      <h2 className="categoriesPreview-title">Categories</h2>

      <article className="categoriesPreview-list">
        {categories ? (
          <>
            {categories.map((category) => (
              <div className="category-container" id={category.id}>
                <h3
                  className="category-title"
                  id={`id${category.id}`}
                  onClick={() =>
                    navigate(
                      `/categories/${category.id}?category=${category.name}`
                    )
                  }
                >
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
