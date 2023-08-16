import GoBackLink from 'components/GoBackLink';
import Loader from 'components/Loader';
import MovieDetailSection from 'components/MovieDetailSection';
import initialState from 'constants/initialState';
import statuses from 'constants/statuses';
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';

const MovieDetails = () => {
  const [movie, setMovie] = useState(() => initialState.movie);
  const [status, setStatus] = useState(() => initialState.status);
  const { movieId } = useParams();
  const location = useLocation();
  const { current: prevPathname } = useRef(location.state?.from);
  const goBackLink = prevPathname ? prevPathname : '/';

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
      <GoBackLink link={goBackLink} />
      {movie && <MovieDetailSection movie={movie} />}
      {status === statuses.pending && <Loader />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
