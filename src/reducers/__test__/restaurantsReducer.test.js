import { sendRestaurantsToStore } from '../../actions/loadRestaurants';
import { restaurants } from '../restaurantsReducer';
import { mockListRestaurants } from '../../mockData';

describe('Restaurants Reducer Tests', () => {

  let mockState;
  let mockRestaurants;

  beforeEach(() => {
    mockState = {
      restaurants: []
    };

    mockRestaurants = [
      'Yesterday\'s Pub & Dining',
      'Olde Tyme Steakhaus',
      'Brew City Pub & Grill',
      'Holiday Restaurant',
      'Richard\'s Farm Restaurant',
      'Lone Star Steakhouse & Saloon',
      'Gray\'s'
    ]
  });

  it('should return an array of restaurants with STORE_RESTAURANTS action', () => {
    const actual = restaurants(mockState, sendRestaurantsToStore(mockRestaurants));

    expect(actual).toEqual(mockRestaurants);

  });

  it('should return initial state array if there is no given state', () => {

    const expected = [];

    const result = restaurants(undefined, []);

    expect(result).toEqual(expected);

  });
});
