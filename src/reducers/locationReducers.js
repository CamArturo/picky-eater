export const loadLocations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_CITIES':
      return [...action.locations];
    default:
      return state
  }
};