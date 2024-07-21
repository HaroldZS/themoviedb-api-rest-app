import React, { useState, useEffect } from "react";
import { useLikedMovies } from "../../hook/useLikedMovies";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { Header } from "../../components/Header";
import { GenericList } from "../../components/GenericList";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const { likedMovies, likeMovie } = useLikedMovies();

  const {
    data: moviesByCategoryData,
    loading: loadingMoviesByCategory,
    maxPage,
  } = useTMDBApi("discover/movie", { with_genres: params.categoryId, page });

  useEffect(() => {
    if (moviesByCategoryData && moviesByCategoryData.results) {
      setResults((prevResults) => [
        ...prevResults,
        moviesByCategoryData.results,
      ]);
    }
  }, [moviesByCategoryData]);

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
