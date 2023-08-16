import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from './MoviesList.styled';
import { moviesPath } from 'constants/pathNames';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title = 'Unknown movie' }) => {
        return (
          <li key={id}>
            <Link state={{ from: location }} to={`/${moviesPath}/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
