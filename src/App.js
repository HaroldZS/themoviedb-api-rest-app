import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { SearchMoviePage } from "./routes/SearchMoviePage";
import { MovieDetailPage } from "./routes/MovieDetailPage";
import { TrendsPage } from "./routes/TrendsPage";
import { CategoryPage } from "./routes/CategoryPage";
import { NotFoundPage } from "./routes/NotFoundPage";

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
