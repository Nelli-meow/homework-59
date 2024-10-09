import * as React from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';
import { MoviesInputs } from '../../types';

interface MovieProps {
  movies: MoviesInputs[];
}

const Movie: React.FC<MovieProps> = ({ movies }) => {

  return (
    <div className="m-5">
      {movies.map(movie => (
        <MovieItem key={movie.id} title={movie.title} />
      ))}
    </div>
  );
};

export default Movie;
