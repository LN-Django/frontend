import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <Box>
        <Heading>
          Welcome to our online shop!
        </Heading>
      </Box>
    </Layout>
  );
}

export default Home;
