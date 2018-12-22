import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { viewHelpers } from '../helpers';

import Filter from './Filter';
import Cars from './Cars';
import Sort from './Sort';
import Pagination from './Pagination';
import Heading from '../blocks/Heading';
import Title from '../elements/H2';
import Subtitle from '../elements/Subtitle';

const Index = styled.div`
  display: grid;
  grid-template-columns: 30% ${props => props.theme.spacing.l} calc(70% - 1em);
  grid-template-row: 80px 100px auto;
  grid-template-areas:
    'filter . heading'
    'filter . cars'
    '. . cars'
    '. . pagination';
  padding: ${props => props.theme.spacing.l} 4em;
`;

const mapStateToProps = state => ({
  subtitle: viewHelpers.indexSubtitle(state)
});

const IndexView = props => {
  return (
    <Index>
      <Heading>
        <Title>Available cars</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Sort />
      </Heading>
      <Filter />
      <Cars />
      <Pagination />
    </Index>
  );
};

export default connect(mapStateToProps)(IndexView);
