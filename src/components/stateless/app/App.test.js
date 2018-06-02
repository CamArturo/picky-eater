import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


it('Should match the snapshot', () => {
  const appComponent = shallow(<App />);

  expect(appComponent).toMatchSnapshot();
});
