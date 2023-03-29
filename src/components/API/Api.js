import axios from 'axios';

const API_KEY = 'c34d624783ee48c11b5d0b51da30f0d1';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTrendingMovies;

const searchMovies = async (query, page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default searchMovies;

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchMovieDetails;

  const fetchMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchMovieCredits;

  const fetchMovieReviews = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchMovieReviews;

  