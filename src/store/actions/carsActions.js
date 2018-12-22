import { carsConstants } from '../constants';
import { carsService } from '../services';

const fetchCars = params => dispatch => {
  carsService
    .fetchCars(params)
    .then(cars => dispatch({ type: carsConstants.FETCH_CARS, payload: cars }))
    .catch(err => console.log(err));
};

const fetchColors = () => dispatch => {
  carsService
    .fetchColors()
    .then(colors =>
      dispatch({ type: carsConstants.FETCH_COLORS, payload: colors })
    )
    .catch(err => console.log(err));
};

const fetchManufacturers = () => dispatch => {
  carsService
    .fetchManufacturers()
    .then(manufacturers =>
      dispatch({
        type: carsConstants.FETCH_MANUFACTURERS,
        payload: manufacturers
      })
    )
    .catch(err => console.log(err));
};

const carsActions = {
  fetchCars,
  fetchColors,
  fetchManufacturers
};

export default carsActions;
