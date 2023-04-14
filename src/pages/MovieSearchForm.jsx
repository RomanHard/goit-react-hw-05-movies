import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieByQuery } from 'components/shared/services/moviesAPI';

const MovieSearchForm = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    
    useEffect(() => {
        if (keyword === '' || keyword === null) {
        return;
        }
    
        fetchMovieByQuery(keyword).then(setMovies);
    }, [keyword]);
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ keyword: form.elements.keyword.value });
        form.reset();
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" />
        <button type="submit">Search</button>
        <ul>
            {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
        </form>
    );
    }