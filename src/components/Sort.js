import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { carsActions } from '../store/actions';

import FormGroup from '../elements/FormGroup';
import Label from '../elements/Label';
import Select from '../elements/Select';

const mapStateToProps = state => ({
  params: state.getIn(['cars', 'params'])
});

const StyledSort = styled.div`
  grid-area: sort;
`;

class Cars extends Component {
  state = {
    sort: { value: 'None', label: 'None' }
  };

  handleChange = value => {
    this.setState({ sort: value }, () => {
      const { sort } = this.state;
      const { params } = this.props;
      if (!sort) return;
      this.props.fetchCars(params.set('sort', sort.value));
    });
  };

  render() {
    return (
      <StyledSort>
        <FormGroup spacing="0">
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
      </StyledSort>
    );
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(Cars);
