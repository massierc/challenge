import styled from 'styled-components';

import Button from './Button';
import Group from '../../elements/FormGroup';
import Label from '../../elements/Label';
import Select from '../../elements/Select';

const Form = styled.form`
  display: grid;
  padding: ${props => props.theme.spacing.l};
  border: 1px solid ${props => props.theme.colors.grey};
`;

Form.Group = Group;
Form.Label = Label;
Form.Select = Select;
Form.Button = Button;

export default Form;
