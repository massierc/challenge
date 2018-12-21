import { filtersConstants } from '../constants';
import { Map, List } from 'immutable';

const initialState = Map({ colors: List(), manufacturers: List() });

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case filtersConstants.FETCH_COLORS:
      return state.set('colors', action.payload.get('colors'));
    case filtersConstants.FETCH_MANUFACTURERS:
      return state.set('manufacturers', action.payload.get('manufacturers'));
    default:
      return state;
  }
};

export default filtersReducer;
