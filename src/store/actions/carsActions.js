import { carsConstants } from '../constants';
import { carsService } from '../services';

const fetchCars = () => dispatch => {
  carsService
    .fetchCars()
    .then(cars => dispatch({ type: carsConstants.FETCH_CARS, payload: cars }))
    .catch(err => console.log(err));
};

const carsActions = {
  fetchCars
};

export default carsActions;
