import { fromJS } from 'immutable';

const fetchCars = () => {
  return fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/cars`, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }).then(normalizeData);
};

const normalizeData = rawData => rawData.json().then(data => fromJS(data));

const carsService = { fetchCars };

export default carsService;
