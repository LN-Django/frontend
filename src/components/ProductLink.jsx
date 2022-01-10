import {
  Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

function ProductLink({
  id, name, description, weight, category,
}) {
  return (
    <Link to={`/products/${id}/info`}>
      <HStack
        spacing={24}
        justifyContent="space-between"
        bg="#212733"
        px={6}
        py={4}
        my={4}
        borderRadius={8}
        transitionDuration="200ms"
        sx={{
          '&:hover': {
            bg: '#323845',
          },
        }}
      >
        <HStack alignItems="flex-start" spacing={12}>
          <Heading size="md" color="purple.200" width="24px">{id}</Heading>
          <VStack alignItems="flex-start">
            <Heading size="md">{name}</Heading>
            <Text fontWeight="light">{description}</Text>
          </VStack>
        </HStack>
        <HStack spacing={8}>
          <Text fontSize="md" fontWeight="bold">
            {weight}
            {' '}
            KG
          </Text>
          <Category category={category} />
        </HStack>
      </HStack>
    </Link>
  );
}

export default ProductLink;
