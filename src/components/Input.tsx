import React from 'react';

// Ye interface define karta hai Input component ke props ko.
interface InputProps {
  value: string;
// onChange: Ek function h jo tab call hota h jab input field ki value change hoti hai.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input 
    className='border border-black rounded px-4 py-2 mt-2  text-black'
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
    />
  );
};

export default Input;
