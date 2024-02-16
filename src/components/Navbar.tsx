import { Box, Heading } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
        <Box padding={3} pl={10} bg="teal" color="white">
            <Heading size={"md"}>
                SearchNSort
            </Heading>
        </Box>
    </>
  )
}

export default Navbar
