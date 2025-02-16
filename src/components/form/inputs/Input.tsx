import React from 'react';

interface InputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, placeholder, onChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        type={type} 
        placeholder={placeholder} 
        onChange={onChange} 
        className="input-field"
        aria-labelledby={id + "-label"}
        aria-required="true"
      />
    </div>
  );
}

export default Input;