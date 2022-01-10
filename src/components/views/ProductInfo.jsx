import {
  Box, Heading, HStack, Text, useToast, VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { BASE_URL } from '../../const';
import Loading from '../Loading';
import Layout from './Layout';
import Category from '../Category';

function ProductInfo() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const { productId } = useParams();

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(`${BASE_URL}/api/product/${productId}/info`);

      if (!request.ok) {
        throw new Error();
      }
      const data = await request.json();
      setProduct(data);
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
    fetchProduct();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loading text="Loading Product Info..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {product ? (
        <>
          <Link to="/products">
            <Text color="purple.100" sx={{ '&:hover': { color: 'purple.300', transitionDuration: '200ms' } }}>
              Go Back
            </Text>
          </Link>
          <HStack alignItems="flex-start" spacing={10}>
            <Heading color="purple.200" size="lg" mt={2}>{productId}</Heading>
            <VStack alignItems="flex-start">
              <Heading>{product.name}</Heading>
              <Text fontWeight="light">
                {product.description}
              </Text>
            </VStack>
            <HStack spacing={8}>
              <Text fontSize="md" fontWeight="bold" mt={2} ml={32}>
                {product.weight}
                {' '}
                KG
              </Text>
              <Category category={product.category} />
            </HStack>
          </HStack>
          <HStack pl="58px" spacing={20} alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Text fontSize="xl" fontWeight="bold">
                Price
              </Text>
              <Text fontSize="md" fontWeight="light">
                €
                {product.base_price}
                {' '}
                + 19% VAT
              </Text>
              <HStack spacing={4} mt={8}>
                <Heading>
                  €
                  {product.taxed_price}
                </Heading>
                <Box width="1px" height="36px" bg="white" />
                <Heading>
                  $
                  {product.USD_price}
                </Heading>
              </HStack>
            </VStack>
            <VStack alignItems="flex-start">
              <Text>
                Location
                <Text fontWeight="bold">
                  {product.location}
                </Text>
              </Text>
              <Text>
                Delivery time
                <Text fontWeight="bold">
                  {product.delivery_time}
                  {' '}
                  days
                </Text>
              </Text>
            </VStack>
            <Text>
              In stock
              <Text fontWeight="bold">
                {product.amount}
                {' '}
                items
              </Text>
            </Text>
          </HStack>
        </>
      ) : (
        <Heading>
          No product with the ID
          {' '}
          {productId}
          {' '}
          is found
        </Heading>
      )}
    </Layout>
  );
}

export default ProductInfo;
