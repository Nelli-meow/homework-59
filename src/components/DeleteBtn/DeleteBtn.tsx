import * as React from 'react';

interface Props {
  onClick: () => void;
}

const DeleteBtn: React.FC<Props> = ({onClick}) => {
  return (
    <button className="btn-close" onClick={onClick}></button>
  );
};

export default DeleteBtn;