export const sendCuisinesToStore = (cuisines) => {
  return {
    type: 'ADD_AVAILABLE_CUISINES',
    cuisines
  };
};