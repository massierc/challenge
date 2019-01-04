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

const toggleFavourite = car => {
  const fav = JSON.parse(localStorage.getItem('favourites'));
  if (!fav || fav.length === 0) {
    localStorage.setItem('favourites', JSON.stringify([car.id]));
  } else {
    const exists = fav.find(id => id === car.id);
    if (exists) {
      const filtered = JSON.stringify(fav.filter(id => id !== car.id));
      localStorage.setItem('favourites', filtered);
    } else {
      localStorage.setItem('favourites', JSON.stringify([...fav, car.id]));
    }
  }
};

const isFavourite = car => {
  const fav = localStorage.getItem('favourites');
  return fav && JSON.parse(fav).find(id => id === car.id);
};

const utils = {
  toUrl,
  safeUri,
  numberWithSeparator,
  capitalize,
  getMarginFromProp,
  toggleFavourite,
  isFavourite
};

export default utils;
