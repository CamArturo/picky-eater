import { availableCuisines } from '../../mockData'

export const getCuisines = jest.fn().mockImplementation(() => {
  return Promise.resolve({availableCuisines});
});
