import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: ${props => props.theme.font.size.t1};
  width: ${props => props.theme.layout.button.width};
  height: ${props => props.theme.layout.button.height};
  border: none;
  border-radius: 2px;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export default Button;
