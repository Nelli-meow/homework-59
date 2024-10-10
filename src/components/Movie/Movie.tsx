import * as React from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';
import { MoviesInputs } from '../../types';

interface MovieProps {
  movies: MoviesInputs[];
  onDeleteMovie: (id: string) => void;
  onUpdateMovie: (id: string, newTitle: string) => void;
}

const Movie: React.FC<MovieProps> = ({ movies, onDeleteMovie, onUpdateMovie }) => {
  return (
    <div className="m-5">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          onDeleteMovie={() => onDeleteMovie(movie.id)}
          onUpdateMovie={(newTitle) => onUpdateMovie(movie.id, newTitle)}
        />
      ))}
    </div>
  );
};

export default Movie;
