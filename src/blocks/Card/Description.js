import styled from 'styled-components';
import Span from '../../elements/Span';

const Description = styled(Span)`
  grid-area: description;
  padding-bottom: ${props => props.theme.spacing.m};
`;

export default Description;
