import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage/HomePage";
import { SearchMoviePage } from "./routes/SearchMoviePage/SearchMoviePage";
import { MovieDetailPage } from "./routes/MovieDetailPage/MovieDetailPage";
import { TrendsPage } from "./routes/TrendsPage/TrendsPage";
import { CategoryPage } from "./routes/CategoryPage/CategoryPage";
import { NotFoundPage } from "./routes/NotFoundPage/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchMoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
