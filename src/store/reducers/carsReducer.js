import { carsConstants } from '../constants';
import { Map, List } from 'immutable';
import { formatHelpers } from '../../helpers';

const initialState = Map({
  cars: List(),
  totalPageCount: null,
  colors: List(),
  manufacturers: List()
});

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.FETCH_CARS:
      return state
        .set('cars', action.payload.get('cars'))
        .set('totalPageCount', action.payload.get('totalPageCount'));
    case carsConstants.FETCH_COLORS:
      return state.set(
        'colors',
        action.payload.get('colors').map(col => ({
          value: col,
          label: formatHelpers.capitalize(col)
        }))
      );
    case carsConstants.FETCH_MANUFACTURERS:
      return state.set(
        'manufacturers',
        action.payload.get('manufacturers').map(man => ({
          ...man,
          value: man.get('name'),
          label: formatHelpers.capitalize(man.get('name'))
        }))
      );
    default:
      return state;
  }
};

export default carsReducer;
