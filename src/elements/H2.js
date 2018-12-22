import styled from 'styled-components';

const H2 = styled.h2`
  font-size: ${props => props.theme.font.size.h2};
  font-weight: ${props => props.theme.font.weight.header};
  grid-area: title;
`;

export default H2;
