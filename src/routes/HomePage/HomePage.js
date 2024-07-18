import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import { useTMDBApi } from "../../hook/useTMDBApi";
import { useLikedMovies } from "../../hook/useLikedMovies";
import "./HomePage.css";

function HomePage() {
  const { likedMovies, likeMovie } = useLikedMovies();
  const { data: categoryPreviewData, loading: loadingCategories } =
    useTMDBApi("genre/movie/list");
  const { data: trendingPreviewData, loading: loadingTrending } =
    useTMDBApi("trending/movie/day");

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
