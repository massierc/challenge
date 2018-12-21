import React from 'react';
import styled from 'styled-components';
import { default as Btn } from '../../elements/Button';

const StyledButton = styled(Btn)`
  justify-self: end;
`;

const Button = props => {
  return (
    <StyledButton
      {...props}
      as="input"
      type="submit"
      value={props.value ? props.value : 'Submit'}
    />
  );
};

export default Button;
