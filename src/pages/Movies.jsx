import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import initialState from 'constants/initialState';
import statuses from 'constants/statuses';
import SEARCH_PARAMS_KEY from 'constants/searchParamsKey';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';

const Movies = () => {
  const [movies, setMovies] = useState(() => initialState.movies);
  const [status, setStatus] = useState(() => initialState.status);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get(SEARCH_PARAMS_KEY);

  const onSubmitForm = (data) => {
    const moviesTitle = data[SEARCH_PARAMS_KEY].trim();
    if (!moviesTitle) {
      errorToast('Please, enter movie title');
      return;
    }
    const searchQuery = moviesTitle.replace(/ +/g, ' ');
    setSearchParams({
      [SEARCH_PARAMS_KEY]: searchQuery,
    });
  };

  useEffect(() => {
    async function getMoviesByTitle(title) {
      try {
        setStatus(statuses.pending);
        const { results } = await moviesServiceApi.fetchMoviesByTitle(title);
        if (results.length) {
          setMovies(results);
          successToast('Movies uploaded');
        }
        setStatus(statuses.resolved);
      } catch (error) {
        errorToast('HTTP request failed');
        setStatus(statuses.rejected);
      }
    }

    searchQuery && getMoviesByTitle(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} initialValue={searchQuery} />
      {!!movies.length && <MoviesList movies={movies} />}
      {!movies.length && status === statuses.resolved && (
        <p>Movies not found</p>
      )}
      {status === statuses.pending && <Loader />}
    </>
  );
};

export default Movies;
