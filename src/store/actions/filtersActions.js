import { filtersConstants } from '../constants';
import { filtersService } from '../services';

const fetchColors = () => dispatch => {
  filtersService
    .fetchColors()
    .then(colors =>
      dispatch({ type: filtersConstants.FETCH_COLORS, payload: colors })
    )
    .catch(err => console.log(err));
};

const fetchManufacturers = () => dispatch => {
  filtersService
    .fetchManufacturers()
    .then(manufacturers =>
      dispatch({
        type: filtersConstants.FETCH_MANUFACTURERS,
        payload: manufacturers
      })
    )
    .catch(err => console.log(err));
};

const filtersActions = {
  fetchColors,
  fetchManufacturers
};

export default filtersActions;
