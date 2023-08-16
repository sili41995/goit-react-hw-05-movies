class MoviesServiceApi {
  #API_KEY = '2f4676f5b742582c83b7dc4456b7601c';
  #BASE_URL = 'https://api.themoviedb.org/3';

  fetchTrendingMovies() {
    return fetch(
      `${this.#BASE_URL}/trending/all/day?language=en-US&api_key=${
        this.#API_KEY
      }`
    ).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  }

  fetchMovieDetails(id) {
    return fetch(
      `${this.#BASE_URL}/movie/${id}?language=en-US&api_key=${this.#API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  }

  fetchMovieCast(id) {
    return fetch(
      `${this.#BASE_URL}/movie/${id}/credits?language=en-US&api_key=${
        this.#API_KEY
      }`
    ).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  }

  fetchMovieReviews(id) {
    return fetch(
      `${this.#BASE_URL}/movie/${id}/reviews?language=en-US&page=1&api_key=${
        this.#API_KEY
      }`
    ).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  }

  fetchMoviesByTitle(title) {
    return fetch(
      `${
        this.#BASE_URL
      }/search/movie?query=${title}&include_adult=false&language=en-US&page=1&api_key=${
        this.#API_KEY
      }`
    ).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  }
}

const moviesServiceApi = new MoviesServiceApi();

export default moviesServiceApi;
