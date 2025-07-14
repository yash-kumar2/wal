import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Heading4 = () => {
  return (
    <Flex
      w={{ base: "98%", md: "95%" }}
      margin="auto"
      height={{ base: 120, md: 100 }}
      bg="#F2F8FD"
      borderRadius={8}
      justifyContent="center"
      alignItems="center"
      className="heading4"
      mt={18}
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 2, md: 8 }}
      px={{ base: 2, md: 0 }}
    >
      <Box>
        <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-5626/k2-_9f1ca88f-5819-4c4c-8ae1-e15a46420d9b.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF"/>
      </Box>
      <Box>
        <Text className='roboto-bold' fontSize={{ base: "md", md: "lg" }}>Earn 50% cashback on walmart.com .</Text>
      </Box>
      <Box>
        <Text fontSize={{ base: "sm", md: "md" }}>See if You are pre-approved with no creadit risk. <u>Learn how</u> </Text>
      </Box>
    </Flex>
  )
}

export default Heading4