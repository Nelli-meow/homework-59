import * as React from 'react';

interface Props {
  title: string;
}

const MovieItem: React.FC<Props> = ({ title }) => {
  return (
    <div className="m-3">
      <input type="text" value={title} className="form-control mx-4 border border-black" readOnly />
    </div>
  );
};

export default MovieItem;
