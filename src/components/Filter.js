import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';

import Form from '../blocks/Form';

const mapStateToProps = state => ({
  colors: state.getIn(['cars', 'colors']),
  manufacturers: state.getIn(['cars', 'manufacturers'])
});

const StyledFilter = styled.div`
  grid-area: filter;
`;

class Filter extends Component {
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
    return (
      <StyledFilter>
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
      </StyledFilter>
    );
  }
}

Filter.propTypes = {
  colors: PropTypes.object.isRequired,
  manufacturers: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  carsActions
)(Filter);
