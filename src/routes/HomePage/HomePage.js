import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import { useTMDBApi } from "../../hook/useTMDBApi";
import "./HomePage.css";

function HomePage() {
  const { data: categoryPreviewData } = useTMDBApi("genre/movie/list");
  const { data: trendingPreviewData } = useTMDBApi("trending/movie/day");

  return (
    <>
      <Header />
      <TrendingPreview movies={trendingPreviewData.results} />
      <CategoriesPreview categories={categoryPreviewData.genres} />
      <LikedMovies />
      <Footer />
    </>
  );
}

export { HomePage };
