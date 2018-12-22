import styled from 'styled-components';

const Placeholder = styled.div`
  background-color: ${props => props.theme.colors.grey};
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  grid-area: ${props => props.gridArea || ''};
  margin: ${props => props.margin || ''};
`;

export default Placeholder;
