import { combineReducers } from 'redux-immutable';
import carsReducer from './carsReducer';

export default combineReducers({
  cars: carsReducer
});
