const numberWithSeparator = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const formatHelpers = { numberWithSeparator };

export default formatHelpers;
