import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className='border rounded px-4 py-2 mt-2 ml-2 bg-blue-500 text-white' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
