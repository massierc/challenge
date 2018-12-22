import styled from 'styled-components';

import Container from './Container';

const Wrapper = styled.div.attrs(props => ({
  width: props.carView ? props.theme.layout.wrapper : 'auto'
}))`
  display: grid;
  grid-template-columns: auto ${props => props.width} auto;
  grid-template-rows: auto;
  grid-template-areas: '. container .';
`;

Wrapper.Container = Container;

export default Wrapper;
