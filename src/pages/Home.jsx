import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import initialState from 'constants/initialState';
import statuses from 'constants/statuses';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';

const Home = () => {
  const [movies, setMovies] = useState(() => initialState.movies);
  const [status, setStatus] = useState(() => initialState.status);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setStatus(statuses.pending);
        const { results } = await moviesServiceApi.fetchTrendingMovies();
        setMovies(results);
        successToast('Movies uploaded');
        setStatus(statuses.resolved);
      } catch (error) {
        errorToast('HTTP request failed');
        setStatus(statuses.rejected);
      }
    }

    getTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {!!movies.length && <MoviesList movies={movies} />}
      {status === statuses.pending && <Loader />}
    </>
  );
};

export default Home;
