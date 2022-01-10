import {
  Box, Heading, useToast,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../const';

import Loading from '../Loading';
import ProductLink from '../ProductLink';
import Layout from './Layout';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const fetchProductList = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(`${BASE_URL}/api/products`);

      if (!request.ok) {
        throw new Error();
      }
      const data = await request.json();
      setProducts(data);
    } catch (e) {
      toast({
        title: 'Something went wrong while accessing the API',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Layout>
      {isLoading ? <Loading text="Retrieving Products" /> : (
        <Box>
          <Heading>All Products</Heading>
          <Box mt={8} width="100%">
            {products.map(({ id, ...rest }) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
              <ProductLink key={id} id={id} {...rest} />
            ))}
          </Box>
        </Box>
      )}
    </Layout>
  );
}

export default ProductsList;
