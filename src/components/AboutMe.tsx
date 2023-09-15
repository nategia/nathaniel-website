import {
  Flex,
  Heading,
  Stack,
  HStack,
  SimpleGrid,
  Image,
  useMediaQuery,
  Circle,
  Box,
  Code,
  Text,
  Center,
} from "@chakra-ui/react";

// Hovering up and down animationm. 
{/* <motion.div
  animate={{ y: 20 }}   // Animation brings it back to its original position
  transition={{
    repeatType: 'mirror',
    repeat: Infinity,   // Repeats the animation indefinitely
    duration: 6,       // Duration for each half of the animation cycle (up and down)
    ease: 'linear', // Easing function for smooth motion
  }}

>
</motion.div> */}

const buttonStyles = {
  boxSize: { base: 12, sm: 16, md: 20, lg: 24, xl: 32 },
  borderRadius: 'full',
  boxShadow: '2xl',
  bgPosition: 'center',
  backgroundSize: 'cover',
  _hover: { transform: 'translateY(-4px)', textDecoration: 'none' },
}

function AboutMe() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (

    <SimpleGrid columns={[1, 1, 1, 2]} gap={16} >
      <Flex bgColor='whiteAlpha.800' boxShadow='lg' h='xl' borderRadius={20} direction='column' p={8} gap={2} >

        <Stack maxW='3xl' p={8} >
          <HStack>
            <Heading color='blackAlpha.800' fontSize='6xl'>I&apos;m</Heading>
            <Heading fontSize='6xl' bgClip='text' bgGradient='linear(to-r,  purple.600, blue.500,cyan.200,)'
            >Nathaniel</Heading></HStack>
          <Heading color='blackAlpha.800' fontSize='4xl'>Nice to meet you.</Heading>
        </Stack>
        <Code textColor='gray.900' borderRadius={10} alignSelf='center' px={8}>
          <Text fontSize='xl' textAlign='justify'>
            I&apos;m a self taught <Text as='span' fontWeight='extrabold'>front-end</Text> software engineer who has a natural fascination for problem solving and technology. Along side my skills as a software developer, I also have a Bachelors Degree in Business Management and Marketing - so I not only provide skills as a developer, but a well rounded businessman too.<br /><br /> I love to develop myself, help others, and build long lasting relationships. My work philosophy is to consistently learn with an open mind - getting me one step closer to perfecting my craft.
          </Text>
        </Code>


      </Flex>


      <Center h='xl'  >

        <Box position="relative" alignSelf='center'>
          <Image
            bgGradient='linear(to-r, cyan.200, blue.500, purple.600)'
            boxSize={96}
            borderRadius='full'
            src='nathaniel-images/nate-nobg1.svg'
            alt='nate'
            alignSelf='center'
            my={isLargerThan800 ? 0 : 12}
            borderWidth={4}
            borderColor='blue.800'

          />
          <Circle
            bgGradient='linear(to-r, cyan.200, blue.500, purple.600)'
            size={96}
            borderRadius='full'
            position='absolute'
            top={-15}
            right={-5}
            opacity={0.2}
            zIndex={-1}
          />
          <Circle
            bgGradient='linear(to-r, cyan.200, blue.500, purple.600)'
            size={96}
            borderRadius='full'
            position='absolute'
            top={10}
            right={-10}
            opacity={0.2}
            zIndex={-1}
          />
          <Circle
            bgGradient='linear(to-r, cyan.200, blue.500, purple.600)'
            size={96}
            borderRadius='full'
            position='absolute'
            top={15}
            right={50}
            opacity={0.2}
            zIndex={-1}
          />
        </Box>
      </Center>

    </SimpleGrid>
  )
}

export default AboutMe