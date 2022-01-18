import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

import Router from './components/Router';
import Header from './components/Header';

function App() {
  const [displayAlert, setDisplayAlert] = useState(true);

  return (
    <ChakraProvider>
      <BrowserRouter basename="frontend">
        <Box px={12} py={8} minHeight="100vh" bg="gray.800">
          <Header />

          {displayAlert && (
            <Box mt={6}>
              <Alert status="info" borderRadius={4}>
                <AlertIcon />
                <AlertTitle mr={2}>
                  If the loading time is not fast enough:
                </AlertTitle>
                <AlertDescription>
                  As we&apos;re not really receiving a lot of traffic, the
                  response time might be a little slow.
                </AlertDescription>
                <CloseButton onClick={() => setDisplayAlert(false)} position="absolute" right="8px" top="8px" />
              </Alert>
            </Box>
          )}

          <Router />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
