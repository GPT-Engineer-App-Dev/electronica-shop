import { Box, Container, VStack, Text, Button, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Spacer />
        <HStack spacing="24px">
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" padding="3rem" textAlign="center">
        <Heading size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mt="4">Your one-stop shop for all things electronics</Text>
        <Button colorScheme="teal" size="lg" mt="6">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.xl" mt="10">
        <Heading size="lg" mb="6">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {/* Example Product */}
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product Image" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="bold" fontSize="xl">Product Name</Text>
                </Box>
                <Box>
                  <Text mt="2" color="gray.600">$199.99</Text>
                </Box>
                <Button colorScheme="teal" size="sm" mt="4">Add to Cart</Button>
              </Box>
            </Box>
          </GridItem>
          {/* Add more products as needed */}
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" mt="10" py="6">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing="24px">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
          <Flex justify="center" mt="4">
            <Link href="#" mx="2">Terms of Service</Link>
            <Link href="#" mx="2">Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;