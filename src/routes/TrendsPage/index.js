import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { GenericList } from "../../components/GenericList";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLikedMovies } from "../../hook/useLikedMovies";

function TrendsPage() {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const { likedMovies, likeMovie } = useLikedMovies();

  const {
    data: trendingData,
    loading: loadingTrending,
    maxPage,
  } = useTMDBApi("trending/movie/day", { page });

  useEffect(() => {
    if (trendingData && trendingData.results) {
      setResults((prevResults) => [...prevResults, trendingData.results]);
    }
  }, [trendingData]);

  const addNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />
      <GenericList
        movies={results}
        loading={loadingTrending}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
        addNextPage={addNextPage}
        page={page}
        maxPage={maxPage}
      />
    </>
  );
}

export { TrendsPage };
