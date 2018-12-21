import { combineReducers } from 'redux-immutable';
import carsReducer from './carsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  cars: carsReducer,
  filters: filtersReducer
});
