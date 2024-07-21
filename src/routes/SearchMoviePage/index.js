import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { GenericList } from "../../components/GenericList";
import { useLikedMovies } from "../../hook/useLikedMovies";

function SearchMoviePage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = location.state || searchParams.get("query");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const { likedMovies, likeMovie } = useLikedMovies();

  const {
    data: searchData,
    loading: loadingSearchData,
    maxPage,
  } = useTMDBApi("search/movie", { query, page });

  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (searchData && searchData.results) {
      if (page === 1) {
        setResults([]);
        setPage(1);
      }
      setResults((prevResults) => [...prevResults, searchData.results]);
    }
    // eslint-disable-next-line
  }, [searchData]);

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
