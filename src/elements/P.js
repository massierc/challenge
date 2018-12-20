import styled from 'styled-components';

const P = styled.p`
  font-size: ${props =>
    props.size === 'p1' ? props.theme.font.size.p1 : props.theme.font.size.p2};
  font-weight: ${props => props.theme.font.weight.main};
`;

export default P;
