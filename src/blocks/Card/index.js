import styled from 'styled-components';
import Image from './Image';
import Header from './Header';
import Description from './Description';
import Link from './Link';

const Card = styled.div`
  display: grid;
  grid-template-columns: 25% 1em auto;
  grid-template-rows: auto;
  grid-template-areas:
    'image . header'
    'image . description'
    'image . link';
  padding: 1em;
  border: 2px solid ${props => props.theme.colors.grey};
`;

Card.Image = Image;
Card.Header = Header;
Card.Description = Description;
Card.Link = Link;

export default Card;
