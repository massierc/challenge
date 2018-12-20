import { fromJS } from 'immutable';

const fetchCars = () => {
  return fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/cars`).then(
    normalizeData
  );
};

const normalizeData = rawData => rawData.json().then(data => fromJS(data));

const carsService = { fetchCars };

export default carsService;
