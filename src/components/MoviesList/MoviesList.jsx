import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title = 'Unknown movie' }) => {
        return (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};

export default MoviesList;
