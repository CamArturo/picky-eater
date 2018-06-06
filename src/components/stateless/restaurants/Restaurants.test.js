import React from 'react';
import { Restaurants, mapStateToProps } from './Restaurants';
import { shallow } from 'enzyme';
import { mockListRestaurants } from '../../../mockData';

describe('Restaurants page tests', () => {

  let wrapper;
  let mockState;

  beforeEach(() => {
    mockState = {
      restaurants: mockListRestaurants
    };

    wrapper = shallow(
      <Restaurants
        restaurants={mockListRestaurants}
      />);

  });

  it('Should match the snapshot', () => {
    const appComponent = shallow(
      <Restaurants
        restaurants={mockListRestaurants}
    />);

    expect(appComponent).toMatchSnapshot();
  });

  it('should mapStateToProps', () => {
    const actual = mapStateToProps(mockState);
    const expected = {
      restaurants: mockListRestaurants
    };
    expect(actual).toEqual(expected);
  });
});