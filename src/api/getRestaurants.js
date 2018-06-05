import key from '../apiKey.js';

export const getRestaurants= async (cityID, cuisineIDs) => {
  try {
    const baseURLSubmittedCuisines = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&cuisines=${cuisineIDs}`;
    const options = {
      method: 'GET',
      headers: {
        'user-key': key,
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(baseURLSubmittedCuisines, options);
    const restaurants = await response.json();
    return restaurants;
  } catch (error) {
    throw new Error(`Failed to fetch restaurants. (error: ${error.message})`)
  }
};