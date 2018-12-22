import React, { Fragment } from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import Cars from './Cars';

import Sort from './Sort';
import Heading from '../blocks/Heading';
import Title from '../elements/H2';
import Subtitle from '../elements/Subtitle';

const Index = styled.div`
  display: grid;
`;

const IndexPage = () => {
  return (
    <Index>
      <Heading>
        <Title>Available cars</Title>
        <Subtitle>Showing X of X results</Subtitle>
        <Sort />
      </Heading>
      <Filter />
      <Cars />
    </Index>
  );
};

export default IndexPage;
