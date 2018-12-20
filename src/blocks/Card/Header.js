import styled from 'styled-components';
import H2 from '../../elements/H2';

const Header = styled(H2)`
  grid-area: header;
  padding-bottom: ${props => props.theme.spacing.m};
`;

export default Header;
