import { Box, Heading } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
        <Box padding={3} bg="ButtonFace" color="teal">
            <Heading size={"lg"}>
                SearchNSort
            </Heading>
        </Box>
    </>
  )
}

export default Navbar
