import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import { useTMDBApi } from "../../hook/useTMDBApi";
import "./HomePage.css";

function HomePage() {
  const { data: categoryData } = useTMDBApi("genre/movie/list");

  return (
    <>
      <Header />
      <TrendingPreview />
      <CategoriesPreview categories={categoryData.genres}/>
      <LikedMovies />
      <Footer />
    </>
  );
}

export { HomePage };
