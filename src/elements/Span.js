import styled from 'styled-components';

const Span = styled.p.attrs(props => {
  const { size } = props.theme.font;
  return {
    size: props.size === 1 ? size.t1 : size.t2
  };
})`
  font-size: ${props => props.size};
  font-weight: ${props => props.theme.font.weight.main};
`;

export default Span;
