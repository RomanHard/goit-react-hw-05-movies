
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../API/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {movies.map(movie => (
        <ul key={movie.id}>
          <li>{movie.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;