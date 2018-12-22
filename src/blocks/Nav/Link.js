import styled from 'styled-components';
import A from '../../elements/A';

const Link = styled(A)`
  grid-area: ${props => props.id};
  justify-self: center;
  align-self: center;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.font.size.t1};
  padding-left: ${props => props.theme.spacing.l};
`;

export default Link;
