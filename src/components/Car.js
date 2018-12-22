import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

import Heading from '../blocks/Heading';
import Title from '../elements/H1';
import Subtitle from '../elements/Subtitle';
import Img from '../elements/Img';

const mapStateToProps = state => ({
  car: state.getIn(['cars', 'current']),
  loading: state.getIn(['cars', 'loading'])
});

const Banner = styled(Img)`
  height: 300px;
  background-size: 150px;
  background-color: ${props => props.theme.colors.grey};
`;

class Car extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const id = this.props.match.params.carId.match(/\d+$/)[0];
    this.props.fetchCar(id);
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    } else {
      const car = viewHelpers.parseCar(this.props.car);
      console.log(car);
      return (
        <div>
          <Banner src={car.image} />
          <Heading>
            <Title>{car.header}</Title>
            <Subtitle>{car.description}</Subtitle>
          </Heading>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(Car);
