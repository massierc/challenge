import { carsConstants } from '../constants';
import { Map, List } from 'immutable';
import { utils } from '../../helpers';

const initialState = Map({
  cars: List(),
  current: Map(),
  totalPageCount: null,
  colors: List(),
  manufacturers: List(),
  params: Map({
    page: 1,
    color: null,
    manufacturer: null,
    sort: null
  })
});

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case carsConstants.FETCH_CARS:
      return state
        .set('cars', action.payload.get('cars'))
        .set('totalPageCount', action.payload.get('totalPageCount'));
    case carsConstants.FETCH_CAR:
      return state.set('current', action.payload.get('car'));
    case carsConstants.FETCH_COLORS:
      return state.set(
        'colors',
        action.payload.get('colors').map(col => ({
          value: col,
          label: utils.capitalize(col)
        }))
      );
    case carsConstants.FETCH_MANUFACTURERS:
      return state.set(
        'manufacturers',
        action.payload.get('manufacturers').map(man => ({
          ...man,
          value: man.get('name'),
          label: utils.capitalize(man.get('name'))
        }))
      );
    case carsConstants.SET_PARAMS:
      const { param, value } = action.payload;
      return state.setIn(['params', param], value);
    default:
      return state;
  }
};

export default carsReducer;
