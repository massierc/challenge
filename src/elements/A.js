import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.font.size.p2};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default A;
