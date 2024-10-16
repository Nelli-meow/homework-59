import * as React from 'react';
import { MoviesInputs } from '../../types';
import Movie from '../Movie/Movie.tsx';

const Form: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const [movies, setMovies] = React.useState<MoviesInputs[]>([]);

  const addMovie = (e: React.FormEvent) => {
    e.preventDefault();

    if(title.trim().length === 0) {
      alert('Please enter a title');
    } else {
      setMovies(prevState => [{ id: String(new Date()), title: title }, ...prevState]);
      setTitle('');
    }
  };

  const deleteMovie = (id: string) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const updateMovie = (id: string, newTitle: string) => {
    setMovies(prevMovies =>
      prevMovies.map(movie => (movie.id === id ? { ...movie, title: newTitle } : movie))
    );
  };


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
      <Movie movies={movies} onDeleteMovie={deleteMovie} onUpdateMovie={updateMovie} /> {/* Передаем функцию для обновления названия */}
    </>
  );
};

export default Form;
