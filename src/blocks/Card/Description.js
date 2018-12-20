import styled from 'styled-components';
import P from '../../elements/P';

const Description = styled(P)`
  grid-area: description;
  padding-bottom: ${props => props.theme.spacing.m};
`;

export default Description;
