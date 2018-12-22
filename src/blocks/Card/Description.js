import styled from 'styled-components';
import Text from '../../elements/Text';

const Description = styled(Text)`
  grid-area: description;
  padding-bottom: ${props => props.theme.spacing.m};
`;

export default Description;
