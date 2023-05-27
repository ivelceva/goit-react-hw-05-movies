import { Routes, Route, } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import Home from '../pages/home/Home';
// import Movies from '../pages/movies/Movies';
// import MovieDetails from '../pages/movieDetails/MovieDetails';
// import Cast from '../pages/cast/Cast';
// import Reviews from '../pages/reviews/Reviews';
// import NotFound from '../pages/notFound/NotFound';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/reviews/Reviews'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));


function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;