import Loader from 'components/Loader/Loader';
import MovieDetailSection from 'components/MovieDetailSection/MovieDetailSection';
import initialState from 'constants/initialState';
import statuses from 'constants/statuses';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';

const MovieDetails = () => {
  const [movie, setMovie] = useState(() => initialState.movie);
  const [status, setStatus] = useState(() => initialState.status);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails(id) {
      try {
        setStatus(statuses.pending);
        const movie = await moviesServiceApi.fetchMovieDetails(id);
        setMovie(movie);
        successToast('Movie uploaded');
        setStatus(statuses.resolved);
      } catch (error) {
        errorToast('HTTP request failed');
        setStatus(statuses.rejected);
      }
    }

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetailSection movie={movie} />}
      {status === statuses.pending && <Loader />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
