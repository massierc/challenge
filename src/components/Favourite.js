import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { utils } from '../helpers';

import Box from '../blocks/Box';

class Favourite extends Component {
  state = {
    favourite: false
  };

  componentDidMount() {
    this.setState({ favourite: utils.isFavourite(this.props.car) });
  }

  handleClick = () => {
    utils.toggleFavourite(this.props.car);
    this.setState({ favourite: utils.isFavourite(this.props.car) });
  };

  render() {
    return (
      <Box>
        <Box.Text size={1}>
          {this.state.favourite
            ? 'This car is in your collection of favourite items.'
            : 'If you like this car, click the button and save it in your collection of favourite items.'}
        </Box.Text>
        <Box.Button onClick={this.handleClick}>
          {this.state.favourite ? 'Remove' : 'Save'}
        </Box.Button>
      </Box>
    );
  }
}

Favourite.propTypes = {
  car: PropTypes.object.isRequired
};

export default Favourite;
