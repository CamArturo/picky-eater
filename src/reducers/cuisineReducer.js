export const availableCuisines = (state = [
  {
    'cuisine': {
      'cuisine_id': 73,
      'cuisine_name': 'Mexican'
    }
  }
], action) => {
  switch (action.type) {
    case 'ADD_AVAILABLE_CUISINES':
      return action.cuisines;
    default:
      return state;
  }
};