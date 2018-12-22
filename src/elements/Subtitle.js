import styled from 'styled-components';

const Subtitle = styled.span`
  font-size: ${props => props.theme.font.size.subtitle};
  font-weight: ${props => props.theme.font.weight.main};
  grid-area: subtitle;
`;

export default Subtitle;
