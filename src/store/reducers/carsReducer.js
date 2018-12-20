import { carsConstants } from '../constants';
import { Map, List } from 'immutable';

const initialState = Map({ cars: List() });

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.FETCH_CARS:
      return state.set('cars', action.payload);
    default:
      return state;
  }
};

export default carsReducer;
