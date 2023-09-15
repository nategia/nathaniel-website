import { Flex, Heading, Box, Spacer, Stack, Button, HStack, VStack, Grid, Text, useMediaQuery, Circle, Image } from "@chakra-ui/react";


function Hero() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (

    <Stack h='xl' borderRadius={34} boxShadow='dark-lg'
      bgImage="url('/hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
    >

      <Flex direction={isLargerThan800 ? 'row' : 'column'} p={isLargerThan800 ? 32 : 16}>
        <Stack gap={isLargerThan800 ? 6 : 4} textAlign='left' justifyItems='left'>
          <Heading fontSize='4xl'>
            Passionate <Heading fontSize='5xl' bgGradient='linear(to-r, cyan.200, blue.500, purple.600)' bgClip='text'>front-end developer</Heading> ready to bring your ideas to life.
          </Heading>
          <Heading fontSize='2xl' >With a strong focus on user-experience and clean code.</Heading >
          <HStack spacing={4} >
            <Button size='md'
              height='48px'
              width='200px'
              border='2px' variant='outline'>Hire</Button>
            <Button size='md'
              height='48px'
              width='200px'
              border='2px' variant='outline'>Contact</Button>
          </HStack>

        </Stack>


      </Flex>


    </Stack >
  )
}

export default Hero