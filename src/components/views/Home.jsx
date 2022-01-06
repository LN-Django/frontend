import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <Box>
        <Text color="white">
          Home!
        </Text>
      </Box>
    </Layout>
  );
}

export default Home;
