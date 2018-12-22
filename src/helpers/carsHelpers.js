import formatHelpers from './formatHelpers';

const getCarDetailsForCard = obj => {
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
    url: `/${toUrl(car)}`,
    image: car.image,
    header: `${car.manufacturer} ${car.model}`,
    description: `Stock # ${car.id} - ${formatHelpers.numberWithSeparator(
      car.mileage
    )} ${car.unit.toUpperCase()} - ${car.fuel} - ${car.color}`
  };
};

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

const carsHelpers = { getCarDetailsForCard };

export default carsHelpers;
