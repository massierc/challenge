import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { filtersActions } from '../store/actions';
import Form from '../blocks/Form';

const mapStateToProps = state => ({
  colors: state.getIn(['filters', 'colors']),
  manufacturers: state.getIn(['filters', 'manufacturers'])
});

class Cars extends Component {
  componentWillMount() {
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Color</Form.Label>
          <Form.Select />
        </Form.Group>
        <Form.Group>
          <Form.Label>Manufacturer</Form.Label>
          <Form.Select />
        </Form.Group>
        <Form.Button value="Filter" />
      </Form>
    );
  }
}

export default connect(
  mapStateToProps,
  filtersActions
)(Cars);
