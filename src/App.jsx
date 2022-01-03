import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';

import Router from './components/Router';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename="frontend">
        <Box px={12} py={8} minHeight="100vh" bg="gray.800">
          <Header />
          <Router />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
