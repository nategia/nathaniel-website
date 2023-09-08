import { Flex, Heading, GridItem, Button, Grid, Stack, HStack, SimpleGrid } from "@chakra-ui/react";

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

function AboutMe() {


  return (

    <SimpleGrid columns={2} gap={16}>
      <Flex bgColor='whiteAlpha.600' p={24} h='xl' borderRadius={20} boxShadow='2xl' >
        <Stack p={8} maxW='3xl' >
          <HStack>
            <Heading color='blackAlpha.800' fontSize='xxx-large'>I&apos;m</Heading>
            <Heading fontSize='xxx-large' color='twitter.600'>Nathaniel</Heading></HStack>
          <Heading color='blackAlpha.800' fontSize={58}>Nice to meet you.</Heading>
        </Stack>

      </Flex>

      <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(6, 1fr)' gap={4} p={6}>


        {/* TOP */}
        <GridItem colSpan={2} rowSpan={2} colStart={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/js-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
            _active={{ bg: 'transparent' }}
          >
          </Button>


        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/ts-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>

        {/* MID */}
        <GridItem colSpan={2} rowSpan={2} colStart={1}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/react-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/nextjs-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/jest-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>

        {/* BOTTOM */}

        <GridItem colSpan={2} rowSpan={2} colStart={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/figma-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Button boxSize={{ base: 20, md: 28, lg: 32, xl: 44 }} borderRadius='full' boxShadow='2xl' bgImage='/coding-logos/html-icon.svg' bgPosition='center' backgroundSize='cover'
            _hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
          >
          </Button>
        </GridItem>

      </Grid>
    </SimpleGrid>
  )
}

export default AboutMe