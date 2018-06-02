import { sendLocationsToStore } from '../loadLocations';

describe('Store Cities', function () {
  it('should return an action with type STORE_CITIES and payload of array of objects', function () {
    const expected = {
      type: 'STORE_CITIES',
      locations: [{},{},{}]
    };
    const actual = sendLocationsToStore([{},{},{}]);

    expect(actual).toEqual(expected);
  });
});