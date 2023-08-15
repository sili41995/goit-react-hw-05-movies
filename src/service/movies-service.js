class MoviesServiceApi {
  #API_KEY = '2f4676f5b742582c83b7dc4456b7601c';

  // constructor() {}

  fetchTrendingMovies() {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${
        this.#API_KEY
      }`
    ).then((response) => response.json());
  }

  fetchMovieDetails(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${
        this.#API_KEY
      }`
    ).then((response) => response.json());
  }

  fetchMovieCast(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${
        this.#API_KEY
      }`
    ).then((response) => response.json());
  }

  fetchMovieReviews(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=${
        this.#API_KEY
      }`
    ).then((response) => response.json());
  }
}

const moviesServiceApi = new MoviesServiceApi();

export default moviesServiceApi;
