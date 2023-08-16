import React, { useState } from 'react';
import SearchForm from 'components/SearchForm';
import initialState from 'constants/initialState';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(() => initialState.movies);

  const onSubmitForm = () => {};

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {!!movies.length && <MoviesList movies={movies} />}
      {status === statuses.pending && <Loader />}
    </>
  );
};

export default Movies;
