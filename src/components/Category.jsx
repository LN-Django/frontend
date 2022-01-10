import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const colorMap = {
  Tech: 'green',
  Foods: 'red',
  Living: 'blue',
};

function Category({ category }) {
  const color = colorMap[category] ?? 'purple';
  return (
    <Box bg={`${color}.300`} color={`${color}.700`} px={2} py={1} borderRadius={6}>
      <Text fontWeight="medium" fontSize="sm">
        {category}
      </Text>
    </Box>
  );
}

export default Category;
