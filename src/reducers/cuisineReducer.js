export const availableCuisines = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AVAILABLE_CUISINES':
      return action.cuisines;
    default:
      return state;
  }
};