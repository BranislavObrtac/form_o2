export const formSubmitUrl = 'https://o2.sk/api/form-submit';

export const handleFormSubmit = async (name: string) => {
  const validationError = validateName(name, true);
  if (validationError) {
    throw new Error(validationError);
  }

  try {
    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error('Chyba pri odosielaní formulára');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const validateName = (name: string, required: boolean = false) => {
  if (required && !name) {
    return 'Meno je povinné';
  }
  if (name && name.length < 3) {
    return 'Meno musí mať aspoň 3 znaky';
  }
  return '';
}
