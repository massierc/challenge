import styled from 'styled-components';

const Img = styled.div`
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.src}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain
`;

export default Img;
