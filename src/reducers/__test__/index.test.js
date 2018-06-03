import React from 'react';
import rootReducer from '../index';

it('Should match the snapshot', () => {

  expect(rootReducer).toMatchSnapshot();
});
