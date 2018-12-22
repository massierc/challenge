import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';
import { carsHelpers } from '../helpers';

import Card from '../blocks/Card';

const mapStateToProps = state => ({
  cars: state.getIn(['cars', 'cars']),
  params: state.getIn(['cars', 'params'])
});

const StyledCars = styled.div`
  grid-area: cars;
  padding-bottom: ${props => props.theme.spacing.l};
`;

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.params);
  }

  render() {
    const { cars } = this.props;

    return (
      <StyledCars>
        {cars.map((obj, i) => {
          const car = carsHelpers.getCarDetailsForCard(obj);
          return (
            <Card
              key={car.id}
              spacing={i === cars.size - 1 ? null : [0, 0, 2, 0]}
            >
              <Card.Image src={car.image} />
              <Card.Header>{car.header}</Card.Header>
              <Card.Description>{car.description}</Card.Description>
              <Card.Link to={car.friendlyId}>View Details</Card.Link>
            </Card>
          );
        })}
      </StyledCars>
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
