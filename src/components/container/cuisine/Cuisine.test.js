import React from 'react';
import { Cuisine, mapDispatchToProps } from './Cuisine';
import { shallow, mount } from 'enzyme';
import * as mock from '../../../mockData';
// import { getCuisines } from '../../../api/getCuisines'
// import * as apiCalls from '../../../api/getCuisines'
jest.mock('../../../api/getCuisines');
import { sendCuisinesToStore } from '../../../actions/cuisines';
import { mockListRestaurants } from '../../../mockData';

describe('Cuisine page tests', () => {

  let wrapper;
  let chosenCityID;
  let getCuisines;
  let sendCuisinesToStore;
  let loadCuisines;
  let availableCuisines;
  let chosenCity;

  beforeEach(() => {

    chosenCityID = 5172;
    getCuisines = jest.fn();
    sendCuisinesToStore = jest.fn();
    loadCuisines = jest.fn();
    availableCuisines = mock.availableCuisines;
    chosenCity = mock.chosenCity;

    wrapper = shallow(<Cuisine
      chosenCityID={chosenCityID}
      getCuisines={getCuisines}
      sendCuisinesToStore={sendCuisinesToStore}
      loadCuisines={loadCuisines}
      availableCuisines={availableCuisines}
      chosenCity={chosenCity}
    />);

  });

  it('Should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('it calls storeCuisines on componentDidMount when chosenCityID has value', () => {

    expect(loadCuisines).toHaveBeenCalled();
    // const spy = spyOn(wrapper.instance(), 'storeCuisines')
    // expect(spy).toHaveBeenCalled();
  });
  // Each key/value pair represents a callback function, that will ultimately call dispatch.
  // mapDispatchToProps is similar to mapStateToProps in that it returns a object
  it('should calls dispatch when loadCuisines is called with correct params', () => {
    //Setup
    const mockDispatch = jest.fn();
    // const actionToDispatch = sendCuisinesToStore();

    const mockAction = {
      type: 'ADD_AVAILABLE_CUISINES',
      cuisines: mock.availableCuisines
    };

    //Execution
    // called with action object
    // mappedProps going to evaluate to an object
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadCuisines(mock.availableCuisines);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  it('call dispatch with sendRestaurantsToStore with correct params (restaurants)', () => {
    const mockDispatch = jest.fn();
    const mockAction = {
      type: 'STORE_RESTAURANTS',
      restaurants: mockListRestaurants
    };

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadRestaurants(mockListRestaurants);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
  it('Button return-restaurants should call storeRestaurants when clicked', () => {

    const spy = spyOn(wrapper.instance(), 'storeRestaurants');
    wrapper.find('.return-restaurants').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('calls loadCusines with the correct params when filterAvailableCusines is called', () => {
    wrapper.instance().filterAvailableCuisines('American');
    const expected = [
      {cuisine: {cuisine_id: 6, cuisine_name: 'Afghani'}},
      {cuisine: {cuisine_id: 152, cuisine_name: 'African'}}
    ];  // the expected params
    expect(loadCuisines).toHaveBeenCalledWith(expected);
  });
  it('calls filterAvailableCuisines when cuisine-btn is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'filterAvailableCuisines');
    const mockEvent = {target: {name: 'American'}};
    wrapper.find('.cuisine-btn').at(0).simulate('click', mockEvent);

    expect(spy).toHaveBeenCalled();
  })
});