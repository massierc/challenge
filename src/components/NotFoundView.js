import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../elements/Logo';
import Title from '../elements/H1';
import Subtitle from '../elements/Subtitle';
import A from '../elements/A';

const StyledNotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${props => props.theme.layout.header});
`;

const StyledLogo = styled(Logo)`
  height: 34px;
  margin-bottom: ${props => props.theme.spacing.l};
`;

const StyledTitle = styled(Title)`
  padding-bottom: ${props => props.theme.spacing.l};
`;

const StyledSubtitle = styled(Subtitle)`
  padding-bottom: ${props => props.theme.spacing.l};
`;

const NotFoundView = () => {
  return (
    <StyledNotFoundView>
      <StyledLogo />
      <StyledTitle>404 - Not Found</StyledTitle>
      <StyledSubtitle>
        Sorry, the page you are looking for does not exist.
      </StyledSubtitle>
      <StyledSubtitle>
        You can always go back to the{' '}
        <A default to="/">
          homepage
        </A>
        .
      </StyledSubtitle>
    </StyledNotFoundView>
  );
};

NotFoundView.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default NotFoundView;
