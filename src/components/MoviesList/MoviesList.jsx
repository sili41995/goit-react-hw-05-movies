import React from 'react';
import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title = 'Unknown movie' }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </List>
  );
};

export default MoviesList;
