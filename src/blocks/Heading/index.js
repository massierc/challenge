import styled from 'styled-components';

const Heading = styled.div`
  grid-area: heading;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 35px 30px;
  grid-template-areas:
    'title . sort'
    'subtitle . sort';
  padding-bottom: ${props => props.theme.spacing.l};
`;

export default Heading;
