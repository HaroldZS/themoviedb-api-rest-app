import React from "react";
import { Header } from "../../components/Header";
import { TrendingPreview } from "../../components/TrendingPreview";
import { CategoriesPreview } from "../../components/CategoriesPreview";
import { LikedMovies } from "../../components/LikedMovies";
import { Footer } from "../../components/Footer";
import { useFetch } from "../../hook/useFetch";
import "./HomePage.css";

async function HomePage() {
  const { data } = useFetch("trending/movie/day");
  console.log(data);

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
