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
    friendlyId: `/${car.manufacturer}-${car.model}-${car.id}`,
    image: car.image,
    header: `${car.manufacturer} ${car.model}`,
    description: `Stock # ${car.id} - ${formatHelpers.numberWithSeparator(
      car.mileage
    )} ${car.unit.toUpperCase()} - ${car.fuel} - ${car.color}`
  };
};

const carsHelpers = { getCarDetailsForCard };

export default carsHelpers;
