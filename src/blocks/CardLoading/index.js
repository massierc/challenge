import React from 'react';
import Card from '../Card';

const CardLoading = () => {
  return (
    <Card>
      <Card.Placeholder
        width="100%"
        height="100%"
        gridArea="image"
        margin="0 0 0 10px"
      />
      <Card.Placeholder
        width="50%"
        height="28px"
        gridArea="header"
        margin="0 0 5px 10px"
      />
      <Card.Placeholder
        width="50%"
        height="14px"
        gridArea="description"
        margin="0 0 12px 10px"
      />
      <Card.Placeholder
        width="15%"
        height="12px"
        gridArea="link"
        margin="0 0 0 10px"
      />
    </Card>
  );
};

export default CardLoading;
