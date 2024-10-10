import * as React from 'react';

interface ButtonProps {
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({onClick}) => {
  return (
    <button type="button" className="btn btn-outline-success m-3" onClick={onClick}>Get new joke</button>
  );
};

export default Button;