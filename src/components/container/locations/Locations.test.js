// returning an object that has proper object with key and value of a function
// => aka the expected object.

// dispatch is being called with correct action
import { shallow } from 'enzyme';
import { Locations } from './Locations';
import React from 'react';
import { mockLocations } from '../../../mockData';
import { mapStateToProps, mapDispatchToProps } from './Locations';
import { addChosenCity } from '../../../actions/chosenCity';
// import { getCities } from '../../../api/getCities';
jest.mock('../../../api/getCities');
import * as citiesFetch from '../../../api/getCities'


describe('Locations', () => {
  let wrapper;
  let mockState;
  let mockProps;

  beforeEach(() => {
    mockState = {
      locations: mockLocations,
      chosenCity: 'Newton, IL'
    };

    mockProps = {
      storeChosenCity: jest.fn()
    };

    citiesFetch.getCities.mockImplementation(() => {
      return
    })

    wrapper = shallow(
      <Locations
        {...mockProps}
        locations={mockLocations}
        storeChosenCity={jest.fn()}
      />);
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
    const actionToDispatch = {'city': 'Newton, IL', 'type': 'ADD_CHOSEN_CITY'};

    const mappedProps = mapDispatchToProps(mockDispatch); // <---- action creator

    mappedProps.storeChosenCity('Newton, IL');
    // dispatches a function that passing that object the actions
    // method that calls another method(action creator) that has an action (an object)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it('should only render buttons when there are more than 0 locations in store', () => {
    const mockLocations = [];
    const mockedDispatchToProps = jest.fn();
    const mappedProps = mapDispatchToProps(mockedDispatchToProps);
    const wrapper2 = shallow(<Locations storeChosenCity={mappedProps.storeChosenCity} locations={mockLocations} />);

    expect(wrapper2.find('.location-btn').exists()).toEqual(false);
  });
  it('should not render buttons if locations is zero length', () => {
    const mockState3 = {
      locations: []
    };
    const wrapper3 = shallow(<Locations {...mockProps} locations={mockState3.locations} storeChosenCity={jest.fn()} />);
    expect(wrapper3).toMatchSnapshot();
  });
  it('should fire storeChosenCity when a button.location-btn is clicked', () => {
    const mockedDispatchToProps = jest.fn();
    const mappedProps = mapDispatchToProps(mockedDispatchToProps);
    const chosenCity = 'Newton, IL';

    mappedProps.storeChosenCity(chosenCity, 5172);

    const expected = addChosenCity(chosenCity, 5172); // everything that is going to be called with
    expect(mockedDispatchToProps).toHaveBeenCalledWith(expected);

  });
});

