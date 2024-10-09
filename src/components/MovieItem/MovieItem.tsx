import * as React from 'react';

interface Props {
  title: string,
}

const MovieItem: React.FC<Props> = ({title, key}) => {
  return (
    <div className="m-3">
      <input type="text" value={title} className="form-control mx-4 border border-black"/>
    </div>
  );
};

export default MovieItem;