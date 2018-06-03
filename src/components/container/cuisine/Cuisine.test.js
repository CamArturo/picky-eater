import React from 'react';
import Cuisine from './Cuisine';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Cuisine />);

  expect(appComponent).toMatchSnapshot();
});
