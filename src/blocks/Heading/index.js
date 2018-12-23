import styled from 'styled-components';

const Heading = styled.div`
  grid-area: heading;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'title . sort'
    'subtitle . sort';
  row-gap: ${props => props.spacingBetween || props.theme.spacing.m};
  padding-bottom: ${props => props.spacingBottom || props.theme.spacing.l};
`;

export default Heading;
