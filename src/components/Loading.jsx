import {
  Box, Heading, Spinner, HStack,
} from '@chakra-ui/react';
import React from 'react';

function Loading({ text }) {
  return (
    <Box mt={4}>
      <HStack>
        <Spinner
          thickness={96}
          speed="1.2s"
          emptyColor="gray.600"
          color="purple.400"
          size="xl"
          mr={8}
        />
        <Heading fontWeight="light" size="lg" color="gray.500">
          {text}
        </Heading>
      </HStack>
    </Box>
  );
}

export default Loading;
