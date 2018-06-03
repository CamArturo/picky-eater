import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Home />);

  expect(appComponent).toMatchSnapshot();
});
