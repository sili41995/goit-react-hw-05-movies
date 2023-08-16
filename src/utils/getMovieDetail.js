import getImagePath from 'utils/getImagePath';
import defaultMoviePoster from 'components/default-movie-poster.jpg';

const getMovieDetail = (movie) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const posterPath = poster_path
    ? getImagePath(poster_path)
    : defaultMoviePoster;
  const fullYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres.map(({ name }) => name).join(', ');

  return { posterPath, fullYear, userScore, movieGenres, title, overview };
};

export default getMovieDetail;
