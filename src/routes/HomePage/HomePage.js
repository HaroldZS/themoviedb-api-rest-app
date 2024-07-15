import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLocalStorage } from "../../hook/useLocalStorage";
import "./HomePage.css";

function HomePage() {
  const { data: categoryPreviewData, loading: loadingCategories } =
    useTMDBApi("genre/movie/list");
  const { data: trendingPreviewData, loading: loadingTrending } =
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
      <TrendingPreview
        movies={loadingTrending ? null : trendingPreviewData.results}
        likeMovie={likeMovie}
        likedMovies={likedMovies}
      />
      <CategoriesPreview
        categories={loadingCategories ? null : categoryPreviewData.genres}
      />
      <LikedMovies
        likeMovie={likeMovie}
        likedMovies={likedMovies.length > 0 ? likedMovies : null}
      />
      <Footer />
    </>
  );
}

export { HomePage };
