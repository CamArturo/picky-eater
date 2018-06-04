import React from 'react';
import { LocationInput } from './LocationInput';
import { shallow } from 'enzyme';
import { getCities } from '../../../api/getCities';
import * as mock from '../../../mockData';
import { mapDispatchToProps } from './LocationInput';
import { sendLocationsToStore } from '../../../actions/loadLocations'
import { addChosenCity } from '../../../actions/chosenCity';


jest.mock('../../../api/getCuisines');
// import { mockLocations } from '../../../mockData';

describe('Locations', () => {
  let wrapper;
  let mockProps;
  let loadLocations;
  let mockState;
  let storeCities;

  beforeEach(() => {
    mockState = {
      userInput: ''
    };

    mockProps = {
      loadLocations: jest.fn()
    };

    // loadLocations = jest.fn();
    wrapper = shallow(
      <LocationInput
        loadLocations={loadLocations}
        getCities={getCities}
        {...mockState}
        {...mockProps}
      />);
  });

  // const spy = spyOn(wrapper.instance(), 'getCities');
  // expect(spy).toHaveBeenCalled();

  it('Should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state(user Input) on user Input', () => {
    const expected = 'Newton';
    const mockEvent = {target: {value: 'Newton'}};
    wrapper.find('.search-city-input').simulate('change', mockEvent);
    expect(wrapper.state('userInput')).toEqual(expected);
  });
  it('should call getCities when button is clicked', () => {

    const storeCities = wrapper.instance().storeCities = jest.fn();
    wrapper.find('button').simulate('click');
    expect(storeCities).toHaveBeenCalled();
  });
  it('should call storeCities on Submit of form', () => {

    const storeCities = wrapper.instance().storeCities = jest.fn();
    const event = {preventDefault: jest.fn()};
    wrapper.find('form').simulate('submit', event);
    expect(storeCities).toHaveBeenCalled();

  });
  it('should fire loadLocations when submit button is clicked', () => {
    const mockedDispatchToProps = jest.fn();
    const mappedProps = mapDispatchToProps(mockedDispatchToProps);

    mappedProps.loadLocations(mock.mockLocations);

    const expected = sendLocationsToStore(mock.mockLocations); // everything that is going to be called with
    expect(mockedDispatchToProps).toHaveBeenCalledWith(expected);

  });
});
