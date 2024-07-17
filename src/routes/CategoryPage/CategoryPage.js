import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { Header } from "../../components/Header";
import { GenericList } from "../../components/GenericList";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const { data: moviesByCategoryData, loading: loadingMoviesByCategory, maxPage } = useTMDBApi("discover/movie", { with_genres: params.categoryId, page });

  useEffect(() => {
    if (moviesByCategoryData && moviesByCategoryData.results) {
      setResults((prevResults) => [...prevResults, moviesByCategoryData.results]);
    }
  }, [moviesByCategoryData]);

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

  const addNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <GenericList
        movies={results}
        loading={loadingMoviesByCategory}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
        addNextPage={addNextPage}
        page={page}
        maxPage={maxPage}
      />
    </>
  );
}

export { CategoryPage };
