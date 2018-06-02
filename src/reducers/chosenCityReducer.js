export const chosenCity = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHOSEN_CITY':
      return {
        city: action.city,
        id: action.id
      };
    default:
      return state
  }
};
