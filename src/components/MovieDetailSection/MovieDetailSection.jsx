import React from 'react';
import { Link } from 'react-router-dom';
import getImagePath from 'utils/getImagePath';

const MovieDetailSection = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const posterPath = getImagePath(poster_path);
  const fullYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres.map(({ name }) => name).join(', ');
  return (
    <div>
      <div>
        <img src={posterPath} alt="" />
        <div>
          <h2>{`${title} (${fullYear})`} </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{movieGenres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailSection;
