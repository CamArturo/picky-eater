// Reducer test typically have one test per case plus a test for default
// + do a sad case
// takes in a mock state and actually updates the state
// with undefined state it returns default
// need to import action that triggers the reducer

import { addChosenCity } from '../../actions/chosenCity';
import { chosenCity } from '../chosenCityReducer';

describe('locations Tests', function () {

  let mockState;
  let initialState;

  beforeEach(() => {
    mockState = {
      chosenCity: ''
    };

    initialState = '';
  });

  it('should return an array of cities when with ADD_CHOSEN_CITY action', function () {

    const payload = 'Newton, IL';
    const actual = chosenCity(mockState, addChosenCity(payload));

    expect(actual).toEqual('Newton, IL');

  });
  it('should return initial state if there is no given state', function () {

    const actual = chosenCity(undefined, {});

    expect(actual).toEqual('');
  });
});