import { Box } from '@chakra-ui/react'
import React from 'react'

export const LineHorizontal = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box borderTop="1px solid #ccc" h={1} w={{ base: "98%", md: "95%" }} mt={{ base: 3, md: 5 }}></Box>
    </Box>
  )
}
