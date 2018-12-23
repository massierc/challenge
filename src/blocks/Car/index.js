import styled from 'styled-components';
import Banner from './Banner';
import Content from './Content';

const Car = styled.div`
  min-height: calc(100vh - ${props => props.theme.layout.header});
`;

Car.Banner = Banner;
Car.Content = Content;

export default Car;
