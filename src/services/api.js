const API_BASE_URL = 'https://api.payg-backend.com';

export const apiRequest = async (url, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  return res.json();
};
