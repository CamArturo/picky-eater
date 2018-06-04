import React from 'react';
import { Cuisine } from './Cuisine';
import { shallow, mount } from 'enzyme';
import * as mock from '../../../mockData';
// import { getCuisines } from '../../../api/getCuisines'
jest.mock('../../../api/getCuisines');

describe('Cuisine page tests', () => {

  let wrapper;
  let storeCuisines;
  let chosenCityID;
  let getCuisines;
  let sendCuisinesToStore;
  let loadCuisines;
  let availableCuisines;
  let chosenCity;

  beforeEach(() => {
    storeCuisines = jest.fn();
    sendCuisinesToStore = jest.fn();
    loadCuisines = jest.fn();
    getCuisines = jest.fn();
    availableCuisines = mock.availableCuisines;
    chosenCityID = 305;
    chosenCity = mock.chosenCity;

    wrapper = shallow(<Cuisine
        storeCuisines={storeCuisines}
        chosenCityID={chosenCityID}
        getCuisines={getCuisines}
        sendCuisinesToStore={sendCuisinesToStore}
        loadCuisines={loadCuisines}
        availableCuisines={availableCuisines}
        chosenCity={chosenCity}
      />,
      {
        disableLifecycleMethods: false
      });
  });

  it('Should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('it calls storeCuisines on componentDidMount when chosenCityID has value', async () => {

    expect(loadCuisines).toHaveBeenCalled();
  });

  // it.skip('should ', () => {
  //   // jest.spyOn - finds a method and just listening for it. 'method'
  //   const spy = jest.spyOn(wrapper.instance(), 'storeCuisines');
  //   await wrapper.instance().componentDidMount();
  //   expect(spy).toHaveBeenCalled();
  // });

});