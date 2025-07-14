import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import Modalhome from "./Modalhome";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink} from "@chakra-ui/react";

export const Pannel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pannelButton, setpannelButton] = useState(false);

  function handle() {
    setpannelButton((prev) => !prev);
  }

  const handleDrawerOpen = () => {
    setpannelButton((prev) => !prev);
    onOpen();
  };
  
  const handleDrawerclose = () => {
    setpannelButton((prev) => !prev);
    onClose();
  };

  return (
    <Box borderTop={"1px solid white"}>
      <Box
        bg="#0071DC"
        color="white"
        px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        py={{ base: 2, md: 3 }}
      >
        {/* Main Content Row */}
        <Flex
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 3, md: 0 }}
        >
          {/* Left Section - Delivery Info */}
          <Box 
            w={{ base: "100%", md: "auto" }}
            flex={{ base: "none", md: "1" }}
            maxW={{ base: "none", md: "50%" }}
          >
            <Flex
              flexDirection={{ base: "column", sm: "row" }}
              alignItems={{ base: "flex-start", sm: "center" }}
              gap={{ base: 2, sm: 4 }}
            >
              {/* Delivery Option */}
              <Flex alignItems="center" minW="fit-content">
                <Image
                  borderRadius="full"
                  boxSize="25px"
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                  alt="logo"
                  mr={2}
                />
                <Text fontSize={{ base: "sm", md: "md" }} mr={2} noOfLines={1}>
                  How do you want your items?
                </Text>
                <Box 
                  cursor="pointer"
                  p={1}
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  borderRadius="sm"
                >
                  {!pannelButton ? (
                    <SlArrowDown onClick={handleDrawerOpen} />
                  ) : (
                    <SlArrowUp onClick={handleDrawerclose} />
                  )}
                </Box>
              </Flex>

              {/* Location Info - Hidden on mobile */}
              <Flex
                alignItems="center"
                display={{ base: "none", sm: "flex" }}
                gap={2}
              >
                <Box w="1px" h="16px" bg="white" opacity={0.5} />
                <CiLocationOn />
                <Text fontSize={{ base: "sm", md: "md" }} noOfLines={1}>
                  Sacramento 95829
                </Text>
              </Flex>

              {/* Store Info - Hidden on mobile and small screens */}
              <Flex
                alignItems="center"
                display={{ base: "none", md: "flex" }}
                gap={2}
              >
                <Box w="1px" h="16px" bg="white" opacity={0.5} />
                <IoHomeOutline />
                <Text fontSize={{ base: "sm", md: "md" }} noOfLines={1}>
                  Sacramento Supercenter
                </Text>
              </Flex>
            </Flex>
          </Box>

          {/* Right Section - Navigation Links */}
          <Box
            w={{ base: "100%", md: "auto" }}
            display={{ base: "block", sm: "none", md: "none", lg: "block" }}
            className="roboto-bold"
          >
            <Flex
              justifyContent={{ base: "space-between", lg: "flex-end" }}
              alignItems="center"
              gap={{ base: 2, lg: 6 }}
              flexWrap={{ base: "wrap", lg: "nowrap" }}
            >
              <ChakraLink 
                as={ReactRouterLink}
                fontSize={{ base: "xs", lg: "sm" }}
                whiteSpace="nowrap"
                _hover={{ textDecoration: "underline" }}
              >
                Deals
              </ChakraLink>
              
              <ChakraLink 
                as={ReactRouterLink}
                fontSize={{ base: "xs", lg: "sm" }}
                whiteSpace="nowrap"
                _hover={{ textDecoration: "underline" }}
              >
                Grocery & Essentials
              </ChakraLink>
              
              <ChakraLink 
                as={ReactRouterLink}
                fontSize={{ base: "xs", lg: "sm" }}
                whiteSpace="nowrap"
                _hover={{ textDecoration: "underline" }}
              >
                Easter
              </ChakraLink>
              
              <ChakraLink 
                as={ReactRouterLink}
                fontSize={{ base: "xs", lg: "sm" }}
                whiteSpace="nowrap"
                _hover={{ textDecoration: "underline" }}
              >
                Walmart Style
              </ChakraLink>
              
              <ChakraLink 
                as={ReactRouterLink}
                fontSize={{ base: "xs", lg: "sm" }}
                whiteSpace="nowrap"
                _hover={{ textDecoration: "underline" }}
              >
                Baby Days
              </ChakraLink>
            </Flex>
          </Box>
        </Flex>

        {/* Mobile Location Info - Only shown on mobile */}
        <Box
          display={{ base: "block", sm: "none" }}
          mt={2}
          pt={2}
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          <Flex alignItems="center" gap={2} fontSize="sm">
            <CiLocationOn />
            <Text>Sacramento 95829 • Sacramento Supercenter</Text>
          </Flex>
        </Box>
      </Box>

      {/* Modal */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
      >
        <Modalhome isOpen={isOpen} onClose={onClose} />
      </motion.div>
    </Box>
  );
};