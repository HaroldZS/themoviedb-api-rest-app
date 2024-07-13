import React from "react";
import "./MovieDetailPage.css";
import { Header } from "../../components/Header";
import { MovieDetail } from "../../components/MovieDetail";
import { useParams } from "react-router-dom";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLocalStorage } from "../../hook/useLocalStorage";

function MovieDetailPage() {
  const params = useParams();
  const { data: movieData, loading: loadingMovie } = useTMDBApi(
    `movie/${params.movieId}`
  );
  const { data: relatedMovieData, loading: loadingRelatedMovie } = useTMDBApi(
    `movie/${params.movieId}/recommendations`
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
      <Header moviePoster={loadingMovie ? null : movieData.poster_path} />
      <MovieDetail
        movieData={loadingMovie ? null : movieData}
        relatedMovies={loadingRelatedMovie ? null : relatedMovieData.results}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
        categories={loadingMovie ? null : movieData.genres}
      />
    </>
  );
}

export { MovieDetailPage };
