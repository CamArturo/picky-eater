import React from 'react';
import { Cuisine } from './Cuisine';
import { shallow, mount } from 'enzyme';
import * as mock from '../../../mockData'
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
      chosenCityID={chosenCityID}
      storeCuisines={storeCuisines}
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

  it.skip('it calls storeCuisines on compentDidMount when chosenCidtyID has value', async () => {
    // const appComponent = shallow(<Cuisine chosenCityID={chosenCityID} storeCuisines={storeCuisines} />);

    // console.log(await wrapper.instance().storeCuisines(305))
    // storeCuisines();
    // wrapper.instance().componentDidMount();
    expect(getCuisines).toHaveBeenCalled()

    // expect fetch method called with correct params

    // expect(storeCuisines).toHaveBeenCalled();
  });

  // it.skip('should ', () => {
  //   // jest.spyOn - finds a method and just listening for it. 'method'
  //   const spy = jest.spyOn(wrapper.instance(), 'storeCuisines');
  //   await wrapper.instance().componentDidMount();
  //   expect(spy).toHaveBeenCalled();
  // });

});