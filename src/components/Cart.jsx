import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import React, { useContext, useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AuthContext } from "../AuthContext/AuthProvider";

export const Cart = () => {
  const {setCart}=useContext(AuthContext)
  const {auth}=useContext(AuthContext)
  const {counter,count,totalPrice,calculatePrice}=useContext(AuthContext)

  useEffect(()=>{
    setCart()
    return setCart
  })

  const isMobile = useBreakpointValue({ base: true, md: false });
  
  return (
    <Box px={{ base: 4, md: 6 }} py={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 8 }}
        maxW="1200px"
        mx="auto"
        mt={{ base: 4, md: 20 }}
      >
        {/* Main Cart Section */}
        <Box w={{ base: "100%", md: "65%" }}>
          {/* Cart Header */}
          <Flex alignItems="center" mb={6} gap={2}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>Cart</Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>({count} item{count !== 1 ? 's' : ''})</Text>
          </Flex>

          {/* Pickup and Delivery Options */}
          <Box mb={6}>
            <Accordion allowToggle border="0px solid white">
              <AccordionItem>
                <h2>
                  <AccordionButton px={0} py={4}>
                    <Box as="span" textAlign="left" w="100%">
                      <Text 
                        fontSize={{ base: "lg", md: "xl", lg: "2xl" }} 
                        className="roboto-bold"
                      >
                        Pickup and delivery options <AccordionIcon />
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px={0}>
                  <Flex 
                    direction={{ base: "column", sm: "row" }}
                    gap={4}
                    w="100%"
                  >
                    {/* Shipping Option */}
                    <Box
                      w={{ base: "100%", sm: "200px", md: "250px" }}
                      h="100px"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                      p={3}
                    >
                      <Image 
                        src="https://i5.walmartimages.com/dfw/4ff9c6c9-71e5/k2-_c68396aa-eafa-422b-ac41-0df7142d29cb.v1.svg" 
                        maxH="40px"
                        mb={2}
                      />
                      <Text fontSize="sm" color="#666">Shipping</Text>
                      <Text fontSize="sm" color="#ccc">Not Available</Text>
                    </Box>

                    {/* Pickup Option */}
                    <Box
                      w={{ base: "100%", sm: "200px", md: "250px" }}
                      h="100px"
                      display="flex"
                      alignItems="center"
                      border="2px solid black"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                      p={3}
                    >
                      <Image 
                        src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg" 
                        maxH="40px"
                        mb={2}
                      />
                      <Text fontSize="sm" fontWeight="bold">Pickup</Text>
                      <Text fontSize="sm" color="#666">Available</Text>
                    </Box>

                    {/* Delivery Option */}
                    <Box
                      w={{ base: "100%", sm: "200px", md: "250px" }}
                      h="100px"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                      p={3}
                    >
                      <Image 
                        src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-delivery.svg" 
                        maxH="40px"
                        mb={2}
                      />
                      <Text fontSize="sm" color="#666">Delivery</Text>
                      <Text fontSize="sm" color="#ccc">Available</Text>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          {/* Cart Items Section */}
          <Box 
            borderRadius={8} 
            className="cart2"
            border="1px solid #e2e8f0"
            overflow="hidden"
            mb={6}
          >
            {/* Shipping Info */}
            <Box bg="#F2F8FD" p={{ base: 4, md: 5 }}>
              <Flex 
                alignItems="center" 
                direction={{ base: "column", sm: "row" }}
                textAlign={{ base: "center", sm: "left" }}
                gap={3}
              >
                <Image 
                  src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" 
                  maxH="30px"
                />
                <Text fontSize={{ base: "md", md: "lg" }} className="roboto-bold">
                  Shipping, arrives by Tue, Mar 5 <br /> <u>95829</u>
                </Text>
              </Flex>
            </Box>

            {/* Item Details */}
            <Box p={{ base: 4, md: 5 }}>
              <VStack align="stretch" spacing={3}>
                <Text fontSize="sm">
                  Sold by <u>eCosmetics</u>
                </Text>
                <Text className="roboto-bold">Fulfilled by Walmart</Text>
                <Button 
                  fontSize="xs" 
                  h={8} 
                  color="#0071DC" 
                  bg="transparent"
                  border="1px solid #0071DC"
                  borderRadius="full"
                  w="fit-content"
                >
                  Best seller
                </Button>
              </VStack>

              {/* Price and Quantity Controls */}
              <Flex 
                justifyContent="space-between" 
                alignItems="center" 
                mt={6}
                direction={{ base: "column", sm: "row" }}
                gap={4}
              >
                <Text 
                  fontSize={{ base: "lg", md: "xl" }} 
                  color="green.500" 
                  className="roboto-bold"
                >
                  Total: ${totalPrice}
                </Text>
                
                <Flex alignItems="center" gap={3}>
                  <Button 
                    borderRadius="full" 
                    size="sm"
                    minW="40px"
                    h="40px"
                  >
                    -
                  </Button>
                  <Text fontSize="lg" fontWeight="bold" minW="40px" textAlign="center">
                    {count}
                  </Text>
                  <Button 
                    borderRadius="full" 
                    size="sm"
                    minW="40px"
                    h="40px"
                  >
                    +
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Box>

          {/* Recommended Items */}
          <Box 
            borderRadius={8} 
            className="cart2" 
            p={{ base: 4, md: 6 }}
            border="1px solid #e2e8f0"
          >
            <Text fontSize={{ base: "lg", md: "xl" }} className="roboto-bold" mb={4}>
              Recommended with your order
            </Text>
            
            <Box>
              <Flex justify="flex-end" mb={2}>
                <Circle size="40px" border="1px solid #ccc">
                  <CiHeart size="20px" />
                </Circle>
              </Flex>
              
              <Box mb={4}>
                <Image
                  src="https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                  alt="Recommended product"
                  h={{ base: "150px", md: "200px" }}
                  w="100%"
                  objectFit="contain"
                />
              </Box>
              
              <VStack align="stretch" spacing={2}>
                <Text fontSize="xs" color="gray.500">Sponsored</Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">$16.99</Text>
                <Text fontSize="sm" noOfLines={2}>
                  Electric server for Men Women, for in Rechargeable...
                </Text>
                <Button
                  border="1px solid black"
                  borderRadius={20}
                  bg="white"
                  size="sm"
                  leftIcon={<GoPlus />}
                  onClick={()=>{
                    counter()
                    calculatePrice(16.99)
                  }}
                >
                  Add
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>

        {/* Checkout Sidebar */}
        <Box 
          w={{ base: "100%", md: "35%" }} 
          position={{ base: "static", md: "sticky" }}
          top={{ base: "auto", md: "100px" }}
          h="fit-content"
        >
          <Box 
            className="cart2" 
            p={{ base: 4, md: 6 }} 
            borderRadius={20}
            border="1px solid #e2e8f0"
            bg="white"
            boxShadow="sm"
          >
            {/* Checkout Button */}
            <ChakraLink 
              as={ReactRouterLink} 
              to={auth ? "/product/checkout" : "/account/signUp"} 
              textDecoration="none" 
              _hover={{ textDecoration: "none" }}
            >
              <Button 
                w="100%" 
                bg="#004F9A" 
                borderRadius={20} 
                color="white"
                py={6}
                fontSize={{ base: "md", md: "lg" }}
                _hover={{ bg: "#003d7a" }}
              >
                Continue to checkout
              </Button>
            </ChakraLink>

            {/* Sign In Message */}
            <Text textAlign="center" fontSize="sm" mt={4} mb={6}>
              For the best shopping experience <u>sign in</u>
            </Text>

            {/* Price Breakdown */}
            <VStack spacing={4} divider={<Box borderBottom="1px solid #e2e8f0" />}>
              {/* Subtotal */}
              <Flex justify="space-between" w="100%">
                <Flex gap={1}>
                  <Text className="roboto-bold">Subtotal</Text>
                  <Text>({count} item{count !== 1 ? 's' : ''})</Text>
                </Flex>
                <Text className="roboto-bold" color="green.500">
                  ${totalPrice}
                </Text>
              </Flex>

              {/* Savings */}
              <Flex justify="space-between" w="100%">
                <Text className="roboto-bold">Savings</Text>
                <Text className="roboto-bold" color="green.500">
                  $0.00
                </Text>
              </Flex>

              {/* Shipping */}
              <Flex justify="space-between" w="100%">
                <Text fontSize="sm">Shipping (below $35 minimum)</Text>
                <Text fontSize="sm">$0.00</Text>
              </Flex>

              {/* Taxes */}
              <Flex justify="space-between" w="100%">
                <Text className="roboto-bold">Taxes</Text>
                <Text fontSize="sm">Calculated at checkout</Text>
              </Flex>

              {/* Total */}
              <Flex justify="space-between" w="100%">
                <Text className="roboto-bold" fontSize="lg">Estimated total</Text>
                <Text className="roboto-bold" color="green.500" fontSize="lg">
                  ${totalPrice}
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};