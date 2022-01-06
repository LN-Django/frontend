import { VStack } from '@chakra-ui/react';
import React from 'react';

function Layout({ children }) {
  return (
    <VStack alignItems="flex-start" spacing={8} px={3} py={8} color="white">
      {children}
    </VStack>
  );
}

export default Layout;
