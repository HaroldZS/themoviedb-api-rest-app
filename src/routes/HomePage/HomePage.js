import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <TrendingPreview />
      <CategoriesPreview />
      <LikedMovies />
      <Footer />
    </>
  );
}

export { HomePage };
