import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormGroup from '../elements/FormGroup';
import Label from '../elements/Label';
import Select from '../elements/Select';

const mapStateToProps = state => ({
  colors: state.getIn(['filters', 'colors']),
  manufacturers: state.getIn(['filters', 'manufacturers'])
});

class Cars extends Component {
  state = {
    sort: { value: 'None', label: 'None' }
  };

  handleChange = value => {
    console.log(value);
    this.setState({ sort: value });
  };

  render() {
    return (
      <FormGroup>
        <Label>Sort by</Label>
        <Select
          options={[
            { value: 'None', label: 'None' },
            { value: 'asc', label: 'Mileage - Ascending' },
            { value: 'desc', label: 'Mileage - Descending' }
          ]}
          value={this.state.sort}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default connect(
  mapStateToProps
  // sortActions
)(Cars);
