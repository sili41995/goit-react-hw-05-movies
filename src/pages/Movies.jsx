import React, { useState } from 'react';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import initialState from 'constants/initialState';
import statuses from 'constants/statuses';

const Movies = () => {
  const [movies] = useState(() => initialState.movies);
  const [status] = useState(() => initialState.status);

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {!!movies.length && <MoviesList movies={movies} />}
      {status === statuses.pending && <Loader />}
    </>
  );
};

export default Movies;
