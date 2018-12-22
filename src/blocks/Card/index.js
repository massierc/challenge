import styled from 'styled-components';
import { utils } from '../../helpers';

import Image from './Image';
import Header from './Header';
import Description from './Description';
import Link from './Link';
import Placeholder from '../../elements/Placeholder';

const Card = styled.div.attrs(props => ({
  margin: utils.getMarginFromProp(props)
}))`
  display: grid;
  grid-template-columns: 15% 1em auto;
  grid-template-rows: auto;
  grid-template-areas:
    'image . header'
    'image . description'
    'image . link';
  padding: 1em;
  border: 1px solid ${props => props.theme.colors.grey};
  margin: ${props => props.margin};
`;

Card.Image = Image;
Card.Header = Header;
Card.Description = Description;
Card.Link = Link;
Card.Placeholder = Placeholder;

export default Card;
