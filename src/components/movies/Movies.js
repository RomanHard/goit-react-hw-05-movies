import { useState, useEffect } from 'react';
import { searchMovies } from '../API/Api.js';
import MovieList from "../movieList/MovieList";
import { useLocation, useNavigate } from 'react-router-dom';



const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryValue = queryParams.get('query') || '';
    setQuery(queryValue);
  }, [location]);

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);
      searchMovies(query).then(movies => {
        setMovies(movies);
        setIsLoading(false);
      });
    }
  }, [query]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    navigate.push({ ...location, search: `query=${newQuery}` });
  };

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={query} onChange={e => handleSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} basePath={location.pathname} />
      )}
    </div>
  );
};

export default MoviesPage;
