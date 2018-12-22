import { fromJS } from 'immutable';

const normalizeData = rawData => rawData.json().then(data => fromJS(data));

const addParams = params => {
  const esc = encodeURIComponent;
  const filtered = params.filter(p => p);
  const query = filtered.map((v, k) => esc(k) + '=' + v).join('&');
  return `?${query}`;
};

const queryHelpers = { normalizeData, addParams };

export default queryHelpers;
