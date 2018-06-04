import key from '../apiKey.js';

export const getCities = async (query) => {
  try {
    const baseURL = `https://developers.zomato.com/api/v2.1/cities?q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'user-key': key,
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(baseURL, options);
    const cities = await response.json();
    return cities;
  } catch (error) {
    throw new Error(`Failed to fetch. (error: ${error.message})`)
  }
};