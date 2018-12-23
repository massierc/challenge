import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.theme.font.size.h1};
  font-weight: ${props => props.theme.font.weight.header};
  grid-area: title;
`;

export default H1;
