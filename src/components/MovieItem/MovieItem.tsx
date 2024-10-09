import * as React from 'react';
import { useEffect } from 'react';
import DeleteBtn from '../DeleteBtn/DeleteBtn.tsx';

interface Props {
  title: string,
  onDeleteMovie: () => void,
}

const MovieItem: React.FC<Props> = React.memo(({title, onDeleteMovie}) => {

  useEffect(() => {
    console.log('Фильмы отрегались');
  }, [])


  return (
    <div className="m-3 d-flex justify-content-center align-items-center">
      <input type="text" value={title} className="form-control mx-4 border border-black"/>
      <DeleteBtn onClick={onDeleteMovie}/>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});

export default MovieItem;
