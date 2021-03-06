import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

import Card from '../blocks/Card';
import CardLoading from '../blocks/CardLoading';

const mapStateToProps = state => ({
  cars: state.getIn(['cars', 'cars']),
  params: state.getIn(['cars', 'params']),
  loading: state.getIn(['cars', 'loading'])
});

const StyledCars = styled.div`
  grid-area: cars;
  padding-bottom: ${props => props.theme.spacing.l};
`;

class Cars extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.params);
  }

  handleClick = car => () => {
    this.props.fetchCar(car.id);
    this.props.history.push(`/cars${car.url}`);
  };

  render() {
    const { cars, loading } = this.props;

    if (loading) {
      return (
        <StyledCars>
          {[...Array(10)].map((_el, i) => {
            return (
              <CardLoading
                key={`card-loading-${i}`}
                spacing={i === 10 - 1 ? null : [0, 0, 2, 0]}
              />
            );
          })}
        </StyledCars>
      );
    } else {
      return (
        <StyledCars>
          {cars.map((obj, i) => {
            const car = viewHelpers.parseCar(obj);
            return (
              <Card
                key={car.id}
                spacing={i === cars.size - 1 ? null : [0, 0, 2, 0]}
              >
                <Card.Image src={car.image} />
                <Card.Header>{car.header}</Card.Header>
                <Card.Description>{car.description}</Card.Description>
                <Card.Link as="span" onClick={this.handleClick(car)}>
                  View Details
                </Card.Link>
              </Card>
            );
          })}
        </StyledCars>
      );
    }
  }
}

Cars.propTypes = {
  cars: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCars: PropTypes.func.isRequired,
  fetchCar: PropTypes.func.isRequired,
  fetchColors: PropTypes.func.isRequired,
  fetchManufacturers: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    carsActions
  ),
  withRouter
)(Cars);
