import { carsConstants } from '../constants';
import { carsService } from '../services';

const fetchCars = params => dispatch => {
  dispatch(fetchCarsStarted());
  carsService
    .fetchCars(params)
    .then(cars => dispatch(fetchCarsSuccess(cars)))
    .finally(() => {
      if (params) {
        params.forEach((v, k) =>
          dispatch({
            type: carsConstants.SET_PARAMS,
            payload: { param: k, value: v }
          })
        );
      }
    })
    .catch(err => dispatch(fetchCarsFailure(err)));
};

const fetchCar = id => dispatch => {
  dispatch(fetchCarStarted());
  carsService
    .fetchCar(id)
    .then(car => dispatch(fetchCarSuccess(car)))
    .catch(err => dispatch(fetchCarFailure(err)));
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

const fetchCarsStarted = () => ({ type: carsConstants.FETCH_CARS_STARTED });

const fetchCarsSuccess = cars => ({
  type: carsConstants.FETCH_CARS_SUCCESS,
  payload: cars
});

const fetchCarsFailure = err => ({
  type: carsConstants.FETCH_CARS_FAILURE,
  payload: err
});

const fetchCarStarted = () => ({ type: carsConstants.FETCH_CAR_STARTED });

const fetchCarSuccess = cars => ({
  type: carsConstants.FETCH_CAR_SUCCESS,
  payload: cars
});

const fetchCarFailure = err => ({
  type: carsConstants.FETCH_CAR_FAILURE,
  payload: err
});

const carsActions = {
  fetchCars,
  fetchCar,
  fetchColors,
  fetchManufacturers
};

export default carsActions;
