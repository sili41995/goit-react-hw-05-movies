import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';
import statuses from 'constants/statuses';
import initialState from 'constants/initialState';
import Loader from 'components/Loader';
import CastItem from 'components/CastItem';
import { List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(() => initialState.cast);
  const [status, setStatus] = useState(() => initialState.status);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast(id) {
      try {
        setStatus(statuses.pending);
        const { cast } = await moviesServiceApi.fetchMovieCast(id);
        setCast(cast);
        successToast('Cast uploaded');
        setStatus(statuses.resolved);
      } catch (error) {
        errorToast('HTTP request failed');
        setStatus(statuses.rejected);
      }
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {status === statuses.pending && <Loader />}
      {cast && (
        <List>
          {cast.map((item) => (
            <CastItem key={item.id} item={item} />
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
