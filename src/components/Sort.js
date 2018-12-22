import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';

import FormGroup from '../elements/FormGroup';
import Label from '../elements/Label';
import Select from '../elements/Select';

const mapStateToProps = state => ({
  colors: state.getIn(['cars', 'colors']),
  manufacturers: state.getIn(['cars', 'manufacturers'])
});

class Cars extends Component {
  state = {
    sort: { value: 'None', label: 'None' }
  };

  handleChange = value => {
    this.setState({ sort: value }, () => {
      const { sort } = this.state;
      this.props.fetchCars({ sort: sort ? sort.value : '' });
    });
  };

  render() {
    return (
      <FormGroup>
        <Label>Sort by</Label>
        <Select
          options={[
            { value: 'None', label: 'None' },
            { value: 'asc', label: 'Mileage - Ascending' },
            { value: 'des', label: 'Mileage - Descending' }
          ]}
          value={this.state.sort}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(Cars);
