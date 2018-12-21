import styled from 'styled-components';

import Group from './Group';

import Label from '../../elements/Label';
import Select from '../../elements/Select';
import Button from '../../elements/Button';

const Form = styled.form`
  display: grid;
  padding: ${props => props.theme.spacing.l};
  border: 2px solid ${props => props.theme.colors.grey};
`;

Form.Group = Group;
Form.Label = Label;
Form.Select = Select;
Form.Button = Button;

export default Form;
