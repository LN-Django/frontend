import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from './Layout';
import Button from '../Button';
import { BASE_URL } from '../../const';

function Calculator() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [taxedValue, setTaxedValue] = useState(0);

  const toast = useToast();

  const calculateTax = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(`${BASE_URL}/api/calculator`, {
        method: 'POST',
        body: JSON.stringify({ base_price: parseFloat(value) }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!request.ok) {
        throw new Error();
      }
      const data = await request.json();
      setTaxedValue(data.taxed_price);
    } catch (e) {
      toast({
        title: 'Something went wrong while accessing the API',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const format = (val) => `€ ${val}`;
  const parse = (val) => val.replace(/^€ /, '');

  return (
    <Layout>
      <Box>
        <Heading>Calculator</Heading>
        <Text mt={2} color="gray.400">
          Calculate the amount of tax you need to pay when buying products
          online
        </Text>
      </Box>
      <Box>
        <FormControl>
          <FormLabel htmlFor="calculator-price">Base Price</FormLabel>
          <NumberInput
            id="calculator-price"
            width={40}
            min={0.1}
            value={format(value)}
            isDisabled={isLoading}
            onChange={(valueString) => setValue(parse(valueString))}
          >
            <NumberInputField />
          </NumberInput>
          <FormHelperText>
            Input the base price of the product (without tax)
          </FormHelperText>
        </FormControl>
        <Button mt={4} isDisabled={isLoading} onClick={calculateTax}>
          Calculate Tax
        </Button>
      </Box>
      <Box>
        {isLoading && (
          <Text color="purple.200" fontWeight="medium">
            Calculating your tax...
          </Text>
        )}
        {!isLoading && taxedValue !== 0 && (
          <Box>
            <Text color="purple.200" fontWeight="medium">
              Product price after taxes:
            </Text>
            <Heading>
              €
              {' '}
              {taxedValue}
            </Heading>
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default Calculator;
