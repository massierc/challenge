import styled from 'styled-components';
import Logo from './Logo';
import Link from './Link';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 160px auto repeat(
      ${props => props.children.length - 1},
      fit-content(10em)
    );
  grid-template-rows: ${props => props.theme.layout.header};
  grid-template-areas: 'logo . ${props =>
    [...Array(props.children.length - 1)].map((_el, i) => `link${i} `)}';
  padding: 0 4em;
`;

Nav.Logo = Logo;
Nav.Link = Link;

export default Nav;