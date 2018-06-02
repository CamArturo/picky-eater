import { combineReducers } from 'redux';
import { locations } from './locationReducers';
import { chosenCity } from './chosenCityReducer';
import { cuisines} from './cuisineReducer';

const rootReducer = combineReducers(
  {
    locations,
    chosenCity,
    cuisines
  }
);

export default rootReducer;