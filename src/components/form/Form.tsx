import React, { useState } from 'react';
import Input from './inputs/Input';
import { handleFormSubmit } from './utils/formHandler';

const Form = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await handleFormSubmit(name);
      console.log('Form submitted successfully:', data);
      setError('');
    } catch (error) {
      setError(error.message || 'Odoslanie formulára zlyhalo');
      console.error(error);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <form className='form' onSubmit={handleSubmit} aria-labelledby="form-title">
      <Input 
        id="name" 
        type="text" 
        label="Meno" 
        placeholder="Meno" 
        onChange={handleInputChange} 
      />
      {error && <p className="error" role="alert">{error}</p>}
      <button type="submit" aria-label="Odoslať formulár">Odoslať</button>
    </form>
  )
}

export default Form;