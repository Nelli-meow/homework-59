import * as React from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';

const Movie = () => {
  const [movies, setMovies] = React.useState([
    {
      id: '1',
      title: 'Film 1',
    },
    {
      id: '2',
      title: 'Film 2',
    },
    {
      id: '3',
      title: 'Film 3',
    }
  ]);


  return (
    <div className="m-5">
      <MovieItem title="hello"/>

      {movies.map(movie => (
        <MovieItem key={movie.id} title={movie.title} />
      ))}
    </div>
  );
};

export default Movie;