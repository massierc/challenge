import styled from 'styled-components';
import { Link } from 'react-router-dom';

const A = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.font.size.t2};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default A;
