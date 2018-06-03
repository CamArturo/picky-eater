import { sendLocationsToStore } from '../loadLocations';
import { addChosenCity } from '../chosenCity';
import { sendCuisinesToStore } from '../cuisines';

describe('Action Tests', () => {
  describe('Store Cities', () => {
    it('should return an action with type STORE_CITIES and payload of array of objects', () => {
      const expected = {
        type: 'STORE_CITIES',
        locations: [{}, {}, {}]
      };
      const actual = sendLocationsToStore([{}, {}, {}]);

      expect(actual).toEqual(expected);
    });
  });
  describe('Add Chosen City', () => {
    it('should return an action with type ADD_CHOSEN_CITY and payload of city(string) and id(number)', () => {
      const expected = {
        type: 'ADD_CHOSEN_CITY',
        city: 'Newton, IL',
        id: 5172
      };
      const actual = addChosenCity('Newton, IL', 5172);

      expect(actual).toEqual(expected);
    });
  });
  describe('should return an action with type ADD_AVAILABLE_CUISINES and payload cuisines (array with objects', () => {
    const expected = {
      type: 'ADD_AVAILABLE_CUISINES',
      cuisines: [{}, {}]
    };
    const actual = sendCuisinesToStore([{}, {}]);

    expect(actual).toEqual(expected);
  });
});