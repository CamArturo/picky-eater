import React from 'react';
import Location from './Location';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Location />);

  expect(appComponent).toMatchSnapshot();
});
