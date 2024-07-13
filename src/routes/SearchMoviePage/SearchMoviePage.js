import React from "react";
import "./SearchMoviePage.css";
import { Header } from "../../components/Header";
import { useSearchParams } from "react-router-dom";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { GenericList } from "../../components/GenericList";
import { useLocalStorage } from "../../hook/useLocalStorage";

function SearchMoviePage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data: searchData, loading: loadingSearchData } = useTMDBApi(
    "search/movie",
    { query }
  );

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
        movies={loadingSearchData ? null : searchData.results}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
      />
    </>
  );
}

export { SearchMoviePage };
