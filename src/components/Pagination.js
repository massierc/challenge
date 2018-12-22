import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { carsActions } from '../store/actions';

import A from '../elements/A';
import Text from '../elements/Text';

const mapStateToProps = state => ({
  cars: state.getIn(['cars', 'cars'])
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

const Pagination = () => {
  return (
    <StyledPagination>
      <StyledA to="#">First</StyledA>
      <StyledA to="#">Previous</StyledA>
      <StyledText size={2}>Page X of X</StyledText>
      <StyledA to="#">Next</StyledA>
      <StyledA to="#">Last</StyledA>
    </StyledPagination>
  );
};

export default connect(
  mapStateToProps,
  carsActions
)(Pagination);
