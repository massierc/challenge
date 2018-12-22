import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';

import A from '../elements/A';
import Text from '../elements/Text';

const mapStateToProps = state => ({
  total: state.getIn(['cars', 'totalPageCount']),
  params: state.getIn(['cars', 'params'])
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
  handleClick = which => () => {
    const { total, params } = this.props;
    const current = params.get('page');
    const page =
      which === 'previous'
        ? current - 1
        : which === 'next'
        ? current + 1
        : which === 'last'
        ? total
        : 1;

    if (this.isWithinPageLimits(which, current, total)) {
      this.props.fetchCars(this.props.params.set('page', page));
    }
  };

  isWithinPageLimits = (which, current, total) =>
    !(
      (which === 'previous' && current === 1) ||
      (which === 'next' && current === total)
    );

  render() {
    const { total, params } = this.props;
    const current = params.get('page');
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
