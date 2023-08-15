import initialState from 'constants/initialState';
import statuses from 'constants/statuses';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesServiceApi from 'service/movies-service';
import { errorToast, successToast } from 'utils/toasts';
import Loader from 'components/Loader';
import CastItem from 'components/CastItem';

const Cast = () => {
  const [cast, setCast] = useState(() => initialState.cast);
  const [status, setStatus] = useState(() => initialState.status);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast(id) {
      try {
        setStatus(statuses.pending);
        const { cast } = await moviesServiceApi.fetchMovieCast(id);
        console.log(cast);
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
        <ul>
          {cast.map((item) => (
            <CastItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
