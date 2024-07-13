import React from "react";
import "./CategoryPage.css";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { Header } from "../../components/Header";
import { GenericList } from "../../components/GenericList";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();
  const { data: moviesByCategoryData, loading: loadingMoviesByCategory } =
    useTMDBApi("discover/movie", { with_genres: params.categoryId });

  const {
    item: likedMovies,
    addItem: addLikedMovie,
    setStorageItem: setLikedMovie,
  } = useLocalStorage("liked_movies", []);

  const likeMovie = (e, movie) => {
    e.stopPropagation();
    const likedMovieIndex = likedMovies.findIndex(
      (likedMovie) => likedMovie.id === movie.id
    );

    if (likedMovieIndex !== -1) {
      const newLikedMovies = likedMovies.filter(
        (likedMovie) => likedMovie.id !== movie.id
      );
      setLikedMovie(newLikedMovies);
    } else {
      addLikedMovie(movie);
    }
  };

  return (
    <>
      <Header />
      <GenericList
        movies={loadingMoviesByCategory ? null : moviesByCategoryData.results}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
      />
    </>
  );
}

export { CategoryPage };
