import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API/Api';
import './details-module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    fetchMovieDetails(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details'>
       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='logo' />
       <div className='details-content'>
    <h1 className='title'>{movie.title}</h1>
    <p className='userScore'>User Score: {movie.vote_average * 10}%</p>
    <h2 className='overviewTitle'>Overview</h2>
    <p className='overview'>{movie.overview}</p>
    <h3 className='genresTitle'>Genres</h3>
    <ul className='genres'>
      {movie.genres.map(genre => (
        <li key={genre.id} className='genre'>
          {genre.name}
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default MovieDetails;
