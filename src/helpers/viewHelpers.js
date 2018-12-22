const indexSubtitle = state => {
  const current = state.getIn(['cars', 'cars']).size;
  const total = state.getIn(['cars', 'totalPageCount']) * current;
  return `Showing ${current} of ${total} results`;
};

const viewHelpers = { indexSubtitle };

export default viewHelpers;
