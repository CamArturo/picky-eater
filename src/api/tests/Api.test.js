import { getCities } from '../getCities';
import { getCuisines } from '../getCuisines';
import { getRestaurants } from '../getRestaurants';
import key from '../../apiKey';
import { availableCuisines, mockRestaurants } from '../../mockData';

describe('API tests', () => {

  describe('getRestaurants Testing', () => {
    let mockCityID;
    let mockCuisineIDs;
    let mockData;

    beforeEach(() => {
      mockCityID = 5172;
      mockCuisineIDs = '233, 121';
      mockData = {};

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockRestaurants)
      }));
    });
    it('should call the fetch with correct params', async () => {
      const mockOptions = {
        method: 'GET',
        headers: {
          'user-key': key,
          'Content-Type': 'application/json'
        }
      };
      const expected = [`https://developers.zomato.com/api/v2.1/search?entity_id=${mockCityID}&entity_type=city&cuisines=${mockCuisineIDs}&sort=rating`, mockOptions];

      await getRestaurants(mockCityID, mockCuisineIDs);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it('should return data after api call', async () => {
      const result = await getRestaurants(mockCityID, mockCuisineIDs);
      expect(result).toEqual(mockRestaurants);

    });

    it('should throw an error if the fetch fails ', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('failed fetching')));

      const expected = Error('Failed to fetch restaurants. (error: failed fetching)');
      expect(getRestaurants('asdf')).rejects.toEqual(expected);
    });
  });

  describe('getCities Testing', () => {
    let mockData;
    beforeEach(() => {
      mockData = [{city: 'Newton, TX'}];

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData)
      }));
    });

    it('should call the fetch with correct params', async () => {
      const mockQuery = 'Newton';
      const mockOptions = {
        method: 'GET',
        headers: {
          'user-key': key,
          'Content-Type': 'application/json'
        }
      };
      const expected = [`https://developers.zomato.com/api/v2.1/cities?q=${mockQuery}`, mockOptions];

      await getCities(mockQuery);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return data after api call', async () => {

      const result = await getCities('Newton');
      const expected = mockData;

      expect(result).toEqual(expected);
    });

    it('should throw an error if the fetch fails ', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('failed fetching')));

      const expected = Error('Failed to fetch. (error: failed fetching)');
      expect(getCities('SDSD')).rejects.toEqual(expected);
    });
  });

  describe('getCuisines Testing', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(availableCuisines)
      }));
    });
    it('should call the fetch with the correct params', async () => {
      const mock_id = 305;
      const mockOptions = {
        method: 'GET',
        headers: {
          'user-key': key,
          'Content-Type': 'application/json'
        }
      };

      const expectedCuisines = [`https://developers.zomato.com/api/v2.1/cuisines?city_id=${mock_id}`, mockOptions];

      await getCuisines(mock_id);

      expect(window.fetch).toHaveBeenCalledWith(...expectedCuisines);

    });

    it('should return data after api call', async () => {

      const actual = await getCuisines(305);

      expect(actual).toBe(availableCuisines);

    });

    it('should throw an error if the fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('Failed to fetch cuisines. (error: ')));

      const expected = Error('Failed to fetch cuisines. (error: Failed to fetch cuisines. (error: ');

      expect(getCuisines(305)).rejects.toEqual(expected);
    });
  });
});


