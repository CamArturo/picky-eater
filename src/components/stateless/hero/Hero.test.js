import React from 'react';
import { Hero } from './Hero';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Hero />);

  expect(appComponent).toMatchSnapshot();
});
