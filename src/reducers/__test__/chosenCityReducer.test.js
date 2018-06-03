// Reducer test typically have one test per case plus a test for default
// + do a sad case
// takes in a mock state and actually updates the state
// with undefined state it returns default
// need to import action that triggers the reducer

import { addChosenCity } from '../../actions/chosenCity';
import { chosenCity } from '../chosenCityReducer';

describe('Chosen City Reducer Tests', () => {

  let mockState;
  let initialState;

  beforeEach(() => {
    mockState = {
      chosenCity: ''
    };

    initialState = '';
  });

  it('should return an array of cities when with ADD_CHOSEN_CITY action', () => {
    const actual = chosenCity(mockState, addChosenCity('Newton, IL', 5172));
    const expected = {
      city: 'Newton, IL',
      id: 5172
    };

    expect(actual).toEqual(expected);

  });
  it('should return initial state if there is no given state', () => {

    const actual = chosenCity(undefined, {});

    expect(actual).toEqual({});
  });
});
