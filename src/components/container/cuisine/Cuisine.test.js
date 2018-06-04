import React from 'react';
import { Cuisine, mapDispatchToProps } from './Cuisine';
import { shallow, mount } from 'enzyme';
import * as mock from '../../../mockData';
// import { getCuisines } from '../../../api/getCuisines'
// import * as apiCalls from '../../../api/getCuisines'
jest.mock('../../../api/getCuisines');
import { sendCuisinesToStore } from '../../../actions/cuisines';

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

    wrapper = mount(<Cuisine
      chosenCityID={chosenCityID}
      getCuisines={getCuisines}
      sendCuisinesToStore={sendCuisinesToStore}
      loadCuisines={loadCuisines}
      availableCuisines={availableCuisines}
      chosenCity={chosenCity}
    />);

  });

  it.skip('Should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('it calls storeCuisines on componentDidMount when chosenCityID has value', () => {

    expect(loadCuisines).toHaveBeenCalled();
    // const spy = spyOn(wrapper.instance(), 'storeCuisines')
    // expect(spy).toHaveBeenCalled();
  });
  // Each key/value pair represents a callback function, that will ultimately call dispatch.
  // mapDispatchToProps is similar to mapStateToProps in that it returns a object
  it('should call mapDispatchToProps when there is a chosenCityID', () => {
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
    // console.log(mappedProps)
    mappedProps.loadCuisines(mock.availableCuisines);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  // it.skip('should ', () => {
  //   // jest.spyOn - finds a method and just listening for it. 'method'
  //   const spy = jest.spyOn(wrapper.instance(), 'storeCuisines');
  //   await wrapper.instance().componentDidMount();
  //   expect(spy).toHaveBeenCalled();
  // });

});