import { queryHelpers } from '../../helpers';
import { fromJS } from 'immutable';

const fetchCars = params => {
  console.log(params ? queryHelpers.addParams(params) : '');
  return fetch(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/cars${
      params ? queryHelpers.addParams(params) : ''
    }`,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  ).then(queryHelpers.normalizeData);
};

const fetchColors = () => {
  return fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/colors`, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }).then(normalizeData);
};

const fetchManufacturers = () => {
  return fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/manufacturers`, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }).then(normalizeData);
};

const normalizeData = rawData => rawData.json().then(data => fromJS(data));

const carsService = { fetchCars, fetchColors, fetchManufacturers };

export default carsService;
