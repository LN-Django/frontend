import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Calculator', path: '/calculator' },
    { text: 'Products', path: '/products' },
  ];

  /**
   *
   * @param {string} path
   */
  const isLinkActive = (path) => (pathname === '/' ? pathname === path : path.includes(pathname));

  return (
    <Flex>
      {links.map(({ text, path }) => {
        const isActive = isLinkActive(path);
        return (
          <Box
            mx={2}
            px={2}
            py={1}
            as="button"
            bg={isActive ? 'purple.300' : 'transparent'}
            borderRadius={4}
            transitionDuration="200ms"
            key={`link-${path}`}
          >
            <Text color={isActive ? 'purple.600' : 'purple.400'} fontWeight="bold">
              <Link to={path}>{text}</Link>
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
}

export default Header;
