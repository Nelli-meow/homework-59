import * as React from 'react';
import {  useState } from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn.tsx';

interface Props {
  title: string;
  onDeleteMovie: () => void;
  onUpdateMovie: (newTitle: string) => void;
}

const MovieItem: React.FC<Props> = React.memo(({ title, onDeleteMovie, onUpdateMovie }) => {
  const [newTitle, setNewTitle] = useState<string>(title);

  const changeTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdateMovie(newTitle);
  };

  return (
    <form onSubmit={changeTitle}>
      <div className="m-3 d-flex justify-content-center align-items-center">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          value={newTitle}
          className="form-control mx-4 border border-black"
        />
        <DeleteBtn onClick={onDeleteMovie} />
      </div>
    </form>
  );
}, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});

export default MovieItem;
