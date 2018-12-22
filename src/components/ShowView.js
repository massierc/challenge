import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

import Heading from '../blocks/Heading';
import Wrapper from '../blocks/Wrapper';
import Box from '../blocks/Box';
import Title from '../elements/H1';
import Subtitle from '../elements/Subtitle';
import Text from '../elements/Text';
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

class ShowPage extends Component {
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
      console.log(this.props.car.toJS());
      return (
        <Fragment>
          <Banner src={car.image} />
          <Wrapper carView>
            <Wrapper.Container>
              <Heading>
                <Title>{car.header}</Title>
                <Subtitle>{car.description}</Subtitle>
              </Heading>
              <Text size={1}>
                This car is currently available and can be delivered as soon as
                tomorrow morning. Please be aware that delivery times shown in
                this page are not definitive and may change due to bad weather
                conditions.
              </Text>
              <Box>
                <Box.Text size={1}>
                  If you like this car, click the button and save it in your
                  collection of favourite items.
                </Box.Text>
                <Box.Button>Save</Box.Button>
              </Box>
            </Wrapper.Container>
          </Wrapper>
        </Fragment>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(ShowPage);
