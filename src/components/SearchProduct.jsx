import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Spacer,
  Stack,
  Text,
  VStack,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../AuthContext/AuthProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { faL } from "@fortawesome/free-solid-svg-icons";
import furnitureImg from './WhatsApp Image 2025-07-13 at 03.02.38_b9df9745.jpg';

const SearchProduct = () => {
  const [data, setData] = useState([]);
  const { search } = useContext(AuthContext);
  const { counter,calculatePrice } = useContext(AuthContext);
  const [isLoading,setLoading]=useState(false)


  useEffect(() => {
    setLoading(true)
    if (search == "smartphone") {
      axios
        .get("https://dummyjson.com/products/category/smartphones")
        .then((data) => {
          setData(data.data.products)
          setLoading(false)
        });
    } else if (search == "furniture") {
      axios
        .get("https://dummyjson.com/products/category/furniture")
        .then((data) => {
          setData(data.data.products)
          setLoading(false)
        });
    } else {
      axios
        .get("https://fakestoreapi.com/products/category/jewelery")
        .then((data) =>{
          setData(data.data)
          setLoading(false)
        });
    }
  }, []);

  function sortByRate(){
   const  datan=[...data].sort((a,b)=>{
          return a.rating.rate-b.rating.rate;
    })
    setData(datan)
    
  }
  function sortByPrice() {
    const sortedData = [...data].sort((a, b) => {
      return a.price - b.price;
    });
    setData(sortedData)
    
  }



if(isLoading){
  return <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' mt={5} />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
}


  return (
    <>
      <Flex justifyContent={"space-between"} mt={20}>
        <Box>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Box>
              <Button borderRadius={20} ml={20}>
                Brand <IoIosArrowDown />
              </Button>
            </Box>
            <Box>
              <Button borderRadius={20} ml={5}>
                In store
              </Button>
            </Box>
            <Box>
              <Button borderRadius={20} ml={5}>
                Price
              </Button>
            </Box>
            <Box>
              <Button borderRadius={20} ml={5}>
                Fullfillment speed
              </Button>
            </Box>
            <Box>
              <Button borderRadius={20} ml={5}>
                Subcription
              </Button>
            </Box>
          </Box>
        </Box>

        <Box bg="white">
          <Button mr={20} bg="white" _hover="none">
            <Menu bg="white">
              {({ isOpen }) => (
                <>
                  <MenuButton
                    bg="white"
                    as={Button}
                    rightIcon={<ChevronDownIcon outline={"none"} />}
                  >
                    Sort by
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={sortByPrice}>Price</MenuItem>
                    <MenuItem onClick={sortByRate}>
                      Rating
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Button>
        </Box>
      </Flex>
      <Box w={"100%"} border="1px solid #ccc" h={"1px"} mt={5}></Box>

      <Box display={"flex"} flexWrap="wrap" justifyContent={"space-evenly"} mt={10}>
        {data.map((item, idx) => {
          // For furniture, use the local image for the first item
          let imgSrc = item.image;
          const isFirstFurniture = search === "furniture" && idx === 0;
          if (isFirstFurniture) {
            imgSrc = furnitureImg;
          }
          return (
            <Box key={item.id} border={"1px solid #ccc"} w={{ base: "90vw", sm: 200 }} p={4} mb={4}>
              <Image src={imgSrc} w={100} />
              <Text>Category : {item.category}</Text>
              <Text className="roboto-bold">{item.title}</Text>
              <Text>Rating : {item.rating.rate}</Text>
              <Text>Now ${item.price}</Text>
              {isFirstFurniture && (
                <Button
                  as="a"
                  href="https://example.com/vr"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="teal"
                  size="sm"
                  mb={2}
                >
                  View in VR
                </Button>
              )}
              <Button mt={2} onClick={()=>{
                counter()
                calculatePrice(item.price)
              }}>
                <IoAddSharp />
                Add
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default SearchProduct;
