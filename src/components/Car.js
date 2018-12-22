import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';

const mapStateToProps = state => ({
  car: state.getIn(['cars', 'current'])
});

class Car extends Component {
  componentDidMount() {
    const id = this.props.match.params.carId.match(/\d+$/)[0];
    this.props.fetchCar(id);
  }

  render() {
    return <div>test</div>;
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(Car);
