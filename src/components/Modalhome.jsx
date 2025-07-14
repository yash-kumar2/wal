import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

const Modalhome = ({ onClose, isOpen }) => {
  const modalSize = useBreakpointValue({ base: "full", md: "md" });
  const isFullScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Modal 
        blockScrollOnMount={false} 
        onClose={onClose} 
        isOpen={isOpen} 
        isCentered={!isFullScreen}
        size={modalSize}
      >
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent
          top={{ base: 0, md: "-1px" }}
          right={{
            base: 0,
            sm: 0,
            md: 10,
            lg: 545,
            xl: 550,
          }}
          bg="#0071DC"
          w={{ base: "100vw", md: "450px" }}
          maxW={{ base: "100vw", md: "450px" }}
          h={{ base: "100vh", md: "auto" }}
          borderRadius={{ base: 0, md: "md" }}
          mx={{ base: 0, md: "auto" }}
          my={{ base: 0, md: "auto" }}
        >
          {/* Header Section with Service Icons */}
          <Box p={{ base: 6, md: 8 }} pb={{ base: 4, md: 6 }}>
            <Flex 
              justifyContent="center" 
              gap={{ base: 6, md: 8 }}
              flexWrap="wrap"
            >
              <VStack spacing={2} align="center">
                <Image
                  borderRadius="full"
                  boxSize={{ base: "45px", md: "50px" }}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png"
                  alt="Shipping"
                />
                <Text 
                  color="white" 
                  fontWeight={500} 
                  fontSize={{ base: "sm", md: "md" }}
                  textAlign="center"
                >
                  Shipping
                </Text>
              </VStack>
              
              <VStack spacing={2} align="center">
                <Image
                  borderRadius="full"
                  boxSize={{ base: "45px", md: "50px" }}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png"
                  alt="Pickup"
                />
                <Text 
                  color="white" 
                  fontWeight={500} 
                  fontSize={{ base: "sm", md: "md" }}
                  textAlign="center"
                >
                  Pickup
                </Text>
              </VStack>
              
              <VStack spacing={2} align="center">
                <Image
                  borderRadius="full"
                  boxSize={{ base: "45px", md: "50px" }}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png"
                  alt="Delivery"
                />
                <Text 
                  color="white" 
                  fontWeight={500} 
                  fontSize={{ base: "sm", md: "md" }}
                  textAlign="center"
                >
                  Delivery
                </Text>
              </VStack>
            </Flex>
          </Box>

          <ModalBody px={{ base: 4, md: 6 }} py={0}>
            <VStack spacing={4} align="stretch">
              {/* Add Address Section */}
              <Box
                bg="white"
                borderRadius="8px"
                p={{ base: 4, md: 5 }}
                boxShadow="sm"
              >
                <VStack spacing={3} align="stretch">
                  <HStack spacing={3} align="flex-start">
                    <Box pt={1}>
                      <CiLocationOn size="20px" />
                    </Box>
                    <Box flex={1}>
                      <Text 
                        fontWeight={600} 
                        fontSize={{ base: "sm", md: "md" }}
                        lineHeight="1.4"
                      >
                        Add an address for shipping and delivery
                      </Text>
                    </Box>
                  </HStack>
                  
                  <Text 
                    fontSize={{ base: "sm", md: "md" }} 
                    color="gray.600"
                    textAlign="center"
                  >
                    Sacramento, CA 95829
                  </Text>
                  
                  <Button
                    borderRadius="full"
                    w="100%"
                    bg="#0071DC"
                    color="white"
                    py={{ base: 3, md: 4 }}
                    fontSize={{ base: "sm", md: "md" }}
                    _hover={{ bg: "#005bb5" }}
                    _active={{ bg: "#004494" }}
                  >
                    Add Address
                  </Button>
                </VStack>
              </Box>

              {/* Store Location Section */}
              <Box
                bg="white"
                borderRadius="8px"
                p={{ base: 4, md: 5 }}
                boxShadow="sm"
                cursor="pointer"
                _hover={{ bg: "gray.50" }}
                transition="background-color 0.2s"
              >
                <VStack spacing={3} align="stretch">
                  <HStack spacing={3} align="flex-start">
                    <Box pt={1}>
                      <IoHomeOutline size="20px" />
                    </Box>
                    <Box flex={1}>
                      <Text 
                        fontWeight={600} 
                        fontSize={{ base: "sm", md: "md" }}
                        lineHeight="1.4"
                      >
                        Sacramento Supercenter
                      </Text>
                      <Text 
                        fontSize={{ base: "xs", md: "sm" }} 
                        color="gray.600"
                        lineHeight="1.4"
                      >
                        8915 Gerber Road
                      </Text>
                    </Box>
                  </HStack>
                  
                  <HStack justify="space-between" align="center">
                    <Text 
                      fontSize={{ base: "sm", md: "md" }} 
                      color="gray.600"
                    >
                      Sacramento, CA 95829
                    </Text>
                    <Box color="gray.400">
                      <FaGreaterThan size="12px" />
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter p={{ base: 4, md: 6 }}>
            {/* Close button for mobile */}
            <Button
              display={{ base: "block", md: "none" }}
              variant="outline"
              colorScheme="whiteAlpha"
              color="white"
              borderColor="white"
              w="100%"
              onClick={onClose}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalhome;