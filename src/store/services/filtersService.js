import { fromJS } from 'immutable';

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

const filtersService = { fetchColors, fetchManufacturers };

export default filtersService;
