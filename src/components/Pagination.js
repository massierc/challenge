import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';
import { viewHelpers } from '../helpers';

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
    const { total } = this.props;
    const { isWithinPageLimits, goTo } = this;
    const { currentPage } = viewHelpers;

    if (isWithinPageLimits(which, current, total))
      goTo(currentPage(which, current, total));
  };

  isWithinPageLimits = (which, current, total) =>
    !(
      (which === 'previous' && current === 1) ||
      (which === 'next' && current === total)
    );

  goTo = page => {
    this.props.fetchCars({ page: page });
    this.setState({ current: page });
  };

  render() {
    const { current } = this.state;
    const { total } = this.props;
    const { handleClick } = this;

    return (
      <StyledPagination>
        <StyledA as="span" onClick={handleClick('first')}>
          First
        </StyledA>
        <StyledA as="span" onClick={handleClick('previous')}>
          Previous
        </StyledA>
        <StyledText size={2}>
          Page {current} of {total}
        </StyledText>
        <StyledA as="span" onClick={handleClick('next')}>
          Next
        </StyledA>
        <StyledA as="span" onClick={handleClick('last')}>
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
