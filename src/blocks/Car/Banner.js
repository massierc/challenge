import styled from 'styled-components';
import Img from '../../elements/Img';

const Banner = styled(Img)`
  height: 300px;
  background-size: 150px;
  background-color: ${props => props.theme.colors.grey};
`;

export default Banner;
