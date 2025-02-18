import React, { useState } from 'react';
import Input from './inputs/Input';
import { handleFormSubmit, validateName } from './utils/formHandler';

const Form = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateName(name, true);
    if (error) {
      setNameError(error);
      return;
    }
    try {
      const data = await handleFormSubmit(name);
      console.log("data", data);
      setNameError('');
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const error = validateName(e.target.value, true);
    setNameError(error);
  }

  return (
    <div className='form-wrapper'>
    <h2 id="form-title" className='form-title'>Text input</h2>
    <form className='form' onSubmit={handleSubmit} aria-labelledby="form-title">
      <Input 
        id="name" 
        type="text"
        label="Input"
        sublabel='Optional' 
        placeholder="Meno" 
        onChange={handleInputChange} 
        onBlur={handleInputBlur}
        error={nameError}
      />
      <button className='submit-btn' type="submit" aria-label="Odoslať formulár" disabled={!!nameError} >Odoslať</button>
    </form>
    </div>
  )
}

export default Form;