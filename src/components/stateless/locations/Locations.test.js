// returning an object that has proper object with key and value of a function
// => aka the expected object.

// dispatch is being called with correct action
import { shallow, mount, render } from 'enzyme';
import { Locations } from './Locations';
import React from 'react';
import { mockLocations } from '../../../mockData';
import { mapStateToProps, mapDispatchToProps } from './Locations';
import { addChosenCity } from '../../../actions/chosenCity';
import { locations } from '../../../reducers/locationReducers';
import { chosenCity } from '../../../reducers/chosenCityReducer';

describe('Locations', () => {
  let wrapper;
  let mockState;
  beforeEach(() => {
    wrapper = shallow(<Locations locations={mockLocations} storeChosenCity={jest.fn} />);
    mockState = {
      locations: mockLocations,
      chosenCity: 'Newton, IL'
    };
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should mapStateToProps', () => {
    const actual = mapStateToProps(mockState);
    const expected = {
      locations: mockLocations
    };
    expect(actual).toEqual(expected);
  });
  it('calls dispatch with an addChosenCity when a button is clicked', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = {"city": "Newton, IL", "type": "ADD_CHOSEN_CITY"};

    // const actionToDispatch = addChosenCity('Newton, IL');
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.storeChosenCity('Newton, IL');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
  it('should fire storeChosenCity when a button is clicked', () => {

  });
  it('should only render buttons when there are more than 0 locations in store', () => {

  });
});