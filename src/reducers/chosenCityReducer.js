export const chosenCity = (state = '', action) => {
  switch (action.type) {
    case 'ADD_CHOSEN_CITY':
      return action.city;
    default:
      return state
  }
};
