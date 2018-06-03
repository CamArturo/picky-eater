import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';


it('Should match the snapshot', () => {
  const appComponent = shallow(<Loading />);

  expect(appComponent).toMatchSnapshot();
});