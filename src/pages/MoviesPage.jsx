import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieByQuery } from 'components/shared/services/moviesAPI';
import MovieSearchForm from './MovieSearchForm';
import { useSearchParams } from 'react-router-dom';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    if (keyword === '' || keyword === null) {
      return;
    }

    fetchMovieByQuery(keyword).then(setMovies);
  }, [keyword]);

  const handleSearch = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <>
      <MovieSearchForm searchParams={searchParams} setSearchParams={setSearchParams} onSubmit={handleSearch} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
