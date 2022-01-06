import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';

function Button({ children, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ChakraButton bg="purple.600" text="white" sx={{ '&:hover': { bg: 'purple.600' } }} {...rest}>
      {children}
    </ChakraButton>
  );
}

export default Button;
