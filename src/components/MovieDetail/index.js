import React from "react";
import "./MovieDetail.css";
import { useNavigate } from "react-router-dom";

function MovieDetail({
  movieData,
  relatedMovies,
  likeMovie,
  likedMovies,
  categories,
}) {
  const navigate = useNavigate();
  const likedMoviesIds = likedMovies.map((movie) => movie.id);

  return (
    <>
      <section id="movieDetail" className="movieDetail-container">
        {movieData ? (
          <>
            <h1 className="movieDetail-title">{movieData.title}</h1>
            <span className="movieDetail-score">{movieData.vote_average}</span>
            <p className="movieDetail-description">{movieData.overview}</p>
          </>
        ) : (
          <>
            <h1 className="movieDetail-title">Deadpool</h1>
            <span className="movieDetail-score">7.6</span>
            <p className="movieDetail-description">
              Wisecracking mercenary Deadpool battles the evil and powerful
              Cable and other bad guys to save a boy's life.
            </p>
          </>
        )}

        <article className="categories-list">
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

        <article className="relatedMovies-container">
          <h2 className="relatedMovies-title">Related movies</h2>
          <div className="relatedMovies-scrollContainer">
            {relatedMovies ? (
              <>
                {relatedMovies.map((movie) => (
                  <div
                    className="movie-container"
                    key={movie.id}
                    onClick={() => navigate(`/movies/${movie.id}`)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      className="movie-img"
                      alt={movie.title}
                      id={`id${movie.id}`}
                    />
                    <button
                      className={`movie-btn ${
                        likedMoviesIds.includes(movie.id) && "movie-btn--liked"
                      }`}
                      onClick={(e) => likeMovie(e, movie)}
                    ></button>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="movie-container movie-container--loading"></div>
                <div className="movie-container movie-container--loading"></div>
                <div className="movie-container movie-container--loading"></div>
              </>
            )}
          </div>
        </article>
      </section>
    </>
  );
}

export { MovieDetail };
