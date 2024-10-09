import * as React from 'react';
import { MoviesInputs } from '../../types';
import Movie from '../Movie/Movie.tsx';

const Form: React.FC = () => {
  const [title, setTitle] = React.useState('');

  const [movies, setMovies] = React.useState<MoviesInputs[]>([]);


  const addMovie = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie = {id: String(new Date()), title: title};

    setMovies(prevState => [newMovie, ...prevState]);
    setTitle('');
  }


  return (
    <>
      <form onSubmit={addMovie}>
        <div className="container d-flex flex-row align-items-center">
          <label className="form-label">Add movie:</label>
          <input
            type="text"
            className="form-control mx-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-warning">Add</button>
        </div>
      </form>
      <Movie movies={movies} />
    </>
  );
};

export default Form;