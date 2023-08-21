import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'Layout';
import Home from 'pages/Home';

const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const NotFound = lazy(() => import('pages/NotFound'));

// api;
// 3e444828f0699e33672d0531926a1d38

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
