import { combineReducers } from 'redux';
import { loadLocations } from './locationReducers';

const rootReducer = combineReducers(
  {
    locations: loadLocations
  }
);

export default rootReducer;