const toUrl = ({ id, manufacturer, model }) => {
  const safeManufacturer = safeUri(manufacturer);
  const safeModel = safeUri(model);
  return `${safeManufacturer}-${safeModel}-${id}`;
};

const safeUri = str =>
  encodeURIComponent(
    str
      .toLowerCase()
      .split(' ')
      .join('-')
  );

const numberWithSeparator = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const getMarginFromProp = props => () => {
  if (props.spacing) {
    const arr = props.spacing.map(el => {
      switch (el) {
        case 1:
          return props.theme.spacing.s;
        case 2:
          return props.theme.spacing.m;
        case 3:
          return props.theme.spacing.l;
        default:
          return '0';
      }
    });
    return arr.join(' ');
  } else {
    return '0';
  }
};

const utils = {
  toUrl,
  safeUri,
  numberWithSeparator,
  capitalize,
  getMarginFromProp
};

export default utils;
