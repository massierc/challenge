import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtersActions, carsActions } from '../store/actions';

import Form from '../blocks/Form';

const mapStateToProps = state => ({
  colors: state.getIn(['filters', 'colors']),
  manufacturers: state.getIn(['filters', 'manufacturers'])
});

class Cars extends Component {
  state = {
    color: null,
    manufacturer: null
  };

  componentWillMount() {
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }

  handleChange = which => {
    return value => {
      let newVal = {};
      newVal[which] = value;
      this.setState(newVal);
    };
  };

  handleSubmit = event => {
    const { color, manufacturer } = this.state;
    this.props.fetchCars({
      color: color ? color.value : '',
      manufacturer: manufacturer ? manufacturer.value : ''
    });
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Select
            options={this.props.colors}
            value={this.state.color}
            onChange={this.handleChange('color')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Manufacturer</Form.Label>
          <Form.Select
            options={this.props.manufacturers}
            value={this.state.manufacturer}
            onChange={this.handleChange('manufacturer')}
          />
        </Form.Group>
        <Form.Button value="Filter" />
      </Form>
    );
  }
}

Cars.propTypes = {
  colors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { ...filtersActions, ...carsActions }
)(Cars);
