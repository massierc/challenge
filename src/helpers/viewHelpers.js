import utils from './utils';

const parseCar = obj => {
  const car = {
    id: obj.get('stockNumber'),
    image: obj.get('pictureUrl'),
    manufacturer: obj.get('manufacturerName'),
    model: obj.get('modelName'),
    mileage: obj.getIn(['mileage', 'number']),
    unit: obj.getIn(['mileage', 'unit']),
    fuel: obj.get('fuelType'),
    color: obj.get('color')
  };

  return {
    id: car.id,
    url: `/${utils.toUrl(car)}`,
    image: car.image,
    header: `${car.manufacturer} ${car.model}`,
    description: `Stock # ${car.id} - ${utils.numberWithSeparator(
      car.mileage
    )} ${car.unit.toUpperCase()} - ${car.fuel} - ${car.color}`
  };
};

const indexSubtitle = state => {
  const current = state.getIn(['cars', 'cars']).size;
  const total = state.getIn(['cars', 'totalPageCount']) * current;
  return `Showing ${current} of ${total} results`;
};

const viewHelpers = { indexSubtitle, parseCar };

export default viewHelpers;
