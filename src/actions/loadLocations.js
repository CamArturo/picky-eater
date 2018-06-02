export const sendLocationsToStore = (locations, id) => (
  {
    type: 'STORE_CITIES',
    locations,
    id
  }
);