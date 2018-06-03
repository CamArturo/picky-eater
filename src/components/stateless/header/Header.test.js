import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Header />);

  expect(appComponent).toMatchSnapshot();
});
