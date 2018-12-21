const numberWithSeparator = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const formatHelpers = { numberWithSeparator, capitalize };

export default formatHelpers;
