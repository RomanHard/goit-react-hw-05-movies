import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    <div>
    <div className='details'>
      <Link to="/movies">
        <span className="go-back-button">{"< Go back"}</span>
      </Link>
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
  <div className='additionalInfo'>
    <h3 className='additionalInfoTitle'>Additional information</h3>
    <ul className='additionalInfoList'>
      <li className='additionalInfoItem'>
        <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
      </li>
      <li className='additionalInfoItem'>
        <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
      </li>
    </ul>
  </div>
  </div>

  );
};

export default MovieDetails;
