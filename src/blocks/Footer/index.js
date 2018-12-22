import styled from 'styled-components';
import Content from './Content';

const Footer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${props => props.theme.layout.footer};
  font-size: ${props => props.theme.font.size.p2};
  border-top: 1px solid ${props => props.theme.colors.grey};
`;

Footer.Content = Content;

export default Footer;
