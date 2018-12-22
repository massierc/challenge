const indexSubtitle = state => {
  const current = state.getIn(['cars', 'cars']).size;
  const total = state.getIn(['cars', 'totalPageCount']) * current;
  return `Showing ${current} of ${total} results`;
};

const currentPage = (which, current, total) =>
  which === 'previous'
    ? current - 1
    : which === 'next'
    ? current + 1
    : which === 'last'
    ? total
    : 1;

const viewHelpers = { indexSubtitle, currentPage };

export default viewHelpers;
