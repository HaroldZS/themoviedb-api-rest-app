import React from "react";
import "./TrendsPage.css";
import { Header } from "../../components/Header";
import { GenericList } from "../../components/GenericList";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLocalStorage } from "../../hook/useLocalStorage";

function TrendsPage() {
  const { data: trendingData, loading: loadingTrending } =
    useTMDBApi("trending/movie/day");

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
        movies={loadingTrending ? null : trendingData.results}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
      />
    </>
  );
}

export { TrendsPage };
