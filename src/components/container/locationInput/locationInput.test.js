import React from 'react';
import locationInput from './LocationInput';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<locationInput />);

  expect(appComponent).toMatchSnapshot();
});
