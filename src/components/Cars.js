import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../blocks/Card';
import { carsActions } from '../store/actions';

const mapStateToProps = state => ({
  cars: state.getIn(['cars', 'list'])
});

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars } = this.props;

    return (
      <Fragment>
        {cars.map(car => {
          return <div>{car.get('manufacturerName')}</div>;
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
