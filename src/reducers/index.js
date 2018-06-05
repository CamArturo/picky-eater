import { combineReducers } from 'redux';
import { locations } from './locationReducers';
import { chosenCity } from './chosenCityReducer';
import { availableCuisines} from './cuisineReducer';
import { restaurants } from './restaurantsReducer';

const rootReducer = combineReducers(
  {
    locations,
    chosenCity,
    availableCuisines,
    restaurants
  }
);

export default rootReducer;