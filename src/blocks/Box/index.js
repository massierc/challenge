import styled from 'styled-components';
import { utils } from '../../helpers';

import Text from './Text';
import Button from './Button';

const Box = styled.div`
  grid-area: box;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'text text'
    '. button';
  border: 1px solid ${props => props.theme.colors.grey};
  padding: ${props => props.theme.spacing.l};
`;

Box.Text = Text;
Box.Button = Button;

export default Box;
