import { combineReducers } from 'redux';
import { locations } from './locationReducers';
import { chosenCity } from './chosenCityReducer';

const rootReducer = combineReducers(
  {
    locations,
    chosenCity
  }
);

export default rootReducer;