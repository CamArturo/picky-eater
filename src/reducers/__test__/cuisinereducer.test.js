import { sendCuisinesToStore } from '../../actions/cuisines';
import { availableCuisines } from '../cuisineReducer';

describe('Available Cuisines Reducer Tests', () => {

  let mockState;
  let initialState;

  beforeEach(() => {
    mockState = [];

    initialState = [];
  });

  it('should return an array of objects (cuisines) when ADD_AVAILABLE_CUISINES action', () => {
    const expected = [
      {
        cuisine: {
          cuisine_id: 1,
          cuisine_name: 'American'
        }
      },
      {
        cuisine: {
          cuisine_id: 193,
          cuisine_name: 'BBQ'
        }
      }
    ];
    const actual = availableCuisines(mockState, sendCuisinesToStore(expected));

    expect(actual).toEqual(expected);
  });
  it('should return initial state if there is no given state', () => {
    const actual = availableCuisines(undefined, []);

    expect(actual).toEqual([])
  })
});


