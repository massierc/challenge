import { fromJS } from 'immutable';

const normalizeData = rawData => rawData.json().then(data => fromJS(data));

const addParams = params => {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
  return `?${query}`;
};

const queryHelpers = { normalizeData, addParams };

export default queryHelpers;
