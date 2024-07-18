import React from "react";
import "./MovieDetailPage.css";
import { Header } from "../../components/Header";
import { MovieDetail } from "../../components/MovieDetail";
import { useParams } from "react-router-dom";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLikedMovies } from "../../hook/useLikedMovies";

function MovieDetailPage() {
  const params = useParams();
  const { likedMovies, likeMovie } = useLikedMovies();
  const { data: movieData, loading: loadingMovie } = useTMDBApi(
    `movie/${params.movieId}`
  );
  const { data: relatedMovieData, loading: loadingRelatedMovie } = useTMDBApi(
    `movie/${params.movieId}/recommendations`
  );

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
