import React, { Component } from 'react';
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
    if (this.state.favourite) {
      return (
        <Box>
          <Box.Text size={1}>
            This car is in your collection of favourite items.
          </Box.Text>
          <Box.Button onClick={this.handleClick}>Remove</Box.Button>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box.Text size={1}>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </Box.Text>
          <Box.Button onClick={this.handleClick}>Save</Box.Button>
        </Box>
      );
    }
  }
}

export default Favourite;
