import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';

import A from '../elements/A';
import Text from '../elements/Text';

const mapStateToProps = state => ({
  total: state.getIn(['cars', 'totalPageCount'])
});

const StyledPagination = styled.div`
  grid-area: pagination;
  display: flex;
  justify-content: center;
  margin: 0 -${props => props.theme.spacing.m};
  padding: ${props => props.theme.spacing.s};
`;

const StyledA = styled(A)`
  padding: 0 ${props => props.theme.spacing.m};
`;

const StyledText = styled(Text)`
  padding: 0 ${props => props.theme.spacing.m};
`;

class Pagination extends Component {
  state = {
    current: 1
  };

  handleClick = which => () => {
    const { current } = this.state;
    const { total, fetchCars } = this.props;

    switch (which) {
      case 'first': {
        const page = 1;
        fetchCars({ page: page });
        this.setState({ current: page });
        break;
      }
      case 'previous': {
        const page = current - 1;
        fetchCars({ page: page });
        this.setState({ current: page });
        break;
      }
      case 'next': {
        const page = current + 1;
        fetchCars({ page: page });
        this.setState({ current: page });
        break;
      }
      case 'last': {
        const page = total;
        fetchCars({ page: page });
        this.setState({ current: page });
        break;
      }
      default:
        break;
    }
  };

  render() {
    const { current } = this.state;
    const { total } = this.props;

    return (
      <StyledPagination>
        <StyledA as="span" onClick={this.handleClick('first')}>
          First
        </StyledA>
        <StyledA as="span" onClick={this.handleClick('previous')}>
          Previous
        </StyledA>
        <StyledText size={2}>
          Page {current} of {total}
        </StyledText>
        <StyledA as="span" onClick={this.handleClick('next')}>
          Next
        </StyledA>
        <StyledA as="span" onClick={this.handleClick('last')}>
          Last
        </StyledA>
      </StyledPagination>
    );
  }
}

export default connect(
  mapStateToProps,
  carsActions
)(Pagination);
