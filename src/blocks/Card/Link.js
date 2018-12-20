import React from 'react';
import styled from 'styled-components';
import A from '../../elements/A';

const GridCell = styled.div`
  grid-area: link;
  display: flex;
  align-items: end;
`;

const Link = ({ to, children }) => {
  return (
    <GridCell>
      <A to={to}>{children}</A>
    </GridCell>
  );
};

export default Link;
