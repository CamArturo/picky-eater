import { sendLocationsToStore } from '../../actions/loadLocations';
import { locations } from '../locationReducers';

describe('Load Locations Reducer Tests', () => {

  let mockLocations;
  let initialState;

  beforeEach(() => {
    mockLocations = [
      {
        id: 291,
        name: 'Miami, FL',
        country_id: 216,
        country_name: 'United States',
        country_flag_url: 'https://b.zmtcdn.com/images/countries/flags/country_216.png'
      },
      {
        id: 4341,
        name: 'Miami, AZ',
        country_id: 216,
        country_name: 'United States',
        country_flag_url: 'https://b.zmtcdn.com/images/countries/flags/country_216.png'
      }
    ];
    initialState = [];
  });

  it('should return an array location objects when STORE_CITIES is dispatched', () => {
    const actual = locations(initialState, sendLocationsToStore(mockLocations));

    expect(actual).toEqual(mockLocations);
  });
});