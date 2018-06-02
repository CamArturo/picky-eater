import { combineReducers } from 'redux';
import { locations } from './locationReducers';
import { chosenCity } from './chosenCityReducer';
import { availableCuisines} from './cuisineReducer';

const rootReducer = combineReducers(
  {
    locations,
    chosenCity,
    availableCuisines
  }
);

export default rootReducer;