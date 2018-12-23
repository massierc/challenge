import styled from 'styled-components';

const FormGroup = styled.div`
  display: grid;
  padding-bottom: ${props => props.spacing || props.theme.spacing.m};
  &:last-of-type {
    padding-bottom: ${props => props.spacing || props.theme.spacing.l};
  }
`;

export default FormGroup;
