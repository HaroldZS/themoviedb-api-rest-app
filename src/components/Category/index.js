import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css"

function Category({ categories }) {
  const navigate = useNavigate();

  return (
    <>
      {categories ? (
        <>
          {categories.map((category) => (
            <div className="category-container" key={category.id}>
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
    </>
  );
}

export { Category };
