import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Image,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  flexbox,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";
import { BiLogIn, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { Link, Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import Searchmenu from "./Searchmenu";
import SideNavbar from "./SideNavbar";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const { name } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);
  const { setName } = useContext(AuthContext);
  const { handleChange } = useContext(AuthContext);
  const navigate = useNavigate();
  const { search, handleSearch } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState();
  const { count, totalPrice } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal = useDisclosure();
  const [drawerstate, setDrawerSate] = useState(false);
  const { signOut } = useContext(AuthContext);

  return (
    <Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        w="100%"
        bg="orange"
        color="white"
        alignItems="stretch"
        minH="60px"
      >
        {/* Mobile Header Row */}
        <Flex
          display={{ base: "flex", lg: "none" }}
          w="100%"
          p={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack spacing={2} alignItems="center">
            <Box fontSize={24}>
              {drawerstate ? (
                <RxHamburgerMenu 
                  onClick={() => {
                    setDrawerSate((prev) => !prev);
                    onOpen();
                  }} 
                />
              ) : (
                <RxHamburgerMenu 
                  onClick={() => {
                    setDrawerSate((prev) => !prev);
                    onClose();
                  }} 
                />
              )}
            </Box>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
              w="80px"
              h="auto"
              maxW="120px"
            />
          </HStack>
          
          <HStack spacing={1}>
            {/* Mobile Account Menu */}
            <Menu>
              <MenuButton
                p={1}
                transition="all 0.2s"
                borderRadius="md"
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
              >
                <Box display="flex" alignItems="center" fontSize="20px">
                  <BiUser />
                </Box>
              </MenuButton>
              <MenuList p={4} color="black" minW="250px">
                <ChakraLink
                  as={ReactRouterLink}
                  to="/account/signUp"
                  textDecoration="none"
                  _hover="none"
                >
                  {auth ? null : (
                    <>
                      <Button
                        w="100%"
                        bg="#004F9A"
                        borderRadius={20}
                        color="white"
                        size="sm"
                      >
                        Sign in or Create Account
                      </Button>
                      <br />
                      <br />
                    </>
                  )}
                </ChakraLink>

                <hr />
                <Text mt={4} color="black">
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <BiLogIn />
                    <Text ml={2} onClick={() => navigate("/account/login")}>
                      Login
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <RiHistoryFill />
                    <Text ml={2}>Purchase history</Text>
                  </Box>
                </Text>
                <Text mt={2} color="black">
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <VscServerProcess />
                    <Text ml={2}>Walmart +</Text>
                  </Box>
                </Text>
                {auth && (
                  <Text mt={2} color="black">
                    <Box
                      display="flex"
                      alignItems="center"
                      cursor="pointer"
                      py={2}
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <IoIosLogOut />
                      <Text ml={2}>Sign out</Text>
                    </Box>
                  </Text>
                )}
              </MenuList>
            </Menu>

            {/* Mobile Cart */}
            <ChakraLink
              as={ReactRouterLink}
              to="/home/cart"
              textDecoration="none"
              _hover="none"
            >
              <Box position="relative" p={1}>
                <Box
                  bg="#FFC326"
                  color="black"
                  borderRadius="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="16px"
                  h="16px"
                  position="absolute"
                  top="-2px"
                  right="-2px"
                  fontSize="10px"
                  fontWeight="bold"
                >
                  {count}
                </Box>
                <Box fontSize={24}>
                  <BsCart2 />
                </Box>
              </Box>
            </ChakraLink>
          </HStack>
        </Flex>

        {/* Desktop Header Row */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          w="100%"
          p={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo */}
          <Box p={2} flexShrink={0}>
            <Image
              src="/logo.png"
              height={50}
              width={200}
              maxW="250px"
              alt="logo"
            />
          </Box>

          {/* Departments */}
          <Box color="white" flexShrink={0}>
            <Box display="flex" alignItems="center" p={2}>
              <IoGridOutline />
              <Menu>
                <MenuButton
                  px={3}
                  py={2}
                  transition="all 0.2s"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                >
                  Departments
                </MenuButton>
                <MenuList color="black" maxH="400px" overflowY="auto">
                  <MenuItem>All Departments</MenuItem>
                  <MenuDivider />
                  <MenuItem>Deals</MenuItem>
                  <MenuItem>Grocery</MenuItem>
                  <MenuItem>Easter</MenuItem>
                  <MenuItem>Spring Shop</MenuItem>
                  <MenuItem>Home,Garden & Tools</MenuItem>
                  <MenuItem>Clothing,Shoes</MenuItem>
                  <MenuItem>Electronics</MenuItem>
                  <MenuItem>Baby</MenuItem>
                  <MenuItem>Kids</MenuItem>
                  <MenuItem>Toys & Video Games</MenuItem>
                  <MenuItem>Pharmacy,Health & Wellness</MenuItem>
                  <MenuItem>Beauty</MenuItem>
                  <MenuItem>Personal Care</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

          {/* Services */}
          <Box color="white" flexShrink={0}>
            <Box display="flex" alignItems="center" p={2}>
              <BsUiRadiosGrid />
              <Menu>
                <MenuButton
                  px={3}
                  py={2}
                  transition="all 0.2s"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                >
                  <Text className="roboto-bold">Services</Text>
                </MenuButton>
                <MenuList color="black" maxH="400px" overflowY="auto">
                  <MenuItem>
                    <Text className="roboto-bold">All Services</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Auto Care Center Services</MenuItem>
                  <MenuItem>Pharmacy</MenuItem>
                  <MenuItem>Health & Wellness</MenuItem>
                  <MenuItem>Registry,Lists,& Gift</MenuItem>
                  <MenuItem>Custom Cakes</MenuItem>
                  <MenuItem>Photo Services</MenuItem>
                  <MenuItem>Electronics</MenuItem>
                  <MenuItem>Money Services</MenuItem>
                  <MenuItem>Protection,Home & Tech</MenuItem>
                  <MenuItem>Subscription</MenuItem>
                  <MenuItem>Community & Giving</MenuItem>
                  <MenuItem>Ordering online</MenuItem>
                  <MenuItem>Get inspired</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

          {/* Search Bar */}
          <Box flex="1" maxW="600px" mx={4}>
            <InputGroup size="md" bg="#FFFFFF" borderRadius="20px">
              <Input
                pr="4.5rem"
                placeholder="Search everything at walmart online and in store"
                borderRadius="20px"
                className="roboto-light"
                bg="#FFFFFF"
                color="black"
                fontSize={16}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement width="3rem">
                <Circle
                  size="36px"
                  bg="#FFC326"
                  color="white"
                  cursor="pointer"
                  onClick={() => {
                    handleSearch(searchValue);
                    navigate(`/product/${searchValue}`);
                  }}
                >
                  <Search2Icon />
                </Circle>
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* My Items */}
          <Box color="white" flexShrink={0}>
            <Box display="flex" alignItems="center" p={2}>
              <CiHeart />
              <Box ml={2}>
                <Text className="roboto-regular" color="#ccc" fontSize="10px">
                  Reorder
                </Text>
                <Text className="roboto-bold" fontSize="12px">My Items</Text>
              </Box>
            </Box>
          </Box>

          {/* Account */}
          <Box color="white" flexShrink={0}>
            <Menu>
              <MenuButton
                px={3}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
              >
                <Box display="flex" alignItems="center">
                  <BiUser />
                  <Box ml={2}>
                    <Text
                      className="roboto-regular"
                      color="#ccc"
                      fontSize="10px"
                    >
                      {auth ? `Hi, ${name}` : "Sign In"}
                    </Text>
                    <Text className="roboto-bold" fontSize="12px">Account</Text>
                  </Box>
                </Box>
              </MenuButton>
              <MenuList p={6} minW="280px">
                <ChakraLink
                  as={ReactRouterLink}
                  to="/account/signUp"
                  textDecoration="none"
                  _hover="none"
                >
                  {auth ? null : (
                    <>
                      <Button
                        w="100%"
                        bg="#004F9A"
                        borderRadius={20}
                        color="white"
                      >
                        Sign in or Create Account
                      </Button>
                      <br />
                      <br />
                    </>
                  )}
                </ChakraLink>

                <hr />
                <Text mt={6} color="black">
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <BiLogIn />
                    <Text ml={2} onClick={() => navigate("/account/login")}>
                      Login (<u>If you have walmart account.</u>)
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <RiHistoryFill />
                    <Text ml={2}>Purchase history</Text>
                  </Box>
                </Text>
                <Text mt={2} color="black">
                  <Box
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    py={2}
                  >
                    <VscServerProcess />
                    <Text ml={2}>Walmart +</Text>
                  </Box>
                </Text>
                {auth && (
                  <Text mt={2} color="black">
                    <Box
                      display="flex"
                      alignItems="center"
                      cursor="pointer"
                      py={2}
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <IoIosLogOut />
                      <Text ml={2}>Sign out</Text>
                    </Box>
                  </Text>
                )}
              </MenuList>
            </Menu>
          </Box>

          {/* Cart */}
          <Box color="white" flexShrink={0}>
            <ChakraLink
              as={ReactRouterLink}
              to="/home/cart"
              textDecoration="none"
              _hover="none"
            >
              <Box display="flex" alignItems="center" p={2}>
                <Box position="relative">
                  <Box
                    bg="#FFC326"
                    color="black"
                    borderRadius="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="18px"
                    h="18px"
                    position="absolute"
                    top="-8px"
                    right="-8px"
                    fontSize="10px"
                    fontWeight="bold"
                  >
                    {count}
                  </Box>
                  <Box fontSize={24}>
                    <BsCart2 />
                  </Box>
                </Box>
                <Box ml={2}>
                  <Text fontSize="10px" color="#ccc">
                    $ {totalPrice}
                  </Text>
                </Box>
              </Box>
            </ChakraLink>
          </Box>
        </Flex>

        {/* Mobile Search Row */}
        <Box display={{ base: "block", lg: "none" }} p={2} pt={0}>
          <InputGroup size="md" bg="#FFFFFF" borderRadius="20px">
            <Input
              pr="4.5rem"
              placeholder="Search everything at walmart"
              borderRadius="20px"
              className="roboto-light"
              bg="#FFFFFF"
              color="black"
              fontSize={16}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <InputRightElement width="3rem">
              <Circle
                size="36px"
                bg="#FFC326"
                color="white"
                cursor="pointer"
                onClick={() => {
                  handleSearch(searchValue);
                  navigate(`/product/${searchValue}`);
                }}
              >
                <Search2Icon />
              </Circle>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <SideNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Searchmenu />
    </Box>
  );
};

export default Navbar;