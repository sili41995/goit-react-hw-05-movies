import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Notification from 'components/Notification';
import { dynamicParam, homePath, moviesPath } from 'constants/pathNames';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const Movies = lazy(() => import('pages/Movies'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={`${homePath}`} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={`${moviesPath}`} element={<Movies />} />
          <Route
            path={`${moviesPath}/:${dynamicParam}`}
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Notification />
    </>
  );
};

export default App;
