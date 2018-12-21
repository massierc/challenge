import { filtersConstants } from '../constants';
import { Map, List } from 'immutable';
import { formatHelpers } from '../../helpers';

const initialState = Map({ colors: List(), manufacturers: List() });

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case filtersConstants.FETCH_COLORS:
      return state.set(
        'colors',
        action.payload.get('colors').map(col => ({
          value: col,
          label: formatHelpers.capitalize(col)
        }))
      );
    case filtersConstants.FETCH_MANUFACTURERS:
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

export default filtersReducer;
