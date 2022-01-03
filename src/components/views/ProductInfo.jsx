import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductInfo() {
  const { productId } = useParams();
  return (
    <Box>
      <Text color="white">
        Product Info for
        {' '}
        {productId}
        !
      </Text>
    </Box>
  );
}

export default ProductInfo;
