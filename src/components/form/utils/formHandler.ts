export const formSubmitUrl = 'https://example.com/api/form-submit';

export const handleFormSubmit = async (name: string) => {
  if (!name) {
    throw new Error('Name is required');
  }

  const response = await fetch(formSubmitUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return await response.json();
}
