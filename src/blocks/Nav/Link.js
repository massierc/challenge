import styled from 'styled-components';
import A from '../../elements/A';

const Link = styled(A)`
  grid-area: ${props => `link${props.linkId}`};
  justify-self: center;
  align-self: center;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.font.size.p1};
  padding-left: ${props => props.theme.spacing.l};
`;

export default Link;
