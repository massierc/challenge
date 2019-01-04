import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

import Car from '../blocks/Car';

const mapStateToProps = state => ({
  car: state.getIn(['cars', 'current']),
  loading: state.getIn(['cars', 'loading'])
});

class ShowPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.carId.match(/\d+$/)[0];
    this.props.fetchCar(id);
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <Car>
          <Car.Banner />
        </Car>
      );
    } else {
      const car = viewHelpers.parseCar(this.props.car);
      return (
        <Car>
          <Car.Banner src={car.image} />
          <Car.Content car={car} />
        </Car>
      );
    }
  }
}

ShowPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCars: PropTypes.func.isRequired,
  fetchCar: PropTypes.func.isRequired,
  fetchColors: PropTypes.func.isRequired,
  fetchManufacturers: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  carsActions
)(ShowPage);
