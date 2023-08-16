import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMovieDetail from 'utils/getMovieDetail';
import {
  Image,
  Info,
  List,
  ListItem,
  Movie,
  Subtitle,
  Text,
  Title,
} from './MovieDetailSection.styled';

const MovieDetailSection = ({ movie }) => {
  const { posterPath, fullYear, userScore, movieGenres, title, overview } =
    getMovieDetail(movie);

  return (
    <>
      <Movie>
        <Image src={posterPath} alt="" />
        <div>
          <Title>{`${title} (${fullYear})`} </Title>
          <Text>User Score: {userScore}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <Text>{movieGenres}</Text>
        </div>
      </Movie>
      <Info>
        <Text>Additional information</Text>
        <List>
          <ListItem>
            <Link to="cast">Cast</Link>
          </ListItem>
          <ListItem>
            <Link to="reviews">Reviews</Link>
          </ListItem>
        </List>
      </Info>
    </>
  );
};

MovieDetailSection.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetailSection;
