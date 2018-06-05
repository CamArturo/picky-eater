export const sendRestaurantsToStore = (restaurants) => (
  {
    type: 'STORE_RESTAURANTS',
    restaurants
  }
);