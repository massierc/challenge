import React from 'react';

import Heading from '../Heading';
import Wrapper from '../Wrapper';
import Box from '../Box';
import Title from '../../elements/H1';
import Subtitle from '../../elements/Subtitle';
import Text from '../../elements/Text';

const Content = props => {
  const { car } = props;
  return (
    <Wrapper carView>
      <Wrapper.Container>
        <Heading>
          <Title>{car.header}</Title>
          <Subtitle>{car.description}</Subtitle>
        </Heading>
        <Text size={1}>
          This car is currently available and can be delivered as soon as
          tomorrow morning. Please be aware that delivery times shown in this
          page are not definitive and may change due to bad weather conditions.
        </Text>
        <Box>
          <Box.Text size={1}>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </Box.Text>
          <Box.Button>Save</Box.Button>
        </Box>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Content;
