import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';
import { carsHelpers } from '../helpers';

import Card from '../blocks/Card';

const mapStateToProps = state => ({
  cars: state.getIn(['cars', 'cars'])
});

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars } = this.props;

    return (
      <Fragment>
        {cars.map(obj => {
          const car = carsHelpers.getCarDetailsForCard(obj);
          return (
            <Card key={car.id}>
              <Card.Image src={car.image} />
              <Card.Header>{car.header}</Card.Header>
              <Card.Description>{car.description}</Card.Description>
              <Card.Link to={car.friendlyId}>View Details</Card.Link>
            </Card>
          );
        })}
      </Fragment>
    );
  }
}

Cars.propTypes = {
  cars: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  carsActions
)(Cars);
