import { queryHelpers } from '../../helpers';

const fetchCars = params => {
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

const carsService = { fetchCars };

export default carsService;
