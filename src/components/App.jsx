import { Routes, Route } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/About';
import MovieDetails from 'path/to/pages/Products';
import Cast from 'path/to/pages/About';
import Reviews from 'path/to/pages/Products';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
