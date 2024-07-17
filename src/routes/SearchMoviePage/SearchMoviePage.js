import React, { useState, useEffect } from "react";
import "./SearchMoviePage.css";
import { Header } from "../../components/Header";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { GenericList } from "../../components/GenericList";
import { useLocalStorage } from "../../hook/useLocalStorage";

function SearchMoviePage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = location.state || searchParams.get("query");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const {
    data: searchData,
    loading: loadingSearchData,
    maxPage,
  } = useTMDBApi("search/movie", { query, page });

  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query, location.state]);

  useEffect(() => {
    if (searchData && searchData.results) {
      setResults((prevResults) => [...prevResults, searchData.results]);
    }
  }, [searchData]);

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
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <GenericList
        movies={results}
        loading={loadingSearchData}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
        addNextPage={addNextPage}
        page={page}
        maxPage={maxPage}
      />
    </>
  );
}

export { SearchMoviePage };
