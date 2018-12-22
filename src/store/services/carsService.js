import { queryHelpers } from '../../helpers';
import { fromJS } from 'immutable';

const fetchCars = params => {
  return fetch(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/cars${
      params ? queryHelpers.addParams(params) : ''
    }`,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  ).then(normalizeData);
};

const fetchCar = id => {
  return fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/cars/${id}`, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }).then(normalizeData);
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

const { normalizeData } = queryHelpers;

const carsService = { fetchCars, fetchCar, fetchColors, fetchManufacturers };

export default carsService;
