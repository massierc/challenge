import { carsConstants } from '../constants';
import { Map, List } from 'immutable';

const initialState = Map({ list: List(), totalPageCount: null });

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.FETCH_CARS:
      return state
        .set('list', action.payload.get('cars'))
        .set('totalPageCount', action.payload.get('totalPageCount'));
    default:
      return state;
  }
};

export default carsReducer;
