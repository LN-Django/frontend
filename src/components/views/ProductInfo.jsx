import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Layout from './Layout';

function ProductInfo() {
  const { productId } = useParams();
  return (
    <Layout>
      <Loading text="Loading Product Info..." />
    </Layout>
  );
}

export default ProductInfo;
