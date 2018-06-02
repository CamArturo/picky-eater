export const addChosenCity = (city, id) => {
  return {
    type: 'ADD_CHOSEN_CITY',
    city,
    id
  }
};