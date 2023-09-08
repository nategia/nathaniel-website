import { Flex, Heading, Box, Spacer, Stack } from "@chakra-ui/react";


function Hero() {

  return (

    <Flex p={24} h='xl' borderRadius={34} boxShadow='dark-lg'
      bgImage="url('/hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
    >
      <Stack p={16} spacing={6} textAlign='left' justifyItems='left'>
        <Heading fontSize={{ base: 'md', md: 'xx-large', lg: 88 }}>Elevate Your Business</Heading>
        <Heading textAlign='left' fontSize={{ base: 'md', md: 'xx-large', lg: 48 }}>with intuitive UX and UI</Heading>
      </Stack>
      <Spacer />
      <Box p={16} >
      </Box>
    </Flex>
  )
}

export default Hero