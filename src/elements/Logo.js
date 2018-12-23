import React from 'react';
import styled from 'styled-components';

import Img from './Img';

const StyledLogo = styled(Img)`
  grid-area: logo;
`;

const Logo = props => {
  return <StyledLogo {...props} src={`${process.env.PUBLIC_URL}/logo.png`} />;
};

export default Logo;
