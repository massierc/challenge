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
  car: state.getIn(['cars', 'current'])
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
    const { loading } = this.state;
    const { car } = this.props;

    if (loading) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <Banner src={car.image} />
          <Heading>
            <Title>
              {car.manufacturer} {car.model}
            </Title>
            <Subtitle>test</Subtitle>
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
