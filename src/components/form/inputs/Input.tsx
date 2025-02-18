import React from 'react';

interface InputProps {
  id: string;
  type: string;
  label: string;
  sublabel?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, label, placeholder, sublabel, onChange, onBlur, required, error, disabled  }) => {
  return (
    <div className="input-wrapper">
      <label className='label' htmlFor={id}>
        {label}
        {sublabel && <span className='sublabel'>{sublabel}</span>}
      </label>
      <input 
        id={id}
        type={type} 
        placeholder={placeholder}
        onChange={onChange} 
        className="input-field"
        aria-labelledby={id + "-label"}
        aria-required="true"
        onBlur={onBlur}
        required={required}
        disabled={disabled}
      />
      {error && !disabled && <p className="error" role="alert">{error}</p>}
    </div>
  );
}

export default Input;