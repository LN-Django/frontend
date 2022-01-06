import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

function ProductInfo() {
  const { productId } = useParams();
  return (
    <Layout>
      <Box>
        <Text color="white">
          Product Info for
          {' '}
          {productId}
          !
        </Text>
      </Box>
    </Layout>
  );
}

export default ProductInfo;
