import { getCities } from './Api';
import key from '../apiKey';

describe('getCities', () => {
  let mockData;
  beforeEach(() => {
    mockData = [{city: 'Newton, TX'}];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockData)
    }));
  });

  it('should call the fetch with correct params', async function () {
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

  it('should return data after api call', async function () {

    const result = await getCities('Newton');
    const expected = mockData;

    expect(result).toEqual(expected);
  });

  it('should throw an error if the fetch fails ', async function () {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('failed fetching')));

    const expected = Error('Failed to fetch. (error: failed fetching)');
    expect(getCities('SDSD')).rejects.toEqual(expected);
  });
});


