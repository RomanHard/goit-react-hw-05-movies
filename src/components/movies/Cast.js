import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../API/Api';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(credits => {
      setCredits(credits);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {credits.map(credit => (
          <li key={credit.id}>
            <p>{credit.name}</p>
            <p>{credit.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
