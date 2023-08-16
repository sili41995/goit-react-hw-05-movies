import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { errorToast, successToast } from 'utils/toasts';
import moviesServiceApi from 'service/movies-service';
import statuses from 'constants/statuses';
import initialState from 'constants/initialState';
import Loader from 'components/Loader';
import ReviewsItem from 'components/ReviewsItem';
import { List } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(() => initialState.reviews);
  const [status, setStatus] = useState(() => initialState.status);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews(id) {
      try {
        setStatus(statuses.pending);
        const { results } = await moviesServiceApi.fetchMovieReviews(id);
        setReviews(results);
        successToast('Reviews uploaded');
        setStatus(statuses.resolved);
      } catch (error) {
        errorToast('HTTP request failed');
        setStatus(statuses.rejected);
      }
    }

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {status === statuses.pending && <Loader />}
      {!!reviews.length ? (
        <List>
          {reviews.map((item) => (
            <ReviewsItem key={item.id} item={item} />
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
