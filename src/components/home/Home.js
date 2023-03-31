import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
