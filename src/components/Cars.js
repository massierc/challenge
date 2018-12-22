import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

import Card from '../blocks/Card';

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

  render() {
    const { cars, loading } = this.props;

    if (loading) {
      return (
        <StyledCars>
          {[...Array(10)].map((_el, i) => {
            return (
              <Card
                key={`card-loading-${i}`}
                spacing={i === 10 - 1 ? null : [0, 0, 2, 0]}
              >
                <Card.Placeholder
                  width="100%"
                  height="100%"
                  gridArea="image"
                  margin="0 0 0 10px"
                />
                <Card.Placeholder
                  width="50%"
                  height="28px"
                  gridArea="header"
                  margin="0 0 5px 10px"
                />
                <Card.Placeholder
                  width="50%"
                  height="14px"
                  gridArea="description"
                  margin="0 0 12px 10px"
                />
                <Card.Placeholder
                  width="15%"
                  height="12px"
                  gridArea="link"
                  margin="0 0 0 10px"
                />
              </Card>
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
                <Card.Link to={car.url}>View Details</Card.Link>
              </Card>
            );
          })}
        </StyledCars>
      );
    }
  }
}

Cars.propTypes = {
  cars: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  carsActions
)(Cars);
